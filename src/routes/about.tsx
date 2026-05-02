import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Eish Plumbers — Registered Plumbing Crew in Johannesburg" },
      { name: "description", content: "Eish Plumbers is a registered Johannesburg plumbing business serving Gauteng with fast, friendly geyser, pipe and drain work." },
      { property: "og:title", content: "About Eish Plumbers" },
      { property: "og:description", content: "Registered, friendly, fast. Johannesburg's go-to plumbing crew." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="border-b border-white/10 hazard-grid-bg">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-12 py-16 sm:py-24">
          <div className="text-hazard font-heading uppercase tracking-[0.2em] text-sm font-black mb-4">About Us</div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black uppercase tracking-tighter text-foreground text-balance max-w-5xl">
            Plumbers who actually <span className="text-hazard">pick up the phone.</span>
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-12 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-lg text-steel leading-relaxed">
            <p>
              Eish Plumbers is a Johannesburg-based plumbing business serving homeowners, landlords and businesses across Gauteng. We're registered, fully insured and obsessive about doing the job properly the first time.
            </p>
            <p>
              We do new installations and repairs on geysers, pipes and drains. Whether it's a midnight burst geyser or a planned bathroom upgrade — you'll get the same crew, the same standards, and a quote that doesn't change once we arrive.
            </p>
            <p>
              <strong className="text-foreground">Fast, friendly and Gauteng-proud.</strong> That's the whole pitch.
            </p>
          </div>

          <aside className="bg-surface border border-white/10 p-8 relative">
            <div className="absolute inset-0 bg-hazard translate-x-2 translate-y-2 -z-10" />
            <h3 className="font-heading text-hazard uppercase tracking-[0.2em] text-sm font-black mb-6">Why Eish?</h3>
            <ul className="space-y-5 text-foreground">
              {[
                "PIRB Registered Plumbers",
                "Servicing all of Gauteng",
                "Upfront, honest pricing",
                "Workmanship guaranteed",
                "Fast emergency response",
              ].map((b) => (
                <li key={b} className="flex gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-hazard font-heading font-black">///</span>
                  <span className="font-body">{b}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-surface border-y border-white/10 py-16 px-4 sm:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-hazard font-heading uppercase tracking-[0.2em] text-sm font-black mb-2">Standing By</div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tighter text-foreground">Got a problem? Talk to us.</h2>
          </div>
          <Link to="/contact" className="bg-hazard text-background font-heading font-black text-xl uppercase tracking-widest px-8 py-5 hover:bg-foreground transition-colors whitespace-nowrap">
            Contact Us →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
