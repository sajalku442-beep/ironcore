import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
        {/* Column 1: Brand & Bio */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6.5 6.5 11 11" />
                <path d="m21 21-1-1" />
                <path d="m3 3 1 1" />
                <path d="m18 22 4-4" />
                <path d="m2 6 4-4" />
                <path d="m3 10 7-7" />
                <path d="m14 21 7-7" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              IRON<span className="text-amber-500">CORE</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            IronCore Fitness is a standard-setting, premium wellness facility
            dedicated to personal empowerment, state-of-the-art strength gear,
            and scientific, evidence-based results.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-amber-500 transition-colors"
              aria-label="Facebook Link"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-amber-500 transition-colors"
              aria-label="Instagram Link"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-amber-500 transition-colors"
              aria-label="Twitter Link"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-extrabold text-sm tracking-wider uppercase text-white mb-6">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/" className="hover:text-amber-500 transition-colors">
                Home Page
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-amber-500 transition-colors"
              >
                About IronCore
              </Link>
            </li>
            <li>
              <Link
                to="/memberships"
                className="hover:text-amber-500 transition-colors"
              >
                Membership Plans
              </Link>
            </li>
            <li>
              <Link
                to="/trainers"
                className="hover:text-amber-500 transition-colors"
              >
                Meet the Trainers
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-amber-500 transition-colors"
              >
                Facility Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-amber-500 transition-colors"
              >
                Contact & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Programs */}
        <div>
          <h4 className="font-extrabold text-sm tracking-wider uppercase text-white mb-6">
            Target Programs
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <span className="hover:text-amber-500 cursor-pointer transition-colors">
                Weight Loss shredded
              </span>
            </li>
            <li>
              <span className="hover:text-amber-500 cursor-pointer transition-colors">
                Muscle Hypertrophy
              </span>
            </li>
            <li>
              <span className="hover:text-amber-500 cursor-pointer transition-colors">
                Strength and Power
              </span>
            </li>
            <li>
              <span className="hover:text-amber-500 cursor-pointer transition-colors">
                Women-Focused Fitness
              </span>
            </li>
            <li>
              <span className="hover:text-amber-500 cursor-pointer transition-colors">
                Private Athletic Coaching
              </span>
            </li>
            <li>
              <span className="hover:text-amber-500 cursor-pointer transition-colors">
                Conditioning & Agility
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div>
          <h4 className="font-extrabold text-sm tracking-wider uppercase text-white mb-6">
            Gym Address
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
              <span>Park Street, Kolkata, West Bengal, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-amber-500 shrink-0" />
              <span>+91 8013160400</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-amber-500 shrink-0" />
              <span>contact@ironcoregym.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Open 24/7</p>
                <p className="text-xs text-slate-500">Staff: Mon-Fri 8am-8pm</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar Segment */}
      <div className="bg-slate-950 border-t border-slate-900 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} IronCore Fitness LLC. All rights reserved.
            Registered USA.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-amber-500 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors">
              Terms & Conditions
            </span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors">
              Cookie Consent
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
