import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Layout } from "../components/Layout";
import { useActiveJobs, useSubmitApplication } from "../hooks/useBackend";
import type { Job, SubmitApplicationArgs } from "../types";
import { JobTypeEnum } from "../types";

// ── Sample data (shown when backend has no active jobs yet) ───────────────────

const SAMPLE_JOBS: Job[] = [
  {
    id: 1n,
    title: "Senior Investment Analyst",
    department: "Investment Management",
    location: "Mumbai, India",
    jobType: JobTypeEnum.fullTime,
    description:
      "Lead financial modeling, due diligence, and valuation analyses for mid-market acquisitions. You will collaborate closely with managing directors on deal sourcing and portfolio monitoring across industrials, consumer, and business services sectors. 5yrs+ of experience required.",
    isActive: true,
  },
  {
    id: 2n,
    title: "Portfolio Operations Associate",
    department: "Portfolio Management",
    location: "Mumbai, India",
    jobType: JobTypeEnum.fullTime,
    description:
      "Drive operational value creation initiatives across our portfolio companies. Responsibilities include KPI tracking, management reporting, and coordinating cross-functional improvement projects with portfolio leadership teams.",
    isActive: true,
  },
  {
    id: 3n,
    title: "Legal & Compliance Counsel",
    department: "Legal",
    location: "Mumbai, India",
    jobType: JobTypeEnum.fullTime,
    description:
      "Provide legal oversight on fund formation, regulatory compliance, and M&A transaction structuring. Advise on LP/GP agreements, regulatory filings, and complex deal negotiations in partnership with external counsel.",
    isActive: true,
  },
  {
    id: 4n,
    title: "Investor Relations Manager",
    department: "Capital Formation",
    location: "Mumbai, India",
    jobType: JobTypeEnum.fullTime,
    description:
      "Manage relationships with existing limited partners and support capital formation efforts. Prepare quarterly reports, LP communications, and due diligence questionnaires for prospective institutional investors.",
    isActive: true,
  },
  {
    id: 5n,
    title: "Financial Reporting Consultant",
    department: "Finance",
    location: "Mumbai, India",
    jobType: JobTypeEnum.contract,
    description:
      "Support quarterly and annual fund reporting, NAV calculations, and audit preparation on a project basis. Ideal for a seasoned finance professional seeking high-impact engagements with a premier private equity platform.",
    isActive: true,
  },
  {
    id: 6n,
    title: "Chief Operating Manager",
    department: "Operations",
    location: "Mumbai, India",
    jobType: JobTypeEnum.fullTime,
    description:
      "Lead and optimize operations for Nytro, RTHS's club ticket booking platform. Oversee day-to-day operational workflows, venue partnerships, ticketing infrastructure, and team coordination to drive seamless event booking experiences. 4+ years of experience required. | Brand: Nytro (under RTHS)",
    isActive: true,
  },
  {
    id: 7n,
    title: "Chief Financial Officer",
    department: "Finance",
    location: "Mumbai, India",
    jobType: JobTypeEnum.fullTime,
    description:
      "Manage all financial operations for Rebeluxe, RTHS's premier luxury clothing brand. Responsibilities include budgeting, financial planning, cost control, reporting, and ensuring fiscal health across the brand's operations. 5yrs+. | Brand: Rebeluxe (under RTHS)",
    isActive: true,
  },
  {
    id: 8n,
    title: "Chief Executive Officer (CEO)",
    department: "Executive Leadership",
    location: "Mumbai, India",
    jobType: JobTypeEnum.fullTime,
    description:
      "Lead and drive the vision for Nytro, RTHS's club booking platform. As CEO, you will be responsible for overall business growth, strategic partnerships, product direction, and scaling operations. Oversee company performance, investor relations, and team leadership to build a leading nightlife and event booking ecosystem. Requirements: 5+ years of leadership or founder-level experience • Strong background in startups, tech platforms, or hospitality/nightlife • Proven ability to scale businesses and drive revenue growth • Strong network and partnership-building skills • Experience in fundraising and financial strategy. | Brand: Nytro (under RTHS)",
    isActive: true,
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────

const JOB_TYPE_LABELS: Record<string, string> = {
  [JobTypeEnum.fullTime]: "Full-Time",
  [JobTypeEnum.partTime]: "Part-Time",
  [JobTypeEnum.contract]: "Contract",
};

function jobTypeVariant(jt: string): "default" | "secondary" | "outline" {
  if (jt === JobTypeEnum.fullTime) return "default";
  if (jt === JobTypeEnum.partTime) return "secondary";
  return "outline";
}

// ── Apply modal ────────────────────────────────────────────────────────────────

interface ApplyForm {
  applicantName: string;
  email: string;
  message: string;
}

function ApplyModal({
  job,
  open,
  onClose,
}: { job: Job | null; open: boolean; onClose: () => void }) {
  const {
    mutate: submit,
    isPending,
    isSuccess,
    reset: resetMutation,
  } = useSubmitApplication();
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm<ApplyForm>();

  function handleClose() {
    onClose();
    resetForm();
    resetMutation();
  }

  const onSubmit = (data: ApplyForm) => {
    if (!job) return;
    const args: SubmitApplicationArgs = { ...data, jobId: job.id };
    submit(args);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) handleClose();
      }}
    >
      <DialogContent className="max-w-lg" data-ocid="apply-modal">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {isSuccess ? "Application Received" : `Apply — ${job?.title}`}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait" initial={false}>
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center gap-4 py-6"
              data-ocid="apply-success"
            >
              <CheckCircle2
                className="w-14 h-14 text-accent"
                strokeWidth={1.5}
              />
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                Thank you for your interest in the{" "}
                <span className="text-foreground font-medium">
                  {job?.title}
                </span>{" "}
                position. Our team will review your application and be in touch
                shortly.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleClose}
                className="mt-2"
                data-ocid="apply-success-close"
              >
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 mt-2"
              noValidate
              data-ocid="apply-form"
            >
              <div className="space-y-2">
                <Label htmlFor="applicantName">Full Name</Label>
                <Input
                  id="applicantName"
                  placeholder="Jane Smith"
                  data-ocid="apply-name"
                  aria-invalid={!!errors.applicantName}
                  {...register("applicantName", {
                    required: "Full name is required",
                  })}
                />
                {errors.applicantName && (
                  <p className="text-xs text-destructive">
                    {errors.applicantName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="appEmail">Email Address</Label>
                <Input
                  id="appEmail"
                  type="email"
                  placeholder="jane@example.com"
                  data-ocid="apply-email"
                  aria-invalid={!!errors.email}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="appMessage">Cover Letter / Message</Label>
                <Textarea
                  id="appMessage"
                  placeholder="Tell us about your background and why you're interested in this role…"
                  rows={5}
                  className="resize-none"
                  data-ocid="apply-message"
                  aria-invalid={!!errors.message}
                  {...register("message", {
                    required: "Please include a brief message",
                    minLength: {
                      value: 20,
                      message: "Message must be at least 20 characters",
                    },
                  })}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="flex-1"
                  data-ocid="apply-submit"
                >
                  {isPending ? "Submitting…" : "Submit Application"}
                </Button>
                <Button type="button" variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

// ── Job Card ───────────────────────────────────────────────────────────────────

function JobCard({
  job,
  index,
  onApply,
}: { job: Job; index: number; onApply: (job: Job) => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/40 hover:shadow-md transition-all duration-300"
      data-ocid={`job-card-${job.id}`}
    >
      {/* Always-visible row */}
      <button
        type="button"
        onClick={() => setExpanded((p) => !p)}
        aria-expanded={expanded}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
        data-ocid={`job-toggle-${job.id}`}
      >
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-200 truncate">
            {job.title}
          </h3>
          <p className="text-xs tracking-wide uppercase text-muted-foreground font-medium mb-3">
            {job.department}
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="shrink-0" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="shrink-0" />
              {JOB_TYPE_LABELS[job.jobType] ?? String(job.jobType)}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 size={12} className="shrink-0" />
              {job.department}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 mt-0.5">
          <Badge variant={jobTypeVariant(job.jobType)}>
            {JOB_TYPE_LABELS[job.jobType] ?? String(job.jobType)}
          </Badge>
          <span
            className="text-muted-foreground text-xs transition-transform duration-200"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
            aria-hidden
          >
            ▼
          </span>
        </div>
      </button>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-6 py-5 bg-muted/20 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {job.description}
              </p>
              <Button
                size="sm"
                onClick={() => onApply(job)}
                data-ocid={`job-apply-${job.id}`}
              >
                Apply for This Position
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Skeletons ─────────────────────────────────────────────────────────────────

function JobsSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4].map((k) => (
        <div
          key={k}
          className="bg-card border border-border rounded-lg p-6 space-y-3"
        >
          <Skeleton className="h-4 w-2/5" />
          <Skeleton className="h-3 w-1/4" />
          <div className="flex gap-4 pt-1">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-28" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export function Jobs() {
  const { data: backendJobs, isLoading } = useActiveJobs();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyOpen, setApplyOpen] = useState(false);

  // Use backend data when available, sample data as fallback
  const jobs: Job[] =
    backendJobs && backendJobs.length > 0 ? backendJobs : SAMPLE_JOBS;

  const departments = [...new Set(jobs.map((j) => j.department))];

  function handleApply(job: Job) {
    setSelectedJob(job);
    setApplyOpen(true);
  }

  return (
    <Layout>
      {/* Hero */}
      <section
        className="bg-primary text-primary-foreground border-b border-border"
        data-ocid="jobs-hero"
      >
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-semibold opacity-60">
              Careers
            </p>
            <h1 className="font-display text-5xl lg:text-6xl leading-tight">
              Join Royal Treasure Holding'S
            </h1>
            <p className="text-primary-foreground/70 max-w-xl leading-relaxed text-lg">
              We seek professionals who combine intellectual rigor with
              entrepreneurial drive. Build enduring value with a team that sets
              the standard in private equity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits bar */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {[
              "Competitive Compensation",
              "Cross-Portfolio Exposure",
              "Mentorship by Senior Partners",
              "Clear Career Progression",
            ].map((benefit) => (
              <span key={benefit} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="bg-background py-16 lg:py-24" data-ocid="jobs-list">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <JobsSkeleton />
          ) : jobs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center py-24 gap-6 text-center"
              data-ocid="jobs-empty"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <Briefcase size={24} className="text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display text-2xl text-foreground">
                  No Open Positions
                </h2>
                <p className="text-muted-foreground max-w-sm text-sm">
                  We don't have any open roles at the moment, but we're always
                  interested in exceptional talent.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
                data-ocid="jobs-contact-cta"
              >
                Get in Touch
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {departments.map((dept) => {
                const deptJobs = jobs.filter((j) => j.department === dept);
                return (
                  <div key={dept} data-ocid={`jobs-dept-${dept}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="font-display text-2xl text-foreground">
                        {dept}
                      </h2>
                      <Badge variant="secondary">{deptJobs.length}</Badge>
                    </div>
                    <div className="space-y-3">
                      {deptJobs.map((job, i) => (
                        <JobCard
                          key={job.id.toString()}
                          job={job}
                          index={i}
                          onApply={handleApply}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Culture section */}
      <section
        className="bg-muted/30 border-t border-border py-16 lg:py-24"
        data-ocid="jobs-culture"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-3">
              Our Culture
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
              Why Royal Treasure Holding'S
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              You'll work alongside some of the most experienced investors and
              operators in private equity. We foster a culture of intellectual
              curiosity, rigorous analysis, and collaborative decision-making
              that creates real impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Mentorship",
                  desc: "Direct access to senior partners and portfolio executives across every engagement.",
                },
                {
                  title: "Impact",
                  desc: "Your work directly influences real operating businesses and investment outcomes.",
                },
                {
                  title: "Growth",
                  desc: "Clear career progression with merit-based advancement and performance recognition.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-lg p-5"
                >
                  <div className="w-6 h-0.5 bg-accent mb-3" />
                  <h3 className="font-semibold text-foreground text-sm mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-card border-t border-border">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display text-xl text-foreground">
              Don't see the right role?
            </h3>
            <p className="text-muted-foreground text-sm">
              We welcome unsolicited introductions from outstanding candidates.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="outline" data-ocid="jobs-cta-contact">
              Send Us Your CV
            </Button>
          </Link>
        </div>
      </section>

      {/* Application modal */}
      <ApplyModal
        job={selectedJob}
        open={applyOpen}
        onClose={() => {
          setApplyOpen(false);
          setSelectedJob(null);
        }}
      />
    </Layout>
  );
}
