import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";
import { useBrands, useFirmInfo } from "../hooks/useBackend";
import type { Brand, Stat } from "../types";

// ── Sample fallback brands shown before real data exists ───────────────────
const SAMPLE_BRANDS: Brand[] = [
  {
    id: 1n,
    name: "Rebeluxe",
    description:
      "A luxury clothing brand defined by superior craftsmanship and high-end street aesthetics. Bold silhouettes and precision tailoring for those who command attention through design, not noise. Blending avant-garde vision with timeless prestige, Rebeluxe sets a new standard in premium apparel.",
    logoUrl: "",
    website: "",
    order: 1n,
    sector: "Luxury Fashion",
  },
  {
    id: 2n,
    name: "Zaren",
    description:
      "An elite eyewear brand specializing in luxury sunglasses that merge architectural design with high-performance optics. Bold frames, premium materials, and a focus on visual clarity. Crafted for the modern visionary, each pair is a statement of luxury and precision.",
    logoUrl: "",
    website: "",
    order: 2n,
    sector: "Luxury Eyewear",
  },
  {
    id: 3n,
    name: "RTHS Arts",
    description:
      "Bridges the gap between contemporary fine art and the NFT ecosystem, focusing on exclusivity and visual excellence in the Web3 space. From bespoke design concepts to curated digital collections, it serves as the firm's innovative wing for elite digital ownership.",
    logoUrl: "",
    website: "",
    order: 3n,
    sector: "Art & Web3",
  },
  {
    id: 4n,
    name: "Nytro",
    description:
      "The premier digital ecosystem for nightlife and event infrastructure. An innovative ticketing and management platform designed to streamline the clubbing experience through seamless booking and elite event promotion.",
    logoUrl: "",
    website: "",
    order: 4n,
    sector: "Nightlife & Events",
  },
  {
    id: 5n,
    name: "PowerHouseElevated",
    description:
      "A premier record label and talent management house dedicated to the global English music market.",
    logoUrl: "",
    website: "",
    order: 5n,
    sector: "Music & Entertainment",
  },
  {
    id: 6n,
    name: "Nizax",
    description:
      "A demi-fine jewelry brand defined by structural elegance and premium craftsmanship. Minimalist aesthetics and superior quality, utilizing gold-plated and sterling silver materials.",
    logoUrl: "",
    website: "",
    order: 6n,
    sector: "Jewelry",
  },
  {
    id: 7n,
    name: "RTHS Finserv",
    description:
      "The dedicated financial arm of the firm specializing in market structure analysis and strategic asset management. Operates at the intersection of quantitative data and global market trends.",
    logoUrl: "",
    website: "",
    order: 7n,
    sector: "Financial Services",
  },
  {
    id: 8n,
    name: "Edge Studios",
    description:
      "A premier digital streaming and media platform hosting a curated library of high-production content.",
    logoUrl: "",
    website: "",
    order: 8n,
    sector: "Media & Streaming",
  },
];

const VALUE_PROPS = [
  {
    icon: TrendingUp,
    title: "Strategic Growth",
    body: "Every brand in our portfolio is guided by a clear growth roadmap — building scale, market presence, and enduring relevance.",
  },
  {
    icon: Shield,
    title: "Operational Mastery",
    body: "Our in-house teams work alongside each brand to sharpen execution, streamline operations, and accelerate sustainable growth.",
  },
  {
    icon: Globe,
    title: "Our Reach",
    body: "Royal Treasure Holding'S connects its portfolio of brands to networks across Asia, Europe, and beyond — opening doors at every level.",
  },
  {
    icon: Target,
    title: "Brand Excellence",
    body: "We hold every brand to the highest standards of quality, identity, and consumer experience — from inception through market leadership.",
  },
];

// ── BrandCard ──────────────────────────────────────────────────────────────
function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  const sector = brand.sector || "Portfolio Company";
  const logoSrc = brand.logoUrl || null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <Link
        to="/portfolio/$brandId"
        params={{ brandId: brand.id.toString() }}
        className="group block surface-elevated rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
        data-ocid={`brand-card-${brand.id}`}
      >
        <div className="w-12 h-12 rounded-md bg-primary/8 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors duration-300">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={brand.name}
              className="w-8 h-8 object-contain"
            />
          ) : (
            <span className="font-display text-lg text-primary group-hover:text-accent transition-colors duration-300">
              {brand.name.charAt(0)}
            </span>
          )}
        </div>

        <Badge
          variant="outline"
          className="text-[10px] tracking-widest uppercase text-muted-foreground border-border px-2 py-0.5 rounded-sm font-body"
        >
          {sector}
        </Badge>

        <h3 className="font-display text-lg text-foreground mt-3 mb-2 leading-snug">
          {brand.name}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {brand.description}
        </p>

        <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span>View Profile</span>
          <ChevronRight size={14} />
        </div>
      </Link>
    </motion.div>
  );
}

// ── Stats bar ──────────────────────────────────────────────────────────────
function StatBar({ stats }: { stats: Stat[] }) {
  return (
    <div
      className="border-t border-b border-border/60 bg-card py-8"
      data-ocid="stat-bar"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-border/40">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col items-center text-center lg:px-8"
            >
              <span className="font-display text-3xl lg:text-4xl text-accent-gold">
                {stat.value}
              </span>
              <span className="text-xs tracking-widest uppercase text-muted-foreground mt-1 font-body">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Home page ──────────────────────────────────────────────────────────────
export function Home() {
  const { data: brands, isLoading: brandsLoading } = useBrands();
  const { data: firmInfo, isLoading: firmLoading } = useFirmInfo();

  const displayBrands = brands && brands.length > 0 ? brands : SAMPLE_BRANDS;

  let stats: Stat[] = [
    { label: "Portfolio Brands", value: "10+" },
    { label: "Years of Excellence", value: "5yrs+" },
    { label: "Markets", value: "15+" },
    { label: "Team Members", value: "200+" },
  ];
  if (firmInfo?.statsJson) {
    try {
      const parsed = JSON.parse(firmInfo.statsJson) as Stat[];
      if (Array.isArray(parsed) && parsed.length > 0) stats = parsed;
    } catch {
      // keep defaults
    }
  }

  const heroHeadline = firmInfo?.heroHeadline ?? "Building Enduring Brands";
  const heroCopy =
    firmInfo?.heroCopy ??
    "A Mumbai-based holding group that builds, grows, and stewards a portfolio of exceptional brands across luxury, lifestyle, and high-growth sectors.";

  return (
    <Layout>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        data-ocid="hero-section"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-skyline.dim_1800x900.jpg')",
          }}
          role="presentation"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.10 0.02 280 / 0.90) 0%, oklch(0.14 0.02 280 / 0.80) 55%, oklch(0.10 0.01 60 / 0.62) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Gold accent bar */}
        <div
          className="absolute top-0 left-0 w-1 h-full bg-accent opacity-70"
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-accent font-body font-medium">
                Royal Treasure Holding'S
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8"
              style={{ color: "oklch(0.97 0 0)" }}
            >
              {firmLoading ? (
                <Skeleton className="h-20 w-3/4 bg-primary/20" />
              ) : (
                heroHeadline
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
              style={{ color: "oklch(0.88 0 0 / 0.85)" }}
            >
              {firmLoading ? (
                <Skeleton className="h-16 w-full bg-primary/20" />
              ) : (
                heroCopy
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-primary font-medium text-sm tracking-wide rounded-md hover:bg-accent/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                data-ocid="hero-cta-portfolio"
              >
                View Our Portfolio
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border/50 text-sm tracking-wide rounded-md hover:bg-primary/10 transition-all duration-200"
                style={{ color: "oklch(0.92 0 0)" }}
                data-ocid="hero-cta-about"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade into background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(var(--background)))",
          }}
          aria-hidden="true"
        />
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────── */}
      <StatBar stats={stats} />

      {/* ── Investment Strategy ───────────────────────────────────────── */}
      <section className="py-24 bg-background" data-ocid="strategy-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs tracking-[0.22em] uppercase text-accent font-body font-medium">
                Our Approach
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Our Approach
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Rooted in a passion for brand excellence and operational
              discipline, our approach combines hands-on leadership with a
              long-term commitment to sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPS.map((vp, i) => {
              const Icon = vp.icon;
              return (
                <motion.div
                  key={vp.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-accent/40 hover:shadow-md transition-all duration-300"
                  data-ocid={`value-prop-${i}`}
                >
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-200">
                    <Icon size={20} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2 leading-snug">
                    {vp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {vp.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Portfolio ────────────────────────────────────────── */}
      <section className="py-24 bg-muted/30" data-ocid="portfolio-preview">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-accent" />
                <span className="text-xs tracking-[0.22em] uppercase text-accent font-body font-medium">
                  Portfolio
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                Featured Holdings
              </h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                A curated selection of our current portfolio companies, each
                representing a category-defining business in its sector.
              </p>
            </div>

            <Link
              to="/portfolio"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 border border-accent/50 text-accent text-sm font-medium rounded-md hover:bg-accent hover:text-primary transition-all duration-200"
              data-ocid="portfolio-view-all"
            >
              View All Holdings
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {brandsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"].map(
                (k) => (
                  <Skeleton key={k} className="h-52 rounded-lg" />
                ),
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayBrands.map((brand, i) => (
                <BrandCard key={brand.id.toString()} brand={brand} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
