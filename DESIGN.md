# Design Brief

## Tone & Differentiation
Premium corporate showcase leveraging restrained color, editorial spacing, and strong typographic hierarchy. Dark primary establishes institutional trust; warm gold accents signal premium positioning without visual noise.

## Palette (OKLCH)
| Token | Light | Dark |
|-------|-------|------|
| Primary (Charcoal) | 0.22 0.02 280 | 0.88 0.02 60 |
| Accent (Gold) | 0.65 0.19 60 | 0.72 0.18 60 |
| Background | 0.98 0 0 | 0.12 0.01 280 |
| Foreground | 0.18 0 0 | 0.93 0 0 |
| Muted | 0.94 0 0 | 0.25 0.01 280 |
| Border | 0.92 0 0 | 0.22 0.01 280 |

## Typography
**Display**: Instrument Serif (italic)—gravitas and editorial elegance for headings, hero copy.
**Body**: DM Sans—clean, accessible, professional body text and UI.
**Hierarchy**: Display 3xl/4xl for page titles, 2xl for section heads, lg for subsections, base for body.

## Elevation & Depth
- **Card**: Subtle shadow (shadow-md), 1px border-border for definition
- **Muted sections**: bg-muted/20 for secondary content zones
- **Header**: border-b border-border with distinct background
- **Footer**: border-t border-border with bg-muted/20

## Structural Zones
| Zone | Treatment |
|------|-----------|
| Header/Nav | bg-card border-b, logo + nav links, responsive mobile menu |
| Hero | bg-primary text-primary-foreground, large display type, CTA button |
| Portfolio Grid | bg-background, cards with surface-elevated styling, 2-3 columns |
| Brand Detail | bg-card, logo + description + metadata |
| Board/About | bg-card sections, image+text pairing, border-subtle dividers |
| Contact/Jobs | Form sections with input border-border, submit btn bg-accent |
| Footer | border-t bg-muted/20, firm name + links, copyright |

## Spacing & Rhythm
- **Padding**: sm 0.5rem, md 1rem, lg 1.5rem, xl 2rem
- **Gap**: Grid 1.5rem (scaled to 1rem mobile)
- **Negative space**: Large margins (2-3rem) between major sections
- **Editorial rhythm**: 1.6x line-height for body, generous cap-height breathing

## Component Patterns
- **Buttons**: Primary bg-primary text-primary-foreground; secondary border-border outline; accent bg-accent text-accent-foreground
- **Cards**: surface-elevated class (card bg + shadow + border)
- **Forms**: input border-input bg-input, focus ring-primary
- **Nav**: Horizontal on desktop, hamburger on mobile (sidebar-based)

## Motion & Interaction
- **Smooth transitions**: transition-smooth (all 0.3s cubic-bezier) for hover states
- **No decoration**: No entrance animations, decorative gradients, or bouncing
- **Focus states**: ring-2 ring-primary on interactive elements
- **Hover**: Subtle shadow lift (md → lg), text color shift to accent on links

## Constraints
- No full-page gradients or glassmorphism
- Accent color reserved for CTAs, section highlights, active states only
- Max 3 font weights per family (regular, 500, 700)
- Border radius: sm (4px) for small elements, md (6px) for cards, no full rounded
- Dark mode: Preserve institutional tone—no bright accents, only warm-toned highlights

## Signature Detail
Serif display type used sparingly in headings + hero copy creates distinctive editorial personality within conservative corporate aesthetic. Gold accent appears only on interactive elements—buttons, hover states, active nav—making every interaction feel intentional and premium.
