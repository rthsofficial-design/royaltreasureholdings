import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Layout } from "./index-DFKZK4DM.js";
import { B as Button } from "./index-CH509zmm.js";
import { I as Input } from "./input-CgEtxYTz.js";
import { u as useForm, M as MapPin, A as AnimatePresence, C as CircleCheck, L as Label, T as Textarea } from "./index.esm-CRzw20HT.js";
import { e as useSubmitContact, m as motion } from "./useBackend-Bav98165.js";
import "./index-43jMSmQZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Office",
    lines: ["Mumbai, Maharashtra, India"]
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@royaltreasurehgs.com"]
  }
];
function FieldError({ message }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "p",
    {
      role: "alert",
      className: "flex items-center gap-1.5 text-destructive text-xs mt-1",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3.5 h-3.5 shrink-0" }),
        message
      ]
    }
  );
}
function Contact() {
  const {
    mutateAsync: submitContact,
    isPending,
    isError,
    reset: resetMutation
  } = useSubmitContact();
  const [submitted, setSubmitted] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors }
  } = useForm({ mode: "onBlur" });
  async function onSubmit(data) {
    await submitContact(data);
    setSubmitted(true);
    resetForm();
  }
  function handleSendAnother() {
    setSubmitted(false);
    resetMutation();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-16 lg:py-24",
        "data-ocid": "contact-hero",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-widest uppercase text-accent font-semibold mb-3", children: "Contact" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl lg:text-6xl text-foreground mb-4", children: "Get in Touch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl leading-relaxed text-lg", children: "We welcome enquiries from entrepreneurs, partners, and professionals interested in connecting with Royal Treasure Holding'S." })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-16 lg:py-24",
        "data-ocid": "contact-body",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.aside,
            {
              initial: { opacity: 0, x: -24 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "lg:col-span-2 space-y-10",
              "data-ocid": "contact-details",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-2", children: "Business Enquiries" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-px bg-accent mb-6" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Royal Treasure Holding'S is headquartered in Mumbai, India. Reach out using the form or email address below and our team will respond promptly." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-7", children: CONTACT_DETAILS.map(({ icon: Icon, label, lines }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.li,
                  {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.4, delay: 0.15 + i * 0.08 },
                    className: "flex gap-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 p-2 rounded bg-muted/40 border border-border h-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-accent" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1", children: label }),
                        lines.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-foreground text-sm leading-relaxed",
                            children: line
                          },
                          line
                        ))
                      ] })
                    ]
                  },
                  label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "All enquiries are treated with strict confidentiality. We aim to respond to all messages within two business days." }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 24 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.1 },
              className: "lg:col-span-3",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-8 lg:p-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-8", children: "Send a Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.97 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.97 },
                    transition: { duration: 0.3 },
                    "data-ocid": "contact-success",
                    className: "flex flex-col items-start gap-5 py-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-full bg-accent/10 border border-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-7 h-7 text-accent" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-lg mb-1", children: "Message received. Thank you." }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed max-w-sm", children: "A member of our team will review your enquiry and respond within two business days. We appreciate your interest in Royal Treasure Holding'S." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          onClick: handleSendAnother,
                          "data-ocid": "contact-send-another",
                          children: "Send another message"
                        }
                      )
                    ]
                  },
                  "success"
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.form,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.2 },
                    onSubmit: handleSubmit(onSubmit),
                    noValidate: true,
                    className: "space-y-6",
                    "data-ocid": "contact-form",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "name", children: [
                            "Full Name",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              id: "name",
                              placeholder: "Jane Smith",
                              "data-ocid": "contact-name",
                              className: `mt-1.5 ${errors.name ? "border-destructive focus-visible:ring-destructive/30" : ""}`,
                              "aria-invalid": !!errors.name,
                              ...register("name", {
                                required: "Full name is required"
                              })
                            }
                          ),
                          errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { message: errors.name.message })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "email", children: [
                            "Email Address",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              id: "email",
                              type: "email",
                              placeholder: "jane@firm.com",
                              "data-ocid": "contact-email",
                              className: `mt-1.5 ${errors.email ? "border-destructive focus-visible:ring-destructive/30" : ""}`,
                              "aria-invalid": !!errors.email,
                              ...register("email", {
                                required: "Email address is required",
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: "Please enter a valid email address"
                                }
                              })
                            }
                          ),
                          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { message: errors.email.message })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "subject", children: [
                          "Subject ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "subject",
                            placeholder: "Business Enquiry",
                            "data-ocid": "contact-subject",
                            className: `mt-1.5 ${errors.subject ? "border-destructive focus-visible:ring-destructive/30" : ""}`,
                            "aria-invalid": !!errors.subject,
                            ...register("subject", {
                              required: "Subject is required"
                            })
                          }
                        ),
                        errors.subject && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { message: errors.subject.message })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "message", children: [
                          "Message ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Textarea,
                          {
                            id: "message",
                            placeholder: "Tell us about your enquiry…",
                            rows: 6,
                            "data-ocid": "contact-message",
                            className: `mt-1.5 ${errors.message ? "border-destructive focus-visible:ring-destructive/30" : ""}`,
                            "aria-invalid": !!errors.message,
                            ...register("message", {
                              required: "Message is required",
                              minLength: {
                                value: 20,
                                message: "Please provide at least 20 characters"
                              }
                            })
                          }
                        ),
                        errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(FieldError, { message: errors.message.message })
                      ] }),
                      isError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-destructive text-sm bg-destructive/5 border border-destructive/20 rounded px-4 py-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Something went wrong. Please try again or contact us directly at info@royaltreasurehgs.com." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "submit",
                          disabled: isPending,
                          className: "w-full",
                          "data-ocid": "contact-submit",
                          children: isPending ? "Sending…" : "Send Message"
                        }
                      )
                    ]
                  },
                  "form"
                ) })
              ] })
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-t border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Royal Treasure Holding'S · Mumbai, Maharashtra, India" }) }) })
  ] });
}
export {
  Contact
};
