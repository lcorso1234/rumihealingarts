const tiles = [
  {
    title: "Book Intake",
    subtitle: "Free 30 minute strategy session aligned to your launch cycle.",
    className:
      "md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#ff5c23] to-[#d32508] text-black",
  },
  {
    title: "Studio Hours",
    subtitle: "Fibonacci windows: 06:18 • 08:02 • 09:56 • 18:02 • 20:26 • 21:58",
    className:
      "md:col-span-2 bg-gradient-to-br from-[#2b2931] to-[#16141d] text-white/80",
  },
  {
    title: "Call Concierge",
    subtitle: "708.932.6851",
    className:
      "bg-gradient-to-br from-[#23ff00] to-[#139400] text-black",
  },
  {
    title: "Email",
    subtitle: "lawrencecorso1@gmail.com",
    className:
      "bg-gradient-to-br from-[#ff1144] to-[#d4002d] text-black",
  },
  {
    title: "Studio",
    subtitle: "77 E Jackson Blvd, Suite 1618, Chicago",
    className:
      "md:col-span-2 bg-gradient-to-br from-white to-[#e5e5e5] text-black",
  },
  {
    title: "Launch Stabilization",
    subtitle: "24/7 support during release weekends.",
    className:
      "md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#00e6ff] to-[#009bb2] text-black",
  },
  {
    title: "Concierge Text",
    subtitle: "SMS +1 (708) 932-6851",
    className:
      "bg-gradient-to-br from-[#ff00ac] to-[#b30079] text-black",
  },
  {
    title: "Intake Prep",
    subtitle: "Bring latest labs or let us draw onsite within 48 hours.",
    className:
      "md:col-span-2 bg-gradient-to-br from-[#1877f2] to-[#1053a7] text-white",
  },
];

export default function ConnectPage() {
  return (
    <main className="space-y-16">
      <section className="rounded-[40px] border border-black/80 bg-black/80 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
        <div className="grid auto-rows-[minmax(140px,auto)] gap-3 md:grid-cols-4">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className={`flex flex-col justify-between rounded-[28px] border-4 border-black p-6 text-sm font-semibold uppercase tracking-[0.3em] ${tile.className}`}
            >
              <span className="text-2xl font-black tracking-[0.4em]">
                {tile.title}
              </span>
              <p className="mt-3 text-xs leading-relaxed">{tile.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-[40px] border border-black/70 bg-black/80 p-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
        We reply within one business hour. Concierge@rumi.health
      </section>
    </main>
  );
}
