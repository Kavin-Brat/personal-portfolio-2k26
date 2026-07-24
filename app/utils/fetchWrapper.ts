import { toast } from "../hooks/useToast";

export interface FetchOptions extends RequestInit {
  timeout?: number;
  retries?: number;
  backoffDelay?: number;
  backoffFactor?: number;
}

/**
 * FetchError Class
 * 
 * Extends the default Error object to hold HTTP response code details
 * and status text descriptions.
 */
export class FetchError extends Error {
  public status: number;
  public statusText: string;

  constructor(message: string, status: number, statusText: string) {
    super(message);
    this.name = "FetchError";
    this.status = status;
    this.statusText = statusText;
  }
}

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * fetchWithRetry Utility
 * 
 * Performs client-side HTTP requests with:
 * - Built-in abort signals and request timeout limits.
 * - Automatic transient server error retries (500, 502, 503, 504, or network drops).
 * - Immediate rejection on non-retryable client errors (400, 401, 403, 404).
 * - Exponential backoff delays to prevent resource stampedes on backend services.
 */
export async function fetchWithRetry(url: string, options: FetchOptions = {}): Promise<Response> {
  const {
    timeout = 10000, // default 10 seconds timeout limit
    retries = 3,     // retry up to 3 times for transient failures
    backoffDelay = 1000,
    backoffFactor = 2,
    ...init
  } = options;

  let attempt = 0;

  while (attempt < retries + 1) {
    const controller = new AbortController();
    const timerId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...init,
        signal: controller.signal,
      });

      clearTimeout(timerId);

      if (response.ok) {
        return response;
      }

      // Handle transient gateway/server codes with retry attempts
      if (response.status >= 500 && response.status <= 504) {
        throw new FetchError(
          `Server returned error status ${response.status}`,
          response.status,
          response.statusText
        );
      }

      // Do NOT retry client-side input errors (4xx codes)
      throw new FetchError(
        `Request failed with status ${response.status}`,
        response.status,
        response.statusText
      );

    } catch (error: unknown) {
      clearTimeout(timerId);

      const isFetchErr = error instanceof FetchError;
      const isTimeoutOrNetwork = error instanceof DOMException && error.name === "AbortError";
      const isTransient = !isFetchErr || (error.status >= 500 && error.status <= 504) || isTimeoutOrNetwork;

      attempt++;

      // Trigger user-facing toast alerts on last attempt or non-transient failures
      if (attempt > retries || !isTransient) {
        const errorMsg = error instanceof Error ? error.message : "An unexpected network error occurred.";
        
        if (process.env.NODE_ENV === "development") {
          console.error(`fetchWithRetry: Failed calling ${url} (attempts: ${attempt}):`, error);
        }

        // Emit global error toast
        toast.error(isTransient ? "Server unreachable. Please try again." : errorMsg);
        throw error;
      }

      // Calculate exponential backoff duration
      const currentDelay = backoffDelay * Math.pow(backoffFactor, attempt - 1);
      
      if (process.env.NODE_ENV === "development") {
        console.warn(`fetchWithRetry: Attempt ${attempt} failed for ${url}. Retrying in ${currentDelay}ms...`);
      }

      await sleep(currentDelay);
    }
  }

  throw new Error("HTTP request failed after maximum retry attempts.");
}
