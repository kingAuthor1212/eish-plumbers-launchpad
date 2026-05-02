import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import serviceGeyser from "@/assets/service-geyser.jpg";
import servicePipes from "@/assets/service-pipes.jpg";
import serviceDrains from "@/assets/service-drains.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing Services in Johannesburg — Geysers, Pipes & Drains | Eish Plumbers" },
      { name: "description", content: "Full-service plumbing in Gauteng: geyser installs and repairs, leak detection, pipe repairs, drain unblocking. Call 011 475 0719." },
      { property: "og:title", content: "Plumbing Services — Eish Plumbers Johannesburg" },
      { property: "og:description", content: "Geyser, pipe and drain specialists. Registered, fast, friendly. Servicing Gauteng." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    img: serviceGeyser,
    title: "Geyser Services",
    bullets: [
      "New geyser installations (electric & solar)",
      "Burst & leaking geyser replacement",
      "Element, thermostat & valve repairs",
      "Pressure & temperature troubleshooting",
    ],
  },
  {
    img: servicePipes,
    title: "Pipe Repairs & Installs",
    bullets: [
      "Hidden leak detection",
      "Burst pipe emergency repair",
      "Full re-piping for older homes",
      "Tap, mixer & fitting replacements",
    ],
  },
  {
    img: serviceDrains,
    title: "Drain Clearing",
    bullets: [
      "Blocked toilet, sink & shower drains",
      "High-pressure water jetting",
      "Camera inspection of drain lines",
      "Outside drain & sewer line clearing",
    ],
  },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="border-b border-white/10 hazard-grid-bg">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-12 py-16 sm:py-24">
          <div className="text-hazard font-heading uppercase tracking-[0.2em] text-sm font-black mb-4">Our Services</div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black uppercase tracking-tighter text-foreground text-balance max-w-5xl">
            Every plumbing problem<br /><span className="text-hazard">has a number.</span>
          </h1>
          <p className="text-lg sm:text-xl text-steel max-w-[60ch] mt-8 leading-relaxed">
            We're registered plumbers serving Johannesburg and greater Gauteng. From new installations to 2am emergencies — pick up the phone, we'll roll a crew.
          </p>
        </div>
      </section>

      <section className="bg-background">
        {services.map((s, i) => (
          <article key={s.title} className={`border-b border-white/10 ${i % 2 === 1 ? "bg-surface" : ""}`}>
            <div className="max-w-[1600px] mx-auto px-4 sm:px-12 py-16 sm:py-24 grid lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="font-heading text-hazard text-7xl sm:text-8xl font-black tracking-tighter mb-4 tabular-nums">
                  0{i + 1}
                </div>
                <h2 className="text-4xl sm:text-6xl font-heading font-black uppercase tracking-tighter text-foreground mb-6 text-balance">
                  {s.title}
                </h2>
                <ul className="space-y-4 text-steel text-lg">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-4 border-b border-white/5 pb-4">
                      <span className="text-hazard font-heading font-black">///</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:0114750719" className="mt-8 inline-flex items-center gap-3 bg-hazard text-background font-heading font-black uppercase tracking-widest text-base px-6 py-4 hover:bg-foreground transition-colors">
                  Book this service →
                </a>
              </div>
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-hazard translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6" />
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="relative aspect-square object-cover w-full border-2 border-white/10"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-hazard text-background py-16 sm:py-20 px-4 sm:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tighter text-balance">
            Don't see your problem?<br />Just call.
          </h2>
          <Link to="/contact" className="inline-block bg-background text-foreground font-heading font-black text-xl uppercase tracking-widest px-8 py-5 hover:bg-foreground hover:text-background transition-colors whitespace-nowrap">
            Get In Touch →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
