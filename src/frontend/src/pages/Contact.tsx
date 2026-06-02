import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, Mail, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Layout } from "../components/Layout";
import { useSubmitContact } from "../hooks/useBackend";
import type { SubmitContactArgs } from "../types";

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Office",
    lines: ["Mumbai, Maharashtra, India"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@royaltreasurehgs.com"],
  },
] as const;

function FieldError({ message }: { message: string }) {
  return (
    <p
      role="alert"
      className="flex items-center gap-1.5 text-destructive text-xs mt-1"
    >
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      {message}
    </p>
  );
}

export function Contact() {
  const {
    mutateAsync: submitContact,
    isPending,
    isError,
    reset: resetMutation,
  } = useSubmitContact();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm<SubmitContactArgs>({ mode: "onBlur" });

  async function onSubmit(data: SubmitContactArgs) {
    await submitContact(data);
    setSubmitted(true);
    resetForm();
  }

  function handleSendAnother() {
    setSubmitted(false);
    resetMutation();
  }

  return (
    <Layout>
      {/* Page header */}
      <section
        className="bg-card border-b border-border py-16 lg:py-24"
        data-ocid="contact-hero"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest uppercase text-accent font-semibold mb-3">
              Contact
            </p>
            <h1 className="font-display text-5xl lg:text-6xl text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed text-lg">
              We welcome enquiries from entrepreneurs, partners, and
              professionals interested in connecting with Royal Treasure
              Holding'S.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="bg-background py-16 lg:py-24"
        data-ocid="contact-body"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact details column */}
            <motion.aside
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-10"
              data-ocid="contact-details"
            >
              <div>
                <h2 className="font-display text-2xl text-foreground mb-2">
                  Business Enquiries
                </h2>
                <div className="w-10 h-px bg-accent mb-6" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Royal Treasure Holding'S is headquartered in Mumbai, India.
                  Reach out using the form or email address below and our team
                  will respond promptly.
                </p>
              </div>

              <ul className="space-y-7">
                {CONTACT_DETAILS.map(({ icon: Icon, label, lines }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="mt-0.5 p-2 rounded bg-muted/40 border border-border h-fit">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                        {label}
                      </p>
                      {lines.map((line) => (
                        <p
                          key={line}
                          className="text-foreground text-sm leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-border pt-8">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All enquiries are treated with strict confidentiality. We aim
                  to respond to all messages within two business days.
                </p>
              </div>
            </motion.aside>

            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-card border border-border rounded-lg p-8 lg:p-10">
                <h2 className="font-display text-2xl text-foreground mb-8">
                  Send a Message
                </h2>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.3 }}
                      data-ocid="contact-success"
                      className="flex flex-col items-start gap-5 py-4"
                    >
                      <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                        <CheckCircle2 className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-lg mb-1">
                          Message received. Thank you.
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                          A member of our team will review your enquiry and
                          respond within two business days. We appreciate your
                          interest in Royal Treasure Holding'S.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSendAnother}
                        data-ocid="contact-send-another"
                      >
                        Send another message
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
                      noValidate
                      className="space-y-6"
                      data-ocid="contact-form"
                    >
                      {/* Name & Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            placeholder="Jane Smith"
                            data-ocid="contact-name"
                            className={`mt-1.5 ${errors.name ? "border-destructive focus-visible:ring-destructive/30" : ""}`}
                            aria-invalid={!!errors.name}
                            {...register("name", {
                              required: "Full name is required",
                            })}
                          />
                          {errors.name && (
                            <FieldError message={errors.name.message!} />
                          )}
                        </div>

                        <div>
                          <Label htmlFor="email">
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="jane@firm.com"
                            data-ocid="contact-email"
                            className={`mt-1.5 ${errors.email ? "border-destructive focus-visible:ring-destructive/30" : ""}`}
                            aria-invalid={!!errors.email}
                            {...register("email", {
                              required: "Email address is required",
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address",
                              },
                            })}
                          />
                          {errors.email && (
                            <FieldError message={errors.email.message!} />
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <Label htmlFor="subject">
                          Subject <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Business Enquiry"
                          data-ocid="contact-subject"
                          className={`mt-1.5 ${errors.subject ? "border-destructive focus-visible:ring-destructive/30" : ""}`}
                          aria-invalid={!!errors.subject}
                          {...register("subject", {
                            required: "Subject is required",
                          })}
                        />
                        {errors.subject && (
                          <FieldError message={errors.subject.message!} />
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message">
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your enquiry…"
                          rows={6}
                          data-ocid="contact-message"
                          className={`mt-1.5 ${errors.message ? "border-destructive focus-visible:ring-destructive/30" : ""}`}
                          aria-invalid={!!errors.message}
                          {...register("message", {
                            required: "Message is required",
                            minLength: {
                              value: 20,
                              message: "Please provide at least 20 characters",
                            },
                          })}
                        />
                        {errors.message && (
                          <FieldError message={errors.message.message!} />
                        )}
                      </div>

                      {/* Server error */}
                      {isError && (
                        <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/5 border border-destructive/20 rounded px-4 py-3">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>
                            Something went wrong. Please try again or contact us
                            directly at&nbsp;info@royaltreasurehgs.com.
                          </span>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full"
                        data-ocid="contact-submit"
                      >
                        {isPending ? "Sending…" : "Send Message"}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer band */}
      <section className="bg-muted/30 border-t border-border py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            Royal Treasure Holding'S · Mumbai, Maharashtra, India
          </p>
        </div>
      </section>
    </Layout>
  );
}
