import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import heroPlumber from "@/assets/hero-plumber.jpg";
import serviceGeyser from "@/assets/service-geyser.jpg";
import servicePipes from "@/assets/service-pipes.jpg";
import serviceDrains from "@/assets/service-drains.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eish Plumbers — 24/7 Emergency Plumbers in Johannesburg | 011 475 0719" },
      { name: "description", content: "Registered Johannesburg plumbers. Fast geyser, pipe & drain repairs and installations across Gauteng. Call 011 475 0719 for rapid response." },
      { property: "og:title", content: "Eish Plumbers — Emergency Plumbing in Johannesburg" },
      { property: "og:description", content: "Burst geyser? Blocked drain? Registered plumbers dispatched fast across Gauteng." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <Hero />
      <ServicesStrip />
      <Stats />
      <Process />
      <FinalCTA />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden hazard-grid-bg">
      {/* Hero image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroPlumber}
          alt="Registered Johannesburg plumber on emergency call"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,oklch(0.72_0.19_50/0.15)_0%,transparent_60%)] blur-3xl mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-12 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Crisis statement */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-3 text-hazard font-heading uppercase tracking-[0.15em] text-base sm:text-xl mb-6 sm:mb-8 border-l-4 border-hazard pl-4">
              Critical Plumbing Repair · Johannesburg
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[110px] font-heading font-black leading-[0.85] text-foreground tracking-tighter uppercase text-balance mb-6 sm:mb-8">
              Water where it{" "}
              <span className="text-hazard block mt-2 sm:inline">shouldn't be?</span>
            </h1>

            <p className="text-lg sm:text-2xl font-body text-steel max-w-[50ch] leading-relaxed mb-10 sm:mb-16 text-pretty">
              Gauteng's registered plumbing crew. We neutralize burst geysers, leaking pipes, and stubborn blockages.{" "}
              <strong className="text-foreground font-black">Fast and friendly. Every call.</strong>
            </p>

            <div className="grid grid-cols-3 gap-6 sm:gap-12 border-t border-white/10 pt-8 sm:pt-10">
              {[
                { n: "01", t: "PIRB Registered", d: "Fully compliant." },
                { n: "02", t: "Rapid Dispatch", d: "Across Gauteng." },
                { n: "03", t: "Guaranteed", d: "Workmanship backed." },
              ].map((s) => (
                <div key={s.n} className="flex flex-col gap-1">
                  <span className="font-heading text-3xl sm:text-5xl text-foreground font-black tracking-tight">{s.n}</span>
                  <span className="font-body text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-hazard font-black mt-2">{s.t}</span>
                  <span className="font-body text-xs sm:text-sm text-steel">{s.d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dispatch panel */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-hazard translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 pointer-events-none" />
            <div className="bg-surface relative z-10 border-2 border-white/10 p-6 sm:p-12 flex flex-col gap-8 sm:gap-10">
              <div className="border-b border-white/10 pb-6 sm:pb-8">
                <h3 className="font-heading text-lg sm:text-2xl uppercase tracking-[0.15em] text-steel mb-3 flex justify-between items-center">
                  Emergency Hotline
                  <span className="text-hazard text-xs sm:text-base">[ LIVE ]</span>
                </h3>
                <a
                  href="tel:0114750719"
                  className="font-heading text-[44px] sm:text-[80px] font-black text-foreground tracking-tighter tabular-nums leading-none block hover:text-hazard transition-colors"
                >
                  011 475 0719
                </a>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { t: "Burst Geysers", d: "Immediate isolation & replacement." },
                  { t: "Severe Blockages", d: "High-pressure drain clearing." },
                  { t: "Pipe Repairs", d: "Leak detection & full replacement." },
                ].map((it) => (
                  <div key={it.t} className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 bg-background border border-white/5 hover:border-hazard/50 transition-colors">
                    <div className="font-heading text-xl sm:text-2xl text-hazard font-black tracking-widest mt-0.5">///</div>
                    <div>
                      <div className="font-body text-foreground font-black uppercase tracking-wider text-sm sm:text-base mb-1">{it.t}</div>
                      <div className="font-body text-steel text-xs sm:text-sm">{it.d}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="tel:0114750719"
                className="w-full bg-hazard text-background font-heading font-black text-2xl sm:text-4xl uppercase tracking-[0.1em] py-5 sm:py-8 hover:bg-foreground transition-all duration-300 flex justify-center items-center gap-4 sm:gap-6 group"
              >
                Dispatch Now
                <span className="group-hover:translate-x-3 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesStrip() {
  const items = [
    { img: serviceGeyser, title: "Geysers", desc: "Burst, leaking or under-performing geysers — repaired or replaced." },
    { img: servicePipes, title: "Pipes", desc: "Hidden leak detection, repairs, and full pipe re-routing." },
    { img: serviceDrains, title: "Drains", desc: "Blocked drains cleared with high-pressure jetting." },
  ];
  return (
    <section className="border-t border-white/10 bg-background py-16 sm:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-hazard font-heading uppercase tracking-[0.2em] text-sm font-black mb-3">Core Capabilities</div>
            <h2 className="text-4xl sm:text-6xl font-heading font-black uppercase tracking-tighter text-foreground text-balance">
              Three problems.<br />One number.
            </h2>
          </div>
          <a href="tel:0114750719" className="font-heading uppercase tracking-widest text-sm font-black text-hazard hover:text-foreground transition-colors">
            Call 011 475 0719 →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((it) => (
            <article key={it.title} className="group relative bg-surface border border-white/10 hover:border-hazard transition-colors overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tighter text-foreground mb-3">{it.title}</h3>
                <p className="text-steel leading-relaxed">{it.desc}</p>
              </div>
              <div className="absolute top-4 right-4 font-heading text-hazard text-xl font-black">///</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-hazard text-background py-12 sm:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-4">
        {[
          { n: "15+", t: "Years on the job" },
          { n: "24/7", t: "Emergency line" },
          { n: "100%", t: "Registered crew" },
          { n: "1000s", t: "Homes serviced" },
        ].map((s) => (
          <div key={s.n} className="border-l-4 border-background pl-4 sm:pl-6">
            <div className="font-heading text-5xl sm:text-7xl font-black tracking-tighter leading-none">{s.n}</div>
            <div className="font-heading uppercase tracking-[0.2em] text-xs sm:text-sm font-black mt-3">{s.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Call the Hotline", d: "Get straight through to a registered plumber. No call centres." },
    { n: "02", t: "Rapid Dispatch", d: "We confirm the problem and roll a kitted-out crew to your door." },
    { n: "03", t: "Fix & Guarantee", d: "Job done right with workmanship backed and explained — no surprises." },
  ];
  return (
    <section className="bg-background py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-12">
        <div className="text-hazard font-heading uppercase tracking-[0.2em] text-sm font-black mb-3">How it works</div>
        <h2 className="text-4xl sm:text-6xl font-heading font-black uppercase tracking-tighter text-foreground text-balance mb-12 sm:mb-16">
          From panic to <span className="text-hazard">fixed.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((s) => (
            <div key={s.n} className="border-t-4 border-hazard pt-6">
              <div className="font-heading text-6xl sm:text-7xl font-black tracking-tighter text-foreground tabular-nums mb-4">{s.n}</div>
              <h3 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-wider text-foreground mb-3">{s.t}</h3>
              <p className="text-steel leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      <div className="hazard-stripes h-3" />
      <div className="bg-surface py-16 sm:py-24 px-4 sm:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-hazard font-heading uppercase tracking-[0.2em] text-sm font-black mb-3">Standing by</div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black uppercase tracking-tighter text-foreground text-balance mb-8">
            Ready to <span className="text-hazard">dispatch</span> a crew.
          </h2>
          <a
            href="tel:0114750719"
            className="inline-block font-heading text-5xl sm:text-7xl font-black text-foreground tracking-tighter tabular-nums hover:text-hazard transition-colors"
          >
            011 475 0719
          </a>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0114750719" className="bg-hazard text-background font-heading font-black text-xl sm:text-2xl uppercase tracking-[0.1em] px-8 py-5 hover:bg-foreground transition-colors">
              Call Now
            </a>
            <a href="https://wa.me/27114750719" className="border-2 border-white/20 text-foreground font-heading font-black text-xl sm:text-2xl uppercase tracking-[0.1em] px-8 py-5 hover:border-hazard hover:text-hazard transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
