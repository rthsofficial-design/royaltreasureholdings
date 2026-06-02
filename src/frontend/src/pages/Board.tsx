import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Linkedin, User } from "lucide-react";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";
import { useBoardMembers } from "../hooks/useBackend";
import type { BoardMember } from "../types";

// ── Sample data shown when no backend members exist ───────────────────────────

const SAMPLE_MEMBERS: BoardMember[] = [
  {
    id: BigInt(1),
    name: "Sarth",
    title: "Chief Executive Officer",
    bio: "Sarth is Chief Executive Officer of Royal Treasure Holdings. He is the architect of the firm's global strategy, overseeing a diversified ecosystem of 10+ high-growth brands and driving the intersection of cultural prestige and strategic capital.",
    photoUrl: "/assets/images/sarth-headshot.jpg",
    linkedIn: "",
    order: BigInt(1),
  },
  {
    id: BigInt(2),
    name: "Roy",
    title: "Chief Financial Officer",
    bio: "Roy is Chief Financial Officer of Royal Treasure Holdings. He leads the firm's fiscal governance and complex financial architecture, specializing in institutional-grade capital management and global investment strategy.",
    photoUrl: "/assets/images/roy-headshot.jpg",
    linkedIn: "",
    order: BigInt(2),
  },
  {
    id: BigInt(4),
    name: "Kenji",
    title: "Chief Marketing Officer",
    bio: "Kenji is Chief Marketing Officer of Royal Treasure Holdings. He is the architect of narrative, crafting the global identity of the portfolio and bridging the gap between high-end creative vision and market-driven data.",
    photoUrl: "/assets/images/kenji-headshot.jpg",
    linkedIn: "",
    order: BigInt(4),
  },
  {
    id: BigInt(5),
    name: "Abhiraj Singh Thakur",
    title: "Vice President",
    bio: "Abhiraj Singh Thakur is Vice President of Royal Treasure Holdings. He acts as the bridge between executive strategy and divisional execution, ensuring that high-level objectives are successfully integrated across all brand verticals.",
    photoUrl: "/assets/images/abhiraj-headshot.jpg",
    linkedIn: "",
    order: BigInt(5),
  },
  {
    id: BigInt(6),
    name: "Abhinav",
    title: "Chief Legal Officer",
    bio: "Abhinav is Chief Legal Officer of Royal Treasure Holdings. He serves as the firm's strategic shield, managing the global regulatory landscape, IP protection, and structural governance for all holdings.",
    photoUrl: "/assets/images/abhinav-headshot.png",
    linkedIn: "",
    order: BigInt(6),
  },
  {
    id: BigInt(7),
    name: "Maya Rosewood",
    title: "Head of Rebeluxe",
    bio: "Maya Rosewood is Head of Rebeluxe at Royal Treasure Holdings. She leads the creative direction and market expansion of the firm's premier luxury line, ensuring the brand maintains its elite status within the global high-fashion ecosystem.",
    photoUrl: "/assets/images/maya-headshot.png",
    linkedIn: "",
    order: BigInt(7),
  },
];

// ── Deduplicate by name (keeps first occurrence) ──────────────────────────────
function deduplicateMembers(members: BoardMember[]): BoardMember[] {
  const seen = new Set<string>();
  return members.filter((m) => {
    const key = m.name.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ── MemberCard ────────────────────────────────────────────────────────────────

function MemberCard({
  member,
  index,
}: {
  member: BoardMember;
  index: number;
}) {
  const hasPhoto = member.photoUrl && member.photoUrl.trim() !== "";
  const hasLinkedIn = member.linkedIn && member.linkedIn.trim() !== "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group rounded-sm flex flex-col overflow-hidden hover:shadow-2xl transition-smooth"
      style={{ border: "1px solid #222222" }}
      data-ocid={`board-member-card-${member.id}`}
    >
      {/* Headshot */}
      <div
        className="relative w-full aspect-square overflow-hidden"
        style={{ background: "#0d1117" }}
      >
        {hasPhoto ? (
          <img
            src={member.photoUrl}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-smooth group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: "#0d1117" }}
          >
            <User
              style={{ color: "rgba(255,255,255,0.2)" }}
              size={64}
              strokeWidth={1}
            />
            <span
              className="font-display text-4xl select-none"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              {member.name.charAt(0)}
            </span>
          </div>
        )}
        {/* Gold accent bar at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{ background: "oklch(0.65 0.19 60 / 0.85)" }}
        />
      </div>

      {/* Content — always dark background so white text is legible */}
      <div
        className="flex flex-col flex-1 p-6 gap-3"
        style={{ background: "#0d1117" }}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            {/* Name — explicit white, bold */}
            <h3
              className="font-display text-lg leading-snug font-bold"
              style={{ color: "#ffffff" }}
            >
              {member.name}
            </h3>
            {/* Title — gold accent, bold, uppercase */}
            <p
              className="text-[11px] font-body font-bold tracking-widest uppercase mt-1 line-clamp-2"
              style={{ color: "oklch(0.72 0.18 60)" }}
            >
              {member.title}
            </p>
          </div>
          {hasLinkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="shrink-0 mt-0.5 transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.4)" }}
              data-ocid="board-member-linkedin"
            >
              <Linkedin size={17} />
            </a>
          )}
        </div>

        {member.bio && (
          <p
            className="text-[13px] leading-relaxed line-clamp-4 font-body"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            {member.bio}
          </p>
        )}
      </div>
    </motion.article>
  );
}

// ── Skeleton grid ─────────────────────────────────────────────────────────────

function BoardSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {(["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"] as const).map((k) => (
        <div
          key={k}
          className="rounded-sm overflow-hidden"
          style={{ border: "1px solid #222222", background: "#0d1117" }}
        >
          <Skeleton className="w-full aspect-square" />
          <div className="p-6 space-y-3">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-full mt-2" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-3 w-4/6" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Board page ────────────────────────────────────────────────────────────────

export function Board() {
  const { data: members, isLoading } = useBoardMembers();

  const isSampleData = !members || members.length === 0;

  const rawMembers = isSampleData
    ? SAMPLE_MEMBERS
    : [...members].sort((a, b) => Number(a.order) - Number(b.order));

  // Deduplicate to prevent duplicate photo rendering
  const displayMembers = deduplicateMembers(rawMembers);

  return (
    <Layout>
      {/* Page header — dark primary */}
      <section
        className="bg-primary text-primary-foreground py-20 lg:py-28 px-6"
        data-ocid="board-hero"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Badge
              variant="outline"
              className="border-accent text-accent mb-5 text-[10px] tracking-widest uppercase font-body px-3 py-1"
            >
              Leadership
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              Board of Directors
            </h1>
            <p className="mt-5 text-primary-foreground/65 text-base md:text-lg max-w-2xl font-body leading-relaxed">
              Our board unites decades of capital markets expertise, operational
              leadership, and governance excellence to guide Royal Treasure
              Holding'S and its portfolio companies toward sustained, long-term
              value creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Thin gold accent divider */}
      <div
        className="h-[3px]"
        style={{ background: "oklch(0.65 0.19 60 / 0.25)" }}
      />

      {/* Board grid — dark background to match card aesthetic */}
      <section
        className="py-20 lg:py-28 px-6"
        style={{ background: "#080c10" }}
        data-ocid="board-grid"
      >
        <div className="max-w-5xl mx-auto">
          {isLoading ? (
            <BoardSkeleton />
          ) : (
            <div
              className="flex flex-wrap justify-center gap-8"
              data-ocid="board-members-grid"
            >
              {displayMembers.map((member, i) => (
                <div
                  key={member.id.toString()}
                  className="w-full sm:w-72 lg:w-80"
                >
                  <MemberCard member={member} index={i} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Governance note — muted zone */}
      <section className="bg-muted/30 border-t border-border py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex-1"
          >
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
              Governance &amp; Accountability
            </h2>
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-lg">
              Royal Treasure Holding'S maintains the highest standards of
              corporate governance. Our independent board members ensure
              transparency, ethical oversight, and fiduciary responsibility
              across all investment decisions and portfolio operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col gap-0 md:w-60 shrink-0"
          >
            {[
              {
                label: "Board Members",
                value: displayMembers.length.toString(),
              },
              { label: "Independent Directors", value: "3" },
              { label: "Governance Rating", value: "AAA" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between border-b border-border py-4 last:border-0"
              >
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-body">
                  {stat.label}
                </span>
                <span className="font-display text-2xl text-foreground">
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
