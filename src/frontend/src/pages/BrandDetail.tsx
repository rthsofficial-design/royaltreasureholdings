import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useBrand, useBrands } from "@/hooks/useBackend";
import type { Brand } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Building2, ChevronRight, Tag } from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";

// ── Real RTHS portfolio brands (mirrors Portfolio.tsx) ────────────────────────

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

// ── Skeleton ──────────────────────────────────────────────────────────────────

function DetailSkeleton() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Skeleton className="h-5 w-32 mb-10" />
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <div className="md:col-span-2 space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// ── Not found ─────────────────────────────────────────────────────────────────

function BrandNotFound() {
  return (
    <Layout>
      <div
        className="max-w-5xl mx-auto px-6 py-24 text-center"
        data-ocid="brand-not-found"
      >
        <Building2 size={40} className="mx-auto mb-6 text-muted-foreground" />
        <h2 className="font-display text-3xl text-foreground mb-3">
          Brand not found
        </h2>
        <p className="text-muted-foreground mb-8">
          The portfolio company you're looking for doesn't exist or may have
          been removed.
        </p>
        <Button asChild variant="outline">
          <Link to="/portfolio">Return to Portfolio</Link>
        </Button>
      </div>
    </Layout>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export function BrandDetail() {
  const { brandId } = useParams({ from: "/portfolio/$brandId" });

  const brandIdBigInt = useMemo(() => {
    try {
      return BigInt(brandId);
    } catch {
      return undefined;
    }
  }, [brandId]);

  const { data: brandFromBackend, isLoading: backendLoading } =
    useBrand(brandIdBigInt);
  const { data: allBrands, isLoading: brandsLoading } = useBrands();

  const isLoading = backendLoading || brandsLoading;

  const brand = useMemo<Brand | null>(() => {
    if (brandFromBackend) return brandFromBackend;
    // Real brands exist but this one wasn't found — truly missing
    if (allBrands && allBrands.length > 0) return null;
    // No real brands yet — show sample
    return SAMPLE_BRANDS.find((b) => b.id === brandIdBigInt) ?? null;
  }, [brandFromBackend, allBrands, brandIdBigInt]);

  if (isLoading) return <DetailSkeleton />;
  if (!brand) return <BrandNotFound />;

  const initials = brand.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const paragraphs = brand.description
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <nav
            className="flex items-center gap-1.5 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link
              to="/portfolio"
              className="hover:text-foreground transition-colors duration-200"
            >
              Portfolio
            </Link>
            <ChevronRight size={14} className="text-border" />
            <span className="text-foreground font-medium truncate">
              {brand.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section
        className="bg-card border-b border-border"
        data-ocid="brand-hero"
      >
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          <Link
            to="/portfolio"
            data-ocid="brand-detail-back"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-smooth"
            />
            All Companies
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Logo block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex-shrink-0"
            >
              <div className="w-36 h-36 rounded-xl bg-black border border-border flex items-center justify-center overflow-hidden">
                {brand.logoUrl ? (
                  <img
                    src={brand.logoUrl}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-display text-3xl text-primary/50">
                    {initials}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Name + meta */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="flex-1 min-w-0"
            >
              <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-3">
                {brand.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1.5"
                >
                  <Tag size={11} />
                  {brand.sector}
                </Badge>
              </div>

              {paragraphs.length > 0 && (
                <p className="text-muted-foreground leading-relaxed">
                  {paragraphs[0]}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full description */}
      {paragraphs.length > 1 && (
        <section className="bg-background" data-ocid="brand-details">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              <h2 className="font-display text-2xl text-foreground mb-6">
                About {brand.name}
              </h2>
              <div className="space-y-5 max-w-3xl">
                {paragraphs.slice(1).map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-foreground/80 leading-loose"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Company info cards */}
      <section className="bg-muted/20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <div className="bg-card border border-border rounded-lg p-5">
              <p className="text-xs tracking-widest uppercase text-muted-foreground font-semibold mb-2">
                Sector
              </p>
              <p className="text-foreground font-medium">{brand.sector}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-5">
              <p className="text-xs tracking-widest uppercase text-muted-foreground font-semibold mb-2">
                Portfolio
              </p>
              <p className="text-foreground font-medium">
                Royal Treasure Holding'S
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-background border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg text-foreground mb-1">
              Interested in learning more?
            </p>
            <p className="text-sm text-muted-foreground">
              Get in touch with the RTHS team.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button
              asChild
              variant="outline"
              data-ocid="brand-detail-back-portfolio"
            >
              <Link to="/portfolio">
                <ArrowLeft size={14} />
                Portfolio
              </Link>
            </Button>
            <Button asChild data-ocid="brand-detail-contact-cta">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />
    </Layout>
  );
}
