import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Phone, UserPlus } from "lucide-react";

interface NavLink {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
}) => {
  const location = useLocation();

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Dark overlay backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer slide-out */}
      <div
        className={`absolute inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl flex flex-col p-6 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header inside drawer */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center">
              {/* Custom lifting barbell graphic */}
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
            <span className="text-xl font-bold tracking-tighter text-slate-900">
              IRON<span className="text-amber-500">CORE</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer outline-none"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links Navigation */}
        <nav className="flex-1 py-8 flex flex-col gap-4 overflow-y-auto">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`px-4 py-3 rounded-xl font-bold text-lg transition-all ${
                  isActive
                    ? "bg-amber-50 text-amber-600"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Actions inside mobile menu */}
        <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
          <a
            href="tel:+918013160400"
            className="w-full flex items-center justify-center gap-2 border-2 border-slate-200 py-3 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
          <Link
            to="/memberships"
            onClick={onClose}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 transition-colors"
          >
            <UserPlus size={16} />
            <span>Join Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
