import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <nav className="flex justify-between items-center px-4 sm:px-12 py-6 sm:py-8 border-b border-white/10 relative z-20 bg-background">
      <Link to="/" className="text-4xl sm:text-5xl font-heading font-black tracking-tighter text-foreground italic">
        EISH<span className="text-hazard">.</span>
      </Link>

      <div className="hidden md:flex gap-8 text-[15px] font-body font-black uppercase tracking-widest text-steel">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="hover:text-foreground transition-colors py-2"
            activeProps={{ className: "text-foreground" }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <a
        href="tel:0114750719"
        className="hidden md:inline-flex items-center gap-3 bg-hazard text-background font-heading font-black uppercase tracking-widest text-sm px-5 py-3 hover:bg-foreground transition-colors"
      >
        <span className="size-2 bg-background animate-pulse" />
        Call Now
      </a>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-foreground font-heading font-black uppercase tracking-widest text-sm flex flex-col gap-1.5"
        aria-label="Toggle menu"
      >
        <span className="block w-7 h-0.5 bg-foreground" />
        <span className="block w-7 h-0.5 bg-hazard" />
        <span className="block w-7 h-0.5 bg-foreground" />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-white/10 md:hidden flex flex-col z-30">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-6 py-5 border-b border-white/5 font-heading font-black uppercase tracking-widest text-foreground hover:bg-hazard hover:text-background transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:0114750719"
            className="px-6 py-5 bg-hazard text-background font-heading font-black uppercase tracking-widest text-center"
          >
            Call 011 475 0719
          </a>
        </div>
      )}
    </nav>
  );
}
