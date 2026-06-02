import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useBrands } from "@/hooks/useBackend";
import type { Brand } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Search, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

// ── Real RTHS portfolio brands ────────────────────────────────────────────────

const SAMPLE_BRANDS: Brand[] = [
  {
    id: 1n,
    order: 1n,
    name: "Rebeluxe",
    description:
      "A luxury clothing brand defined by superior craftsmanship and high-end street aesthetics. We focus on bold silhouettes and precision tailoring for those who command attention through design, not noise. Blending avant-garde vision with timeless prestige, Rebeluxe sets a new standard in premium apparel.",
    sector: "Fashion & Apparel",
    website: "",
    logoUrl: "/assets/images/rebeluxe-logo.jpeg",
  },
  {
    id: 2n,
    order: 2n,
    name: "Zaren",
    description:
      "An elite eyewear brand specializing in luxury sunglasses that merge architectural design with high-performance optics. Zaren is defined by bold frames, premium materials, and a focus on visual clarity. Crafted for the modern visionary, each pair is a statement of luxury and precision, offering a new perspective on high-end accessories.",
    sector: "Luxury Accessories",
    website: "",
    logoUrl: "/assets/images/zaren-logo.jpeg",
  },
  {
    id: 3n,
    order: 3n,
    name: "RTHS Arts",
    description:
      "RTHS Arts bridges the gap between contemporary fine art and the NFT ecosystem, focusing on exclusivity and visual excellence in the Web3 space. From bespoke design concepts to curated digital collections, it serves as the firm's innovative wing for elite digital ownership.",
    sector: "Digital Art & Web3",
    website: "",
    logoUrl: "/assets/images/rths-arts-logo.jpeg",
  },
  {
    id: 4n,
    order: 4n,
    name: "Nytro",
    description:
      "The premier digital ecosystem for nightlife and event infrastructure. Nytro is an innovative ticketing and management platform designed to streamline the clubbing experience through seamless booking and elite event promotion. By combining high-speed technology with the energy of global nightlife, Nytro sets a new standard for how premium events are accessed and experienced.",
    sector: "Nightlife & Events",
    website: "",
    logoUrl: "/assets/images/nytro-logo.jpeg",
  },
  {
    id: 5n,
    order: 5n,
    name: "PowerHouseElevated",
    description:
      "A premier record label and talent management house dedicated to the global English music market.",
    sector: "Music & Entertainment",
    website: "",
    logoUrl: "/assets/images/powerhouseelevated-logo.jpeg",
  },
  {
    id: 6n,
    order: 6n,
    name: "Nizax",
    description:
      "A demi-fine jewelry brand defined by structural elegance and premium craftsmanship. Each collection focuses on minimalist aesthetics and superior quality, utilizing gold-plated and sterling silver materials. Designed for the modern individual, Nizax offers a sophisticated standard in high-end accessories.",
    sector: "Fine Jewelry",
    website: "",
    logoUrl: "/assets/images/nizax-logo.jpeg",
  },
  {
    id: 7n,
    order: 7n,
    name: "RTHS Finserv",
    description:
      "The dedicated financial arm of the firm specializing in market structure analysis and strategic asset management. RTHS Finserv operates at the intersection of quantitative data and global market trends, driving capital growth through disciplined trading and institutional-grade fiscal governance. It serves as the firm's engine for financial stability and long-term investment scaling.",
    sector: "Financial Services",
    website: "",
    logoUrl: "/assets/images/rths-finserv-logo.jpeg",
  },
  {
    id: 8n,
    order: 8n,
    name: "Edge Studios",
    description:
      "A premier digital streaming and media platform hosting a curated library of high-production content.",
    sector: "Media & Streaming",
    website: "",
    logoUrl: "/assets/images/edge-studios-logo.jpeg",
  },
];

// ── Brand card ────────────────────────────────────────────────────────────────

function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  const initials = brand.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link
        to="/portfolio/$brandId"
        params={{ brandId: brand.id.toString() }}
        data-ocid="portfolio-brand-card"
        className="group flex flex-col bg-card border border-border rounded-lg overflow-hidden transition-smooth hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-full"
      >
        {/* Logo area */}
        <div className="relative h-44 bg-black flex items-center justify-center border-b border-border overflow-hidden">
          {brand.logoUrl ? (
            <img
              src={brand.logoUrl}
              alt={`${brand.name} logo`}
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center transition-smooth group-hover:bg-primary/12">
              <span className="font-display text-2xl text-primary/60 tracking-wide">
                {initials}
              </span>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge
              variant="secondary"
              className="text-xs font-body font-medium tracking-wide"
            >
              {brand.sector}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-display text-lg text-foreground leading-snug group-hover:text-accent transition-colors duration-200">
              {brand.name}
            </h3>
            <ArrowRight
              size={16}
              className="mt-1 flex-shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-smooth"
            />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
            {brand.description}
          </p>
          <div className="mt-4 pt-4 border-t border-border">
            <span className="text-xs font-medium text-accent group-hover:underline">
              View Company →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Skeleton card ─────────────────────────────────────────────────────────────

function BrandCardSkeleton({ id }: { id: string }) {
  return (
    <div
      key={id}
      className="bg-card border border-border rounded-lg overflow-hidden"
    >
      <Skeleton className="h-44 w-full rounded-none" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

// ── Empty state ───────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      data-ocid="portfolio-empty-state"
      className="col-span-full flex flex-col items-center justify-center py-24 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-muted/40 border border-border flex items-center justify-center mb-6">
        <Building2 size={28} className="text-muted-foreground" />
      </div>
      <h3 className="font-display text-2xl text-foreground mb-2">
        Portfolio brands coming soon
      </h3>
      <p className="text-muted-foreground max-w-sm leading-relaxed">
        Our portfolio companies will be showcased here as they are added. Please
        check back shortly.
      </p>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function Portfolio() {
  const [query, setQuery] = useState("");
  const { data: brands, isLoading } = useBrands();

  const displayBrands = useMemo(() => {
    const source =
      brands && brands.length > 0
        ? [...brands].sort((a, b) => Number(a.order - b.order))
        : SAMPLE_BRANDS;
    if (!query.trim()) return source;
    const q = query.toLowerCase();
    return source.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.sector.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q),
    );
  }, [brands, query]);

  return (
    <Layout>
      {/* Page header */}
      <section
        className="bg-card border-b border-border"
        data-ocid="portfolio-hero"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={16} className="text-accent" />
              <span className="text-sm font-body font-medium text-accent tracking-widest uppercase">
                Our Portfolio
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Companies We've Built
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A curated portfolio of market-leading businesses across sectors —
              each defined by exceptional standards and transformative vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="bg-muted/20 border-b border-border sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              data-ocid="portfolio-search"
              placeholder="Search by name or sector…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9 bg-card border-border h-9 text-sm"
            />
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {isLoading ? "Loading…" : `${displayBrands.length} companies`}
          </span>
        </div>
      </div>

      {/* Grid */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="portfolio-grid"
          >
            {isLoading ? (
              ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((id) => (
                <BrandCardSkeleton key={id} id={id} />
              ))
            ) : displayBrands.length === 0 && query ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-24 text-center"
              >
                <p className="text-muted-foreground text-lg">
                  No companies match{" "}
                  <span className="text-foreground font-medium">"{query}"</span>
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-4 text-sm text-accent hover:underline"
                >
                  Clear search
                </button>
              </motion.div>
            ) : displayBrands.length === 0 ? (
              <EmptyState />
            ) : (
              displayBrands.map((brand, i) => (
                <BrandCard key={brand.id.toString()} brand={brand} index={i} />
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
