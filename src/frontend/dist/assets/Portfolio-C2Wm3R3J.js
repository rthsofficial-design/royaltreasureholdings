import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Layout, a as Link } from "./index-DFKZK4DM.js";
import { B as Badge } from "./badge-2xLy4ToM.js";
import { I as Input } from "./input-CgEtxYTz.js";
import { S as Skeleton } from "./skeleton-DBCj5J6f.js";
import { u as useBrands, m as motion } from "./useBackend-Bav98165.js";
import { T as TrendingUp } from "./trending-up-DU4f2BVV.js";
import { B as Building2 } from "./building-2-CLGs_GjC.js";
import { A as ArrowRight } from "./arrow-right-CnzcdSOD.js";
import "./index-43jMSmQZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const SAMPLE_BRANDS = [
  {
    id: 1n,
    order: 1n,
    name: "Rebeluxe",
    description: "A luxury clothing brand defined by superior craftsmanship and high-end street aesthetics. We focus on bold silhouettes and precision tailoring for those who command attention through design, not noise. Blending avant-garde vision with timeless prestige, Rebeluxe sets a new standard in premium apparel.",
    sector: "Fashion & Apparel",
    website: "",
    logoUrl: "/assets/images/rebeluxe-logo.jpeg"
  },
  {
    id: 2n,
    order: 2n,
    name: "Zaren",
    description: "An elite eyewear brand specializing in luxury sunglasses that merge architectural design with high-performance optics. Zaren is defined by bold frames, premium materials, and a focus on visual clarity. Crafted for the modern visionary, each pair is a statement of luxury and precision, offering a new perspective on high-end accessories.",
    sector: "Luxury Accessories",
    website: "",
    logoUrl: "/assets/images/zaren-logo.jpeg"
  },
  {
    id: 3n,
    order: 3n,
    name: "RTHS Arts",
    description: "RTHS Arts bridges the gap between contemporary fine art and the NFT ecosystem, focusing on exclusivity and visual excellence in the Web3 space. From bespoke design concepts to curated digital collections, it serves as the firm's innovative wing for elite digital ownership.",
    sector: "Digital Art & Web3",
    website: "",
    logoUrl: "/assets/images/rths-arts-logo.jpeg"
  },
  {
    id: 4n,
    order: 4n,
    name: "Nytro",
    description: "The premier digital ecosystem for nightlife and event infrastructure. Nytro is an innovative ticketing and management platform designed to streamline the clubbing experience through seamless booking and elite event promotion. By combining high-speed technology with the energy of global nightlife, Nytro sets a new standard for how premium events are accessed and experienced.",
    sector: "Nightlife & Events",
    website: "",
    logoUrl: "/assets/images/nytro-logo.jpeg"
  },
  {
    id: 5n,
    order: 5n,
    name: "PowerHouseElevated",
    description: "A premier record label and talent management house dedicated to the global English music market.",
    sector: "Music & Entertainment",
    website: "",
    logoUrl: "/assets/images/powerhouseelevated-logo.jpeg"
  },
  {
    id: 6n,
    order: 6n,
    name: "Nizax",
    description: "A demi-fine jewelry brand defined by structural elegance and premium craftsmanship. Each collection focuses on minimalist aesthetics and superior quality, utilizing gold-plated and sterling silver materials. Designed for the modern individual, Nizax offers a sophisticated standard in high-end accessories.",
    sector: "Fine Jewelry",
    website: "",
    logoUrl: "/assets/images/nizax-logo.jpeg"
  },
  {
    id: 7n,
    order: 7n,
    name: "RTHS Finserv",
    description: "The dedicated financial arm of the firm specializing in market structure analysis and strategic asset management. RTHS Finserv operates at the intersection of quantitative data and global market trends, driving capital growth through disciplined trading and institutional-grade fiscal governance. It serves as the firm's engine for financial stability and long-term investment scaling.",
    sector: "Financial Services",
    website: "",
    logoUrl: "/assets/images/rths-finserv-logo.jpeg"
  },
  {
    id: 8n,
    order: 8n,
    name: "Edge Studios",
    description: "A premier digital streaming and media platform hosting a curated library of high-production content.",
    sector: "Media & Streaming",
    website: "",
    logoUrl: "/assets/images/edge-studios-logo.jpeg"
  }
];
function BrandCard({ brand, index }) {
  const initials = brand.name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, delay: index * 0.06 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/portfolio/$brandId",
          params: { brandId: brand.id.toString() },
          "data-ocid": "portfolio-brand-card",
          className: "group flex flex-col bg-card border border-border rounded-lg overflow-hidden transition-smooth hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 bg-black flex items-center justify-center border-b border-border overflow-hidden", children: [
              brand.logoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: brand.logoUrl,
                  alt: `${brand.name} logo`,
                  className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center transition-smooth group-hover:bg-primary/12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl text-primary/60 tracking-wide", children: initials }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs font-body font-medium tracking-wide",
                  children: brand.sector
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground leading-snug group-hover:text-accent transition-colors duration-200", children: brand.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ArrowRight,
                  {
                    size: 16,
                    className: "mt-1 flex-shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-smooth"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1", children: brand.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-accent group-hover:underline", children: "View Company →" }) })
            ] })
          ]
        }
      )
    }
  );
}
function BrandCardSkeleton({ id }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-lg overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-44 w-full rounded-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-5/6" })
        ] })
      ]
    },
    id
  );
}
function EmptyState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      "data-ocid": "portfolio-empty-state",
      className: "col-span-full flex flex-col items-center justify-center py-24 text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted/40 border border-border flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 28, className: "text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground mb-2", children: "Portfolio brands coming soon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm leading-relaxed", children: "Our portfolio companies will be showcased here as they are added. Please check back shortly." })
      ]
    }
  );
}
function Portfolio() {
  const [query, setQuery] = reactExports.useState("");
  const { data: brands, isLoading } = useBrands();
  const displayBrands = reactExports.useMemo(() => {
    const source = brands && brands.length > 0 ? [...brands].sort((a, b) => Number(a.order - b.order)) : SAMPLE_BRANDS;
    if (!query.trim()) return source;
    const q = query.toLowerCase();
    return source.filter(
      (b) => b.name.toLowerCase().includes(q) || b.sector.toLowerCase().includes(q) || b.description.toLowerCase().includes(q)
    );
  }, [brands, query]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border",
        "data-ocid": "portfolio-hero",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "max-w-2xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16, className: "text-accent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-body font-medium text-accent tracking-widest uppercase", children: "Our Portfolio" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl text-foreground leading-tight mb-4", children: "Companies We've Built" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "A curated portfolio of market-leading businesses across sectors — each defined by exceptional standards and transformative vision." })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/20 border-b border-border sticky top-0 z-10 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Search,
          {
            size: 16,
            className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": "portfolio-search",
            placeholder: "Search by name or sector…",
            value: query,
            onChange: (e) => setQuery(e.target.value),
            className: "pl-9 bg-card border-border h-9 text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground whitespace-nowrap", children: isLoading ? "Loading…" : `${displayBrands.length} companies` })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        "data-ocid": "portfolio-grid",
        children: isLoading ? ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(BrandCardSkeleton, { id }, id)) : displayBrands.length === 0 && query ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "col-span-full py-24 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg", children: [
                "No companies match",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
                  '"',
                  query,
                  '"'
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setQuery(""),
                  className: "mt-4 text-sm text-accent hover:underline",
                  children: "Clear search"
                }
              )
            ]
          }
        ) : displayBrands.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, {}) : displayBrands.map((brand, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BrandCard, { brand, index: i }, brand.id.toString()))
      }
    ) }) })
  ] });
}
export {
  Portfolio
};
