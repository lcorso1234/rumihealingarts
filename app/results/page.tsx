const heroQuotes = [
  {
    hue: "from-rose-600/70 to-amber-500/20",
    stat: "+38% HRV",
    headline: "Series B calm",
    copy: "Founder maintained composure through a coast-to-coast fundraising tour using bebop breathwork and botanical neurochemistry.",
  },
  {
    hue: "from-indigo-600/70 to-sky-500/20",
    stat: "-22% Cortisol",
    headline: "Protocol shipping",
    copy: "Web3 team lead balanced overnight deployments with golden-ratio sleep cycles and hydro recovery in our studio.",
  },
  {
    hue: "from-emerald-600/70 to-teal-500/20",
    stat: "+11 hrs Deep Work",
    headline: "Agency retention",
    copy: "Creative CEO stabilized output across 18 clients thanks to Japanese grid scheduling and vagal resets.",
  },
];

const narrativeGrid = [
  {
    badge: "Cowboy Calm",
    text: "Every client learns bebop-inspired breath drills mapped to negotiation or pitch cadences.",
  },
  {
    badge: "Cyber Dashboards",
    text: "Live biometrics sync with your investor calendar so we catch burnout before it hijacks momentum.",
  },
  {
    badge: "Studio Immersions",
    text: "Acupressure, contrast hydrotherapy, and zero-gravity meditation keep your nervous system jazz-ready.",
  },
];

const testimonials = [
  {
    quote:
      "I turned investor grilling into pure improvisation. The deck stayed the same—my nervous system didn’t.",
    name: "Amelia — SaaS Founder",
  },
  {
    quote:
      "The Japanese grid board single-handedly protected my focus window. Now I can scale without hemorrhaging energy.",
    name: "Noah — Impact Investor",
  },
];

export default function ResultsPage() {
  return (
    <main className="space-y-24">
      {/* Section 1 */}
      <section className="relative overflow-hidden rounded-[40px] border border-cyan-400/40 bg-slate-900/70 p-10 shadow-[0_0_45px_rgba(56,189,248,0.35)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.28),transparent_60%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.618fr_1fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100">
              Founder Results
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-cyan-200 sm:text-5xl lg:text-6xl">
              The golden ratio of resilience, told in neon.
            </h1>
            <p className="max-w-2xl text-lg text-cyan-100/70">
              These entrepreneurs rebuilt their biology on Tokyo grid rhythms and bebop-cyberpunk care.
              HRV climbed, deals closed, creative output surged.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/70">
              <span>📈 Metrics</span>
              <span>🧬 Biomarkers</span>
              <span>🎷 Creative Flow</span>
            </div>
          </div>
          <div className="grid gap-4 rounded-[34px] border border-slate-700/60 bg-slate-950/70 p-6">
            {heroQuotes.map((item) => (
              <div
                key={item.headline}
                className={`rounded-2xl border border-cyan-400/20 bg-gradient-to-br ${item.hue} p-6 text-sm text-slate-100/80`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-100">
                  {item.stat}
                </p>
                <h3 className="mt-2 text-lg font-black uppercase tracking-[0.3em] text-white drop-shadow">
                  {item.headline}
                </h3>
                <p className="mt-3 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="grid gap-8 rounded-[40px] border border-emerald-400/40 bg-slate-900/60 p-10 shadow-[0_0_45px_rgba(16,185,129,0.35)] lg:grid-cols-[1fr_1.618fr]">
        <div className="rounded-[30px] border border-emerald-400/40 bg-gradient-to-br from-emerald-500/25 to-cyan-500/10 p-6 text-sm text-emerald-100/80">
          <h2 className="text-3xl font-black uppercase tracking-[0.35em] text-emerald-100">
            Neural upgrades in three movements
          </h2>
          <p className="mt-4 leading-relaxed">
            We orchestrate each recovery story like a bebop track—intro pulse, improvisation, smooth
            landing. Metrics stay in range because we run weekly command reviews.
          </p>
          <ul className="mt-6 space-y-3 text-xs font-semibold uppercase tracking-[0.35em]">
            <li>• Diagnostics + narrative mapping (0.618)</li>
            <li>• Intervention loops (1.0)</li>
            <li>• Reinforcement + momentum planning (1.618)</li>
          </ul>
        </div>
        <div className="grid gap-4 text-sm text-emerald-100/75">
          {narrativeGrid.map((card) => (
            <div
              key={card.badge}
              className="rounded-2xl border border-emerald-400/30 bg-slate-950/70 p-6 shadow-[0_0_25px_rgba(34,211,238,0.25)]"
            >
              <h3 className="text-lg font-black uppercase tracking-[0.3em] text-emerald-100 drop-shadow">
                {card.badge}
              </h3>
              <p className="mt-3 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section className="grid gap-10 rounded-[40px] border border-fuchsia-400/40 bg-slate-900/60 p-10 shadow-[0_0_45px_rgba(217,70,239,0.35)] lg:grid-cols-[1.618fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-[0.35em] text-fuchsia-200">
            Voices from the neon corridor
          </h2>
          <div className="grid gap-4">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-3xl border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-500/20 to-rose-500/10 p-6 text-sm text-fuchsia-100/80"
              >
                <p className="italic">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-200">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
        <div className="rounded-[30px] border border-slate-700/60 bg-slate-950/70 p-6 text-sm text-fuchsia-100/75">
          <p>
            Want to see how this maps to your metrics?{" "}
            <a
              href="tel:7089326851"
              className="font-semibold text-fuchsia-200 underline decoration-dotted decoration-fuchsia-300 underline-offset-4"
            >
              Call 708.932.6851
            </a>{" "}
            or{" "}
            <a
              href="mailto:lawrencecorso1@gmail.com"
              className="font-semibold text-fuchsia-200 underline decoration-dotted decoration-fuchsia-300 underline-offset-4"
            >
              email lawrencecorso1@gmail.com
            </a>{" "}
            for a tailored results audit.
          </p>
        </div>
      </section>
    </main>
  );
}
