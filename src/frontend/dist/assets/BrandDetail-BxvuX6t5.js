import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, u as useParams, L as Layout, a as Link } from "./index-DFKZK4DM.js";
import { B as Badge } from "./badge-2xLy4ToM.js";
import { P as Primitive, B as Button } from "./index-CH509zmm.js";
import { c as cn, b as useBrand, u as useBrands, m as motion } from "./useBackend-Bav98165.js";
import { S as Skeleton } from "./skeleton-DBCj5J6f.js";
import { C as ChevronRight } from "./chevron-right-C6DcVL7k.js";
import { B as Building2 } from "./building-2-CLGs_GjC.js";
import "./index-43jMSmQZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
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
function DetailSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-32 mb-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full rounded-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-5/6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4/5" })
      ] })
    ] })
  ] }) });
}
function BrandNotFound() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-5xl mx-auto px-6 py-24 text-center",
      "data-ocid": "brand-not-found",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 40, className: "mx-auto mb-6 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-foreground mb-3", children: "Brand not found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "The portfolio company you're looking for doesn't exist or may have been removed." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: "Return to Portfolio" }) })
      ]
    }
  ) });
}
function BrandDetail() {
  const { brandId } = useParams({ from: "/portfolio/$brandId" });
  const brandIdBigInt = reactExports.useMemo(() => {
    try {
      return BigInt(brandId);
    } catch {
      return void 0;
    }
  }, [brandId]);
  const { data: brandFromBackend, isLoading: backendLoading } = useBrand(brandIdBigInt);
  const { data: allBrands, isLoading: brandsLoading } = useBrands();
  const isLoading = backendLoading || brandsLoading;
  const brand = reactExports.useMemo(() => {
    if (brandFromBackend) return brandFromBackend;
    if (allBrands && allBrands.length > 0) return null;
    return SAMPLE_BRANDS.find((b) => b.id === brandIdBigInt) ?? null;
  }, [brandFromBackend, allBrands, brandIdBigInt]);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(DetailSkeleton, {});
  if (!brand) return /* @__PURE__ */ jsxRuntimeExports.jsx(BrandNotFound, {});
  const initials = brand.name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const paragraphs = brand.description.split("\n\n").map((p) => p.trim()).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        className: "flex items-center gap-1.5 text-sm text-muted-foreground",
        "aria-label": "Breadcrumb",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/portfolio",
              className: "hover:text-foreground transition-colors duration-200",
              children: "Portfolio"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium truncate", children: brand.name })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border",
        "data-ocid": "brand-hero",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-12 md:py-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/portfolio",
              "data-ocid": "brand-detail-back",
              className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ArrowLeft,
                  {
                    size: 14,
                    className: "group-hover:-translate-x-0.5 transition-smooth"
                  }
                ),
                "All Companies"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.97 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.4 },
                className: "flex-shrink-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 h-36 rounded-xl bg-black border border-border flex items-center justify-center overflow-hidden", children: brand.logoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: brand.logoUrl,
                    alt: `${brand.name} logo`,
                    className: "w-full h-full object-cover"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl text-primary/50", children: initials }) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 12 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.45, delay: 0.08 },
                className: "flex-1 min-w-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl text-foreground leading-tight mb-3", children: brand.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-3 mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      variant: "secondary",
                      className: "flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 11 }),
                        brand.sector
                      ]
                    }
                  ) }),
                  paragraphs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: paragraphs[0] })
                ]
              }
            )
          ] })
        ] })
      }
    ),
    paragraphs.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background", "data-ocid": "brand-details", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, delay: 0.16 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl text-foreground mb-6", children: [
            "About ",
            brand.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 max-w-3xl", children: paragraphs.slice(1).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-foreground/80 leading-loose",
              children: p
            },
            p.slice(0, 40)
          )) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-widest uppercase text-muted-foreground font-semibold mb-2", children: "Sector" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium", children: brand.sector })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-widest uppercase text-muted-foreground font-semibold mb-2", children: "Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium", children: "Royal Treasure Holding'S" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-foreground mb-1", children: "Interested in learning more?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Get in touch with the RTHS team." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            variant: "outline",
            "data-ocid": "brand-detail-back-portfolio",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
              "Portfolio"
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, "data-ocid": "brand-detail-contact-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Us" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {})
  ] });
}
export {
  BrandDetail
};
