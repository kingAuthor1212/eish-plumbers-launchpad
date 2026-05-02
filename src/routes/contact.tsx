import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Eish Plumbers — Call 011 475 0719 | Johannesburg" },
      { name: "description", content: "Call 011 475 0719 or visit us at 25 Rooisering Street, Johannesburg. Registered plumbers servicing all of Gauteng." },
      { property: "og:title", content: "Contact Eish Plumbers" },
      { property: "og:description", content: "Call 011 475 0719 — registered Johannesburg plumbers, standing by." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="border-b border-white/10 hazard-grid-bg">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-12 py-16 sm:py-24">
          <div className="text-hazard font-heading uppercase tracking-[0.2em] text-sm font-black mb-4">Contact</div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black uppercase tracking-tighter text-foreground text-balance">
            Pick up the <span className="text-hazard">phone.</span>
          </h1>
          <p className="text-lg sm:text-xl text-steel max-w-[60ch] mt-8 leading-relaxed">
            The fastest way to a fix is a phone call. We answer 24/7 for emergencies.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-12 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Phone card */}
          <div className="relative">
            <div className="absolute inset-0 bg-hazard translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6" />
            <div className="bg-surface relative border-2 border-white/10 p-8 sm:p-12 h-full flex flex-col">
              <div className="font-heading uppercase tracking-[0.2em] text-steel text-sm font-black mb-4 flex items-center gap-3">
                <span className="size-2 bg-hazard animate-pulse" />
                Hotline
              </div>
              <a
                href="tel:0114750719"
                className="font-heading text-[44px] sm:text-[80px] font-black text-foreground tracking-tighter tabular-nums leading-none hover:text-hazard transition-colors"
              >
                011 475 0719
              </a>
              <div className="mt-8 space-y-6 text-steel">
                <div>
                  <div className="font-heading uppercase tracking-widest text-xs font-black text-hazard mb-1">Hours</div>
                  <div className="text-foreground">Mon – Fri: 08:00 – 17:00</div>
                  <div>24/7 Emergency Line</div>
                </div>
                <div>
                  <div className="font-heading uppercase tracking-widest text-xs font-black text-hazard mb-1">Address</div>
                  <div className="text-foreground">25 Rooisering Street</div>
                  <div>Johannesburg, 1709</div>
                </div>
                <div>
                  <div className="font-heading uppercase tracking-widest text-xs font-black text-hazard mb-1">Coverage</div>
                  <div>All of Gauteng</div>
                </div>
              </div>

              <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-3">
                <a href="tel:0114750719" className="flex-1 bg-hazard text-background font-heading font-black text-lg uppercase tracking-widest px-6 py-4 hover:bg-foreground transition-colors text-center">
                  Call Now
                </a>
                <a href="https://wa.me/27114750719" className="flex-1 border-2 border-white/20 text-foreground font-heading font-black text-lg uppercase tracking-widest px-6 py-4 hover:border-hazard hover:text-hazard transition-colors text-center">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            className="bg-surface border-2 border-white/10 p-8 sm:p-12 flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll get back to you. For emergencies please call 011 475 0719.");
            }}
          >
            <div>
              <div className="font-heading uppercase tracking-[0.2em] text-hazard text-sm font-black mb-2">Send a message</div>
              <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tighter text-foreground">Not urgent? Drop us a line.</h2>
            </div>

            <label className="flex flex-col gap-2">
              <span className="font-heading uppercase tracking-widest text-xs font-black text-steel">Name</span>
              <input
                type="text"
                required
                className="bg-background border border-white/10 px-4 py-4 text-foreground focus:outline-none focus:border-hazard transition-colors"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-heading uppercase tracking-widest text-xs font-black text-steel">Phone</span>
              <input
                type="tel"
                required
                className="bg-background border border-white/10 px-4 py-4 text-foreground focus:outline-none focus:border-hazard transition-colors"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-heading uppercase tracking-widest text-xs font-black text-steel">What's the problem?</span>
              <textarea
                rows={5}
                required
                className="bg-background border border-white/10 px-4 py-4 text-foreground focus:outline-none focus:border-hazard transition-colors resize-none"
              />
            </label>

            <button
              type="submit"
              className="bg-hazard text-background font-heading font-black text-xl uppercase tracking-widest px-6 py-5 hover:bg-foreground transition-colors"
            >
              Send Request →
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
