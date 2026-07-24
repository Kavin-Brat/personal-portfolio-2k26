"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary Component
 * 
 * Catch-all React class boundary trapping visual stack runtime crashes.
 * Prevents full-screen crashes by rendering a localized fallback recovery box
 * with error-retry capabilities.
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (process.env.NODE_ENV === "development") {
      console.error(`ErrorBoundary caught exception in component "${this.props.name || "Unknown"}":`, error, errorInfo);
    }
  }

  private handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="p-6 rounded-2xl border border-rose-500/10 dark:border-rose-500/5 bg-rose-500/5 dark:bg-rose-950/5 backdrop-blur-sm text-left space-y-4 font-sans">
          <div className="flex items-center gap-3 text-rose-550 dark:text-rose-450">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
              Problem loading {this.props.name || "this section"}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            An unexpected error occurred while rendering this page component. You can try recovering it by clicking retry below.
          </p>
          <button
            onClick={this.handleRetry}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white transition-colors cursor-pointer"
          >
            Retry Section
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
