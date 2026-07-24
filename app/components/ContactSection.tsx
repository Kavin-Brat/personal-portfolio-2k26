import React from "react";
import { SOCIAL_LINKS } from "../constants/portfolioConstants";
import { EmailIcon, LocationIcon } from "./Icons";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-slate-200/20 dark:border-slate-800/10 flex flex-col gap-12 scroll-mt-20"
    >
      <div className="space-y-4 text-left">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="w-12 h-1 bg-amber-500 rounded-full" />
      </div>

      <div className="grid md:grid-cols-12 gap-12">
        {/* Contact info cards */}
        <div className="md:col-span-5 space-y-6 text-left">
          <p className="text-slate-650 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Looking to collaborate, discuss technical architecture, or build custom software solutions? Drop me a message—I’m always happy to connect over interesting ideas and projects.
          </p>

          <div className="space-y-4">
            {/* Email item */}
            <div className="group p-4 rounded-xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/20 dark:bg-slate-900/5 flex items-center gap-4 hover:border-amber-500/40 transition-colors">
              <div className="p-3 bg-amber-500/10 text-slate-500 dark:text-slate-400 group-hover:text-amber-500 rounded-lg transition-colors">
                <EmailIcon />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-450 uppercase">Email</h4>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-sm sm:text-base font-bold text-slate-805 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                  {SOCIAL_LINKS.email}
                </a>
              </div>
            </div>

            {/* Location items */}
            <div className="group p-4 rounded-xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/20 dark:bg-slate-900/5 flex items-center gap-4 hover:border-amber-500/40 transition-colors">
              <div className="p-3 bg-amber-500/10 text-slate-500 dark:text-slate-400 group-hover:text-amber-500 rounded-lg transition-colors">
                <LocationIcon />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-450 uppercase">Current Location</h4>
                <p className="text-sm sm:text-base font-bold text-slate-805 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                  Bengaluru, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
