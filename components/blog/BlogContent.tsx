'use client';

import { useMemo, useState } from "react";

type Category = "Podcast" | "Video" | "Blog";

type Post = {
  id: number;
  category: Category;
  title: string;
  excerpt: string;
  highlight: string;
  embedType?: "podcast" | "video";
  embedUrl?: string;
};

const CATEGORIES: Category[] = ["Podcast", "Video", "Blog"];
const POSTS_PER_PAGE = 6;

const POSTS: Post[] = [
  {
    id: 1,
    category: "Podcast",
    title: "Founder Nervous Systems",
    excerpt: "Listen as Dr. Rumi breaks down how entrepreneurs can reset adrenal fatigue with natural care.",
    highlight: "Episode · 36 min",
    embedType: "podcast",
    embedUrl: "https://open.spotify.com/embed/episode/4X5fls8ZpPZpepODM8podR?utm_source=generator&theme=0",
  },
  {
    id: 2,
    category: "Video",
    title: "Guided Breath Reset",
    excerpt: "Five-minute vagal stimulation sequence you can do before investor calls.",
    highlight: "Tutorial · 05:12",
    embedType: "video",
    embedUrl: "https://www.youtube.com/embed/GBwELzvnrQg",
  },
  {
    id: 3,
    category: "Video",
    title: "Golden Ratio Mobility",
    excerpt: "Fibonacci stretch circuit for founders glued to their editing rigs.",
    highlight: "Movement",
  },
  {
    id: 4,
    category: "Podcast",
    title: "Micro-Dosing Sunlight",
    excerpt: "Short, daily sunlight rituals for circadian balance and focus.",
    highlight: "Episode · 22 min",
  },
  {
    id: 5,
    category: "Podcast",
    title: "Founder Fermentation",
    excerpt: "Fermented foods that rebuild the microbiome after product sprints.",
    highlight: "Episode · 18 min",
  },
  {
    id: 6,
    category: "Podcast",
    title: "Sleep Lab Notes",
    excerpt: "Top lab markers we track to see if your recovery protocol is working.",
    highlight: "Episode · 28 min",
  },
  {
    id: 7,
    category: "Blog",
    title: "Fibonacci Recovery Playbook",
    excerpt: "Daily ritual blueprint nested in 0.618 / 1 / 1.618 rhythm.",
    highlight: "Playbook",
  },
  {
    id: 8,
    category: "Blog",
    title: "Acupressure for Launch Burnout",
    excerpt: "Four pressure points to reset headaches and blue-light fatigue fast.",
    highlight: "Guide",
  },
  {
    id: 9,
    category: "Blog",
    title: "Founder Botanical Stack",
    excerpt: "2025 formula combining adaptogens, mitochondrial support, and focus.",
    highlight: "Formula",
  },
  {
    id: 10,
    category: "Blog",
    title: "Anti-Inflammatory Pantry",
    excerpt: "Build a founder-friendly pantry that cools inflammation and stabilizes energy.",
    highlight: "Nutrition",
  },
  {
    id: 11,
    category: "Blog",
    title: "Hydration Timing",
    excerpt: "How to hydrate in golden-ratio intervals to boost cognition and detox.",
    highlight: "Hydration",
  },
  {
    id: 12,
    category: "Blog",
    title: "Founders & Breath CO2",
    excerpt: "Measuring CO2 tolerance to fine-tune focus before strategic conversations.",
    highlight: "Breathwork",
  },
];

const CARD_COLORS = [
  "bg-gradient-to-br from-[#2b2931] to-[#1b1824]",
  "bg-gradient-to-br from-[#27f400] to-[#0b9400]",
  "bg-gradient-to-br from-[#ff1144] to-[#d4002d]",
  "bg-gradient-to-br from-[#ffffff] to-[#dadada]",
  "bg-gradient-to-br from-[#ff00ac] to-[#b30079]",
  "bg-gradient-to-br from-[#1877f2] to-[#1053a7]",
  "bg-gradient-to-br from-[#00e6ff] to-[#009bb2]",
  "bg-gradient-to-br from-[#fcd34d] to-[#f59e0b]",
];

export default function BlogContent() {
  const [category, setCategory] = useState<Category>("Video");
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(
    () => POSTS.filter((post) => post.category === category),
    [category]
  );

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const offset = (page - 1) * POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(offset, offset + POSTS_PER_PAGE);

  const changeCategory = (next: Category) => {
    setCategory(next);
    setPage(1);
  };

  return (
    <div className="space-y-16">
      {/* Mosaic hero */}
      <section className="rounded-[40px] border border-black/80 bg-black/80 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
        <div className="grid auto-rows-[minmax(140px,auto)] gap-3 md:grid-cols-4">
          <div className="md:col-span-2 md:row-span-2 rounded-[28px] border-4 border-black bg-gradient-to-br from-[#ff5c23] to-[#d32508] p-6 text-4xl font-black uppercase tracking-[0.4em] text-black shadow-[0_12px_24px_rgba(214,40,23,0.45)]">
            Rumi Dispatch
          </div>
          <div className="rounded-[28px] border-4 border-black bg-gradient-to-br from-[#2b2931] to-[#16141d]" />
          <div className="rounded-[28px] border-4 border-black bg-gradient-to-br from-[#23ff00] to-[#139400]" />
          <div className="md:col-span-2 rounded-[28px] border-4 border-black bg-gradient-to-br from-[#000000] to-[#111111] p-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Weekly stories for visionary founders. Videos, podcasts, and tactical essays designed to
            keep your nervous system tuned to bebop energy and golden-ratio flow.
          </div>
          <div className="rounded-[28px] border-4 border-black bg-gradient-to-br from-[#ff1144] to-[#d4002d]" />
          <div className="rounded-[28px] border-4 border-black bg-gradient-to-br from-white to-[#ebebeb]" />
          <div className="rounded-[28px] border-4 border-black bg-gradient-to-br from-[#00e6ff] to-[#009bb2]" />
          <div className="md:col-span-3 rounded-[28px] border-4 border-black bg-gradient-to-br from-[#ff00ac] to-[#b30079]" />
          <div className="rounded-[28px] border-4 border-black bg-gradient-to-br from-[#f4f4f4] to-[#e2e2e2]" />
        </div>
      </section>

      {/* Filter + cards in Mondrian layout */}
      <section className="rounded-[40px] border border-black/70 bg-black/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
        <div className="mb-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
          {CATEGORIES.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => changeCategory(cat)}
                className={`rounded-full px-5 py-2 transition ${
                  active
                    ? "bg-gradient-to-r from-[#23ff00] via-[#ff00ac] to-[#00e6ff] text-black shadow-[0_0_20px_rgba(35,255,0,0.4)]"
                    : "border border-white/15 bg-black/70 text-white/70 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid auto-rows-[minmax(140px,auto)] gap-3 md:grid-cols-4">
          {visiblePosts.map((post, index) => {
            const spanClass =
              index % 4 === 0
                ? "md:col-span-2 md:row-span-2"
                : index % 4 === 1
                  ? "md:col-span-2"
                  : index % 4 === 2
                    ? "md:col-span-1 md:row-span-2"
                    : "md:col-span-1";

            return (
              <article
                key={post.id}
                className={`flex flex-col justify-between rounded-[28px] border-4 border-black p-6 text-white ${CARD_COLORS[index % CARD_COLORS.length]} ${spanClass}`}
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-black/80">
                  {post.category} · {post.highlight}
                </div>
                <div className="mt-2 space-y-3">
                  <h3 className="text-2xl font-black uppercase tracking-[0.3em] text-black drop-shadow-md">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80">{post.excerpt}</p>
                  {post.embedType && post.embedUrl && (
                    <div className="overflow-hidden rounded-2xl border-4 border-black bg-black/70">
                      {post.embedType === "podcast" ? (
                        <iframe
                          src={post.embedUrl}
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          className="h-40 w-full"
                        />
                      ) : (
                        <div className="relative w-full pb-[56.25%]">
                          <iframe
                            src={post.embedUrl}
                            title={post.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-full border border-white/15 bg-black/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
          <span>
            Page {page} / {totalPages}
          </span>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={page === 1}
              className={`rounded-full px-4 py-2 transition ${
                page === 1
                  ? "cursor-not-allowed border border-white/10 text-white/30"
                  : "border border-white/20 text-white hover:bg-white/10"
              }`}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={page === totalPages}
              className={`rounded-full px-4 py-2 transition ${
                page === totalPages
                  ? "cursor-not-allowed border border-white/10 text-white/30"
                  : "border border-white/20 text-white hover:bg-white/10"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="grid gap-3 rounded-[40px] border border-black/70 bg-black/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.55)] md:grid-cols-3">
        <div className="md:col-span-2 rounded-[28px] border-4 border-black bg-gradient-to-br from-[#ff00ac] to-[#b30079] p-6 text-2xl font-black uppercase tracking-[0.35em] text-black">
          Subscribe to the neon dispatch
        </div>
        <div className="rounded-[28px] border-4 border-black bg-gradient-to-br from-[#00e6ff] to-[#009bb2] p-6 text-sm font-semibold uppercase tracking-[0.3em] text-black/80">
          Email concierge@rumi.health with subject line “Dispatch” to get the next drop before it hits
          public channels.
        </div>
      </section>
    </div>
  );
}
