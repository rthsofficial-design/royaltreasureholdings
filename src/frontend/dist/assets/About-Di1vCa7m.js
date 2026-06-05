import { c as createLucideIcon, j as jsxRuntimeExports, L as Layout } from "./index-DFKZK4DM.js";
import { S as Skeleton } from "./skeleton-DBCj5J6f.js";
import { a as useFirmInfo, m as motion } from "./useBackend-Bav98165.js";
import { T as Target, S as Shield } from "./target-Cypa044L.js";
import { T as TrendingUp } from "./trending-up-DU4f2BVV.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa"
    }
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Earth = createLucideIcon("earth", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const FALLBACK_STATS = [
  { label: "Portfolio Brands", value: "10+" },
  { label: "Years of Excellence", value: "4+" },
  { label: "Markets", value: "15+" },
  { label: "Team Members", value: "200+" }
];
const INVESTMENT_PILLARS = [
  {
    icon: Target,
    title: "Selective Brand Curation",
    body: "We identify and build brands with strong identities and clear market differentiation, pursuing only those with genuine long-term potential."
  },
  {
    icon: TrendingUp,
    title: "Operational Excellence",
    body: "Our portfolio brands benefit from dedicated operational support — talent, technology, and commercial acceleration from day one."
  },
  {
    icon: Shield,
    title: "Quality Discipline",
    body: "Rigorous standards, brand integrity, and long-term thinking form the backbone of every decision made across the holding group."
  },
  {
    icon: Earth,
    title: "Strategic Networks",
    body: "Decades of relationships across markets enable strategic partnerships and international expansion for every brand we develop."
  },
  {
    icon: Award,
    title: "Long-Term Alignment",
    body: "Our brand leadership teams are empowered and aligned with the holding group's vision — building exceptional businesses for the long haul."
  },
  {
    icon: Users,
    title: "Stewardship Culture",
    body: "We act as responsible stewards of each brand — maintaining the highest ethical standards and a commitment to sustainable, enduring growth."
  }
];
const MILESTONES = [
  {
    year: "2021",
    heading: "Foundation",
    detail: "Royal Treasure Holding'S was established with a mandate to build a diversified portfolio of premium, enduring brands."
  },
  {
    year: "2022",
    heading: "Portfolio Expansion",
    detail: "Expanded the holding group's brand portfolio significantly, cementing RTHS as a recognised name in premium brand development."
  },
  {
    year: "2023",
    heading: "Operational Platform",
    detail: "Launched a dedicated Brand Excellence team — operators, creatives, and sector specialists embedded directly within portfolio brands."
  },
  {
    year: "2024",
    heading: "New Horizons",
    detail: "Continued building towards a portfolio of 10+ premium brands, expanding our presence in luxury, lifestyle, and high-growth sectors."
  }
];
function StatCard({ stat, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      className: "flex flex-col items-center text-center py-8 px-6 border-r border-border last:border-r-0",
      "data-ocid": "about-stat-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display italic text-4xl md:text-5xl text-accent mb-2 leading-none", children: stat.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body text-muted-foreground uppercase tracking-widest", children: stat.label })
      ]
    }
  );
}
function PillarCard({
  pillar,
  index
}) {
  const Icon = pillar.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.08 },
      className: "group p-6 border border-border bg-card hover:border-accent/50 transition-smooth",
      "data-ocid": `pillar-card-${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display italic text-lg text-foreground mb-2", children: pillar.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: pillar.body })
      ]
    }
  );
}
function About() {
  const { data: firmInfo, isLoading } = useFirmInfo();
  const stats = (() => {
    if (!(firmInfo == null ? void 0 : firmInfo.statsJson)) return FALLBACK_STATS;
    try {
      const parsed = JSON.parse(firmInfo.statsJson);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : FALLBACK_STATS;
    } catch {
      return FALLBACK_STATS;
    }
  })();
  const missionText = (firmInfo == null ? void 0 : firmInfo.missionStatement) || "Our mission is to build and grow a portfolio of exceptional brands through long-term stewardship, deep sector expertise, and transformative operational partnership. We hold ourselves to the highest standards of integrity, creativity, and sustainable brand development.";
  const strategyText = (firmInfo == null ? void 0 : firmInfo.investmentStrategy) || "We focus on brands with strong identities and clear pathways to growth. Our target sectors — luxury, consumer, lifestyle, and technology-enabled services — reflect areas where our operational network and brand expertise create advantages that deliver lasting market leadership.";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary text-primary-foreground pt-28 pb-20 px-6",
        "data-ocid": "about-hero",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "text-accent text-xs uppercase tracking-[0.2em] mb-4 font-body",
              children: "About Royal Treasure Holding'S"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 18 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.55, delay: 0.08 },
              className: "font-display italic text-4xl md:text-6xl leading-tight mb-6",
              children: [
                "A Legacy of Brand",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
                " Excellence"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.55, delay: 0.16 },
              className: "text-primary-foreground/70 text-lg max-w-2xl leading-relaxed font-body",
              children: "Founded with a conviction that exceptional brands deserve exceptional stewardship, we have been building enduring portfolio companies across industries since 2021."
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border",
        "data-ocid": "about-stats-bar",
        children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center py-8 px-6 border-r border-border last:border-r-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-24 mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32" })
            ]
          },
          i
        )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { stat, index: i }, stat.label)) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-xs uppercase tracking-[0.2em] mb-4 font-body", children: "Our Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display italic text-3xl md:text-4xl text-foreground mb-6 leading-snug", children: [
              "Built on Conviction,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " Sustained by Excellence"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-px bg-accent mb-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-base mb-4", children: "Royal Treasure Holding'S was founded in 2021 with a singular conviction: that patient, hands-on brand stewardship — paired with deep operational expertise — could transform emerging businesses into category-defining names." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-base", children: "Since our founding in 2021, we have built a portfolio of brands that span luxury, consumer, lifestyle, and technology-enabled services — each one reflecting our commitment to long-term stewardship rather than short-term gain." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.1 },
          className: "relative pl-6 border-l border-border",
          "data-ocid": "about-milestones",
          children: MILESTONES.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: i * 0.1 },
              className: "mb-8 last:mb-0 relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[1.85rem] top-1 w-3 h-3 rounded-full bg-accent border-2 border-background" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-xs uppercase tracking-widest font-body mb-1 block", children: m.year }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display italic text-base text-foreground mb-1", children: m.heading }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: m.detail })
              ]
            },
            m.year
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 py-20 px-6 border-y border-border",
        "data-ocid": "about-mission",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "text-accent text-xs uppercase tracking-[0.2em] mb-6 font-body",
              children: "Mission"
            }
          ),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-5/6 mx-auto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-4/6 mx-auto" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.blockquote,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.55, delay: 0.08 },
              className: "font-display italic text-2xl md:text-3xl text-foreground leading-relaxed",
              "data-ocid": "about-mission-statement",
              children: [
                "“",
                missionText,
                "”"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scaleX: 0 },
              whileInView: { scaleX: 1 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.3 },
              className: "w-16 h-px bg-accent mx-auto mt-8 origin-center"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 px-6", "data-ocid": "about-strategy", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "md:col-span-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-xs uppercase tracking-[0.2em] mb-4 font-body", children: "Portfolio Strategy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display italic text-3xl md:text-4xl text-foreground leading-snug", children: "Where We Build & How We Grow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-px bg-accent my-6" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.1 },
          className: "md:col-span-2",
          "data-ocid": "about-strategy-text",
          children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-11/12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-4/5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full mt-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-10/12" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-base", children: strategyText })
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/20 py-20 px-6 border-t border-border",
        "data-ocid": "about-pillars",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-xs uppercase tracking-[0.2em] mb-4 font-body", children: "Our Principles" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display italic text-3xl md:text-4xl text-foreground", children: "Six Pillars of Our Approach" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
              "data-ocid": "about-pillars-grid",
              children: INVESTMENT_PILLARS.map((pillar, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PillarCard, { pillar, index: i }, pillar.title))
            }
          )
        ] })
      }
    )
  ] });
}
export {
  About
};
