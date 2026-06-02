import { Skeleton } from "@/components/ui/skeleton";
import { Award, Globe2, Shield, Target, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";
import { useFirmInfo } from "../hooks/useBackend";
import type { Stat } from "../types";

const FALLBACK_STATS: Stat[] = [
  { label: "Portfolio Brands", value: "10+" },
  { label: "Years of Excellence", value: "4+" },
  { label: "Markets", value: "15+" },
  { label: "Team Members", value: "200+" },
];

const INVESTMENT_PILLARS = [
  {
    icon: Target,
    title: "Selective Brand Curation",
    body: "We identify and build brands with strong identities and clear market differentiation, pursuing only those with genuine long-term potential.",
  },
  {
    icon: TrendingUp,
    title: "Operational Excellence",
    body: "Our portfolio brands benefit from dedicated operational support — talent, technology, and commercial acceleration from day one.",
  },
  {
    icon: Shield,
    title: "Quality Discipline",
    body: "Rigorous standards, brand integrity, and long-term thinking form the backbone of every decision made across the holding group.",
  },
  {
    icon: Globe2,
    title: "Strategic Networks",
    body: "Decades of relationships across markets enable strategic partnerships and international expansion for every brand we develop.",
  },
  {
    icon: Award,
    title: "Long-Term Alignment",
    body: "Our brand leadership teams are empowered and aligned with the holding group's vision — building exceptional businesses for the long haul.",
  },
  {
    icon: Users,
    title: "Stewardship Culture",
    body: "We act as responsible stewards of each brand — maintaining the highest ethical standards and a commitment to sustainable, enduring growth.",
  },
];

const MILESTONES = [
  {
    year: "2021",
    heading: "Foundation",
    detail:
      "Royal Treasure Holding'S was established with a mandate to build a diversified portfolio of premium, enduring brands.",
  },
  {
    year: "2022",
    heading: "Portfolio Expansion",
    detail:
      "Expanded the holding group's brand portfolio significantly, cementing RTHS as a recognised name in premium brand development.",
  },
  {
    year: "2023",
    heading: "Operational Platform",
    detail:
      "Launched a dedicated Brand Excellence team — operators, creatives, and sector specialists embedded directly within portfolio brands.",
  },
  {
    year: "2024",
    heading: "New Horizons",
    detail:
      "Continued building towards a portfolio of 10+ premium brands, expanding our presence in luxury, lifestyle, and high-growth sectors.",
  },
];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center py-8 px-6 border-r border-border last:border-r-0"
      data-ocid="about-stat-card"
    >
      <span className="font-display italic text-4xl md:text-5xl text-accent mb-2 leading-none">
        {stat.value}
      </span>
      <span className="text-xs font-body text-muted-foreground uppercase tracking-widest">
        {stat.label}
      </span>
    </motion.div>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof INVESTMENT_PILLARS)[number];
  index: number;
}) {
  const Icon = pillar.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group p-6 border border-border bg-card hover:border-accent/50 transition-smooth"
      data-ocid={`pillar-card-${index}`}
    >
      <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
        <Icon size={18} />
      </div>
      <h4 className="font-display italic text-lg text-foreground mb-2">
        {pillar.title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {pillar.body}
      </p>
    </motion.div>
  );
}

export function About() {
  const { data: firmInfo, isLoading } = useFirmInfo();

  const stats: Stat[] = (() => {
    if (!firmInfo?.statsJson) return FALLBACK_STATS;
    try {
      const parsed = JSON.parse(firmInfo.statsJson) as Stat[];
      return Array.isArray(parsed) && parsed.length > 0
        ? parsed
        : FALLBACK_STATS;
    } catch {
      return FALLBACK_STATS;
    }
  })();

  const missionText =
    firmInfo?.missionStatement ||
    "Our mission is to build and grow a portfolio of exceptional brands through long-term stewardship, deep sector expertise, and transformative operational partnership. We hold ourselves to the highest standards of integrity, creativity, and sustainable brand development.";

  const strategyText =
    firmInfo?.investmentStrategy ||
    "We focus on brands with strong identities and clear pathways to growth. Our target sectors — luxury, consumer, lifestyle, and technology-enabled services — reflect areas where our operational network and brand expertise create advantages that deliver lasting market leadership.";

  return (
    <Layout>
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
      <section
        className="bg-primary text-primary-foreground pt-28 pb-20 px-6"
        data-ocid="about-hero"
      >
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs uppercase tracking-[0.2em] mb-4 font-body"
          >
            About Royal Treasure Holding&apos;S
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display italic text-4xl md:text-6xl leading-tight mb-6"
          >
            A Legacy of Brand
            <br className="hidden md:block" /> Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-primary-foreground/70 text-lg max-w-2xl leading-relaxed font-body"
          >
            Founded with a conviction that exceptional brands deserve
            exceptional stewardship, we have been building enduring portfolio
            companies across industries since 2021.
          </motion.p>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────────── */}
      <section
        className="bg-card border-b border-border"
        data-ocid="about-stats-bar"
      >
        {isLoading ? (
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center py-8 px-6 border-r border-border last:border-r-0"
              >
                <Skeleton className="h-12 w-24 mb-2" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        )}
      </section>

      {/* ── Firm Story ────────────────────────────────────────────────── */}
      <section className="bg-background py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4 font-body">
              Our Story
            </p>
            <h2 className="font-display italic text-3xl md:text-4xl text-foreground mb-6 leading-snug">
              Built on Conviction,
              <br /> Sustained by Excellence
            </h2>
            <div className="w-10 h-px bg-accent mb-6" />
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              Royal Treasure Holding&apos;S was founded in 2021 with a singular
              conviction: that patient, hands-on brand stewardship — paired with
              deep operational expertise — could transform emerging businesses
              into category-defining names.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Since our founding in 2021, we have built a portfolio of brands
              that span luxury, consumer, lifestyle, and technology-enabled
              services — each one reflecting our commitment to long-term
              stewardship rather than short-term gain.
            </p>
          </motion.div>

          {/* Milestone Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative pl-6 border-l border-border"
            data-ocid="about-milestones"
          >
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="mb-8 last:mb-0 relative"
              >
                <span className="absolute -left-[1.85rem] top-1 w-3 h-3 rounded-full bg-accent border-2 border-background" />
                <span className="text-accent text-xs uppercase tracking-widest font-body mb-1 block">
                  {m.year}
                </span>
                <h4 className="font-display italic text-base text-foreground mb-1">
                  {m.heading}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {m.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Mission Statement ─────────────────────────────────────────── */}
      <section
        className="bg-muted/30 py-20 px-6 border-y border-border"
        data-ocid="about-mission"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs uppercase tracking-[0.2em] mb-6 font-body"
          >
            Mission
          </motion.p>
          {isLoading ? (
            <div className="space-y-3">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-5/6 mx-auto" />
              <Skeleton className="h-8 w-4/6 mx-auto" />
            </div>
          ) : (
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-display italic text-2xl md:text-3xl text-foreground leading-relaxed"
              data-ocid="about-mission-statement"
            >
              &ldquo;{missionText}&rdquo;
            </motion.blockquote>
          )}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-16 h-px bg-accent mx-auto mt-8 origin-center"
          />
        </div>
      </section>

      {/* ── Investment Strategy ───────────────────────────────────────── */}
      <section className="bg-background py-20 px-6" data-ocid="about-strategy">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-1"
            >
              <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4 font-body">
                Portfolio Strategy
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-foreground leading-snug">
                Where We Build &amp; How We Grow
              </h2>
              <div className="w-10 h-px bg-accent my-6" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2"
              data-ocid="about-strategy-text"
            >
              {isLoading ? (
                <div className="space-y-3">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-11/12" />
                  <Skeleton className="h-5 w-4/5" />
                  <Skeleton className="h-5 w-full mt-4" />
                  <Skeleton className="h-5 w-10/12" />
                </div>
              ) : (
                <p className="text-muted-foreground leading-relaxed text-base">
                  {strategyText}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Investment Pillars ────────────────────────────────────────── */}
      <section
        className="bg-muted/20 py-20 px-6 border-t border-border"
        data-ocid="about-pillars"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4 font-body">
              Our Principles
            </p>
            <h2 className="font-display italic text-3xl md:text-4xl text-foreground">
              Six Pillars of Our Approach
            </h2>
          </motion.div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="about-pillars-grid"
          >
            {INVESTMENT_PILLARS.map((pillar, i) => (
              <PillarCard key={pillar.title} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
