import { c as createLucideIcon, j as jsxRuntimeExports, L as Layout } from "./index-DFKZK4DM.js";
import { B as Badge } from "./badge-2xLy4ToM.js";
import { S as Skeleton } from "./skeleton-DBCj5J6f.js";
import { d as useBoardMembers, m as motion } from "./useBackend-Bav98165.js";
import "./index-43jMSmQZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const SAMPLE_MEMBERS = [
  {
    id: BigInt(1),
    name: "Sarth",
    title: "Chief Executive Officer",
    bio: "Sarth is Chief Executive Officer of Royal Treasure Holdings. He is the architect of the firm's global strategy, overseeing a diversified ecosystem of 10+ high-growth brands and driving the intersection of cultural prestige and strategic capital.",
    photoUrl: "/assets/images/sarth-headshot.jpg",
    linkedIn: "",
    order: BigInt(1)
  },
  {
    id: BigInt(2),
    name: "Roy",
    title: "Chief Financial Officer",
    bio: "Roy is Chief Financial Officer of Royal Treasure Holdings. He leads the firm's fiscal governance and complex financial architecture, specializing in institutional-grade capital management and global investment strategy.",
    photoUrl: "/assets/images/roy-headshot.jpg",
    linkedIn: "",
    order: BigInt(2)
  },
  {
    id: BigInt(4),
    name: "Kenji",
    title: "Chief Marketing Officer",
    bio: "Kenji is Chief Marketing Officer of Royal Treasure Holdings. He is the architect of narrative, crafting the global identity of the portfolio and bridging the gap between high-end creative vision and market-driven data.",
    photoUrl: "/assets/images/kenji-headshot.jpg",
    linkedIn: "",
    order: BigInt(4)
  },
  {
    id: BigInt(5),
    name: "Abhiraj Singh Thakur",
    title: "Vice President",
    bio: "Abhiraj Singh Thakur is Vice President of Royal Treasure Holdings. He acts as the bridge between executive strategy and divisional execution, ensuring that high-level objectives are successfully integrated across all brand verticals.",
    photoUrl: "/assets/images/abhiraj-headshot.jpg",
    linkedIn: "",
    order: BigInt(5)
  },
  {
    id: BigInt(6),
    name: "Abhinav",
    title: "Chief Legal Officer",
    bio: "Abhinav is Chief Legal Officer of Royal Treasure Holdings. He serves as the firm's strategic shield, managing the global regulatory landscape, IP protection, and structural governance for all holdings.",
    photoUrl: "/assets/images/abhinav-headshot.png",
    linkedIn: "",
    order: BigInt(6)
  },
  {
    id: BigInt(7),
    name: "Maya Rosewood",
    title: "Head of Rebeluxe",
    bio: "Maya Rosewood is Head of Rebeluxe at Royal Treasure Holdings. She leads the creative direction and market expansion of the firm's premier luxury line, ensuring the brand maintains its elite status within the global high-fashion ecosystem.",
    photoUrl: "/assets/images/maya-headshot.png",
    linkedIn: "",
    order: BigInt(7)
  }
];
function deduplicateMembers(members) {
  const seen = /* @__PURE__ */ new Set();
  return members.filter((m) => {
    const key = m.name.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function MemberCard({
  member,
  index
}) {
  const hasPhoto = member.photoUrl && member.photoUrl.trim() !== "";
  const hasLinkedIn = member.linkedIn && member.linkedIn.trim() !== "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.45, delay: index * 0.07 },
      className: "group rounded-sm flex flex-col overflow-hidden hover:shadow-2xl transition-smooth",
      style: { border: "1px solid #222222" },
      "data-ocid": `board-member-card-${member.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative w-full aspect-square overflow-hidden",
            style: { background: "#0d1117" },
            children: [
              hasPhoto ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: member.photoUrl,
                  alt: member.name,
                  className: "w-full h-full object-cover object-top transition-smooth group-hover:scale-105"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "w-full h-full flex flex-col items-center justify-center gap-3",
                  style: { background: "#0d1117" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      User,
                      {
                        style: { color: "rgba(255,255,255,0.2)" },
                        size: 64,
                        strokeWidth: 1
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-display text-4xl select-none",
                        style: { color: "rgba(255,255,255,0.15)" },
                        children: member.name.charAt(0)
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute bottom-0 left-0 right-0 h-[3px]",
                  style: { background: "oklch(0.65 0.19 60 / 0.85)" }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col flex-1 p-6 gap-3",
            style: { background: "#0d1117" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-lg leading-snug font-bold",
                      style: { color: "#ffffff" },
                      children: member.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[11px] font-body font-bold tracking-widest uppercase mt-1 line-clamp-2",
                      style: { color: "oklch(0.72 0.18 60)" },
                      children: member.title
                    }
                  )
                ] }),
                hasLinkedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: member.linkedIn,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `${member.name} on LinkedIn`,
                    className: "shrink-0 mt-0.5 transition-colors duration-200",
                    style: { color: "rgba(255,255,255,0.4)" },
                    "data-ocid": "board-member-linkedin",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 17 })
                  }
                )
              ] }),
              member.bio && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[13px] leading-relaxed line-clamp-4 font-body",
                  style: { color: "rgba(255,255,255,0.75)" },
                  children: member.bio
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function BoardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-sm overflow-hidden",
      style: { border: "1px solid #222222", background: "#0d1117" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full aspect-square" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full mt-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-5/6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-4/6" })
        ] })
      ]
    },
    k
  )) });
}
function Board() {
  const { data: members, isLoading } = useBoardMembers();
  const isSampleData = !members || members.length === 0;
  const rawMembers = isSampleData ? SAMPLE_MEMBERS : [...members].sort((a, b) => Number(a.order) - Number(b.order));
  const displayMembers = deduplicateMembers(rawMembers);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary text-primary-foreground py-20 lg:py-28 px-6",
        "data-ocid": "board-hero",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.55 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "border-accent text-accent mb-5 text-[10px] tracking-widest uppercase font-body px-3 py-1",
                  children: "Leadership"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl leading-tight", children: "Board of Directors" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-primary-foreground/65 text-base md:text-lg max-w-2xl font-body leading-relaxed", children: "Our board unites decades of capital markets expertise, operational leadership, and governance excellence to guide Royal Treasure Holding'S and its portfolio companies toward sustained, long-term value creation." })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-[3px]",
        style: { background: "oklch(0.65 0.19 60 / 0.25)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 lg:py-28 px-6",
        style: { background: "#080c10" },
        "data-ocid": "board-grid",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(BoardSkeleton, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex flex-wrap justify-center gap-8",
            "data-ocid": "board-members-grid",
            children: displayMembers.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-full sm:w-72 lg:w-80",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MemberCard, { member, index: i })
              },
              member.id.toString()
            ))
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-t border-border py-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto flex flex-col md:flex-row md:items-start gap-10 md:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.45 },
          className: "flex-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-foreground mb-3", children: "Governance & Accountability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body leading-relaxed max-w-lg", children: "Royal Treasure Holding'S maintains the highest standards of corporate governance. Our independent board members ensure transparency, ethical oversight, and fiduciary responsibility across all investment decisions and portfolio operations." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.45, delay: 0.1 },
          className: "flex flex-col gap-0 md:w-60 shrink-0",
          children: [
            {
              label: "Board Members",
              value: displayMembers.length.toString()
            },
            { label: "Independent Directors", value: "3" },
            { label: "Governance Rating", value: "AAA" }
          ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between border-b border-border py-4 last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground uppercase tracking-widest font-body", children: stat.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl text-foreground", children: stat.value })
              ]
            },
            stat.label
          ))
        }
      )
    ] }) })
  ] });
}
export {
  Board
};
