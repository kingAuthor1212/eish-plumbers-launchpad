import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 mt-24">
      <div className="hazard-stripes h-3" />
      <div className="max-w-[1600px] mx-auto px-4 sm:px-12 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-5xl font-heading font-black tracking-tighter text-foreground italic mb-4">
            EISH<span className="text-hazard">.</span>
          </div>
          <p className="text-steel max-w-md leading-relaxed">
            Registered plumbers serving Johannesburg and greater Gauteng. New installations and repairs on geysers, pipes and drains. Fast and friendly — every call.
          </p>
        </div>

        <div>
          <h3 className="font-heading uppercase tracking-[0.2em] text-hazard text-sm font-black mb-4">Contact</h3>
          <ul className="space-y-3 text-steel">
            <li>
              <a href="tel:0114750719" className="hover:text-foreground transition-colors font-heading text-2xl font-black tabular-nums tracking-tight text-foreground block">
                011 475 0719
              </a>
            </li>
            <li>25 Rooisering Street</li>
            <li>Johannesburg, 1709</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading uppercase tracking-[0.2em] text-hazard text-sm font-black mb-4">Sitemap</h3>
          <ul className="space-y-3 text-steel">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 sm:px-12 py-6 text-xs uppercase tracking-widest text-steel font-heading font-black flex flex-col sm:flex-row justify-between gap-2 max-w-[1600px] mx-auto">
        <span>© {new Date().getFullYear()} Eish Plumbers</span>
        <span>PIRB Registered // Gauteng</span>
      </div>
    </footer>
  );
}
