---
version: alpha
name: Emotion Agency
description: A light, editorial design system that pairs refined serif headlines with technical mono text and vivid violet accents.
colors:
  primary: "#2D257D"
  secondary: "#581C87"
  tertiary: "#9CA3AF"
  neutral: "#F5EFFF"
  surface: "#FFFFFF"
  on-surface: "#2A1647"
  error: "#B42318"
  border: "#E5E7EB"
typography:
  headline-display:
    fontFamily: "IBM Plex Mono"
    fontSize: "128px"
    fontWeight: 700
    lineHeight: 154px
    letterSpacing: "0px"
  headline-lg:
    fontFamily: "Emotion Serif"
    fontSize: "76px"
    fontWeight: 300
    lineHeight: 102.4px
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Emotion Serif"
    fontSize: "45px"
    fontWeight: 300
    lineHeight: 54px
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "Emotion Serif"
    fontSize: "27px"
    fontWeight: 300
    lineHeight: 32px
    letterSpacing: "0px"
  body-lg:
    fontFamily: "IBM Plex Mono"
    fontSize: "18.6667px"
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: "0px"
  body-md:
    fontFamily: "IBM Plex Mono"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 24px
    letterSpacing: "0px"
  body-sm:
    fontFamily: "IBM Plex Mono"
    fontSize: "14px"
    fontWeight: 300
    lineHeight: 20px
    letterSpacing: "0px"
  label-lg:
    fontFamily: "PP Neue Montreal"
    fontSize: "18.6667px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0px"
  label-md:
    fontFamily: "PP Neue Montreal"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0px"
  label-sm:
    fontFamily: "IBM Plex Mono"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0px"
  caption-md:
    fontFamily: "IBM Plex Mono"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 6px
  sm: 16px
  md: 42px
  lg: 64px
  xl: 134px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 21.3333px 42.6667px
    size: 160px
    height: 64px
  button-secondary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 21.3333px 42.6667px
    size: 160px
    height: 64px
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: 0px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 16px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 16px
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px
---

## Overview
Emotion Agency feels airy, editorial, and quietly premium. The screen uses a sparse center-weighted composition with lots of negative space, making the experience feel confident rather than busy. The tone balances a poetic serif voice with a precise mono voice, so the interface reads as creative but still disciplined.

## Colors
- **Primary (#2D257D):** A deep indigo used for the strongest interactive elements, brand marks, and focus moments. It anchors the interface with a calm, authoritative violet-blue.
- **Secondary (#581C87):** A richer plum-violet used as the supporting accent and a subtle text tint in emphasized states. It adds warmth to the otherwise cool palette.
- **Tertiary (#9CA3AF):** A muted neutral gray used sparingly for secondary surfaces or de-emphasized button fills. It should never compete with the primary accent.
- **Neutral (#F5EFFF):** A pale lavender background that defines the entire environment. It gives the page its soft, luminous atmosphere.
- **Surface (#FFFFFF):** Reserved for true white overlays, popovers, or content panels that need separation from the lavender field. Use it sparingly to preserve the light, washed-out feel.
- **On-surface (#2A1647):** The main text color, a dark eggplant that keeps contrast high without becoming stark black. It is the default for body copy, labels, and utility text.
- **Border (#E5E7EB):** A soft cool border tone for subtle containment on cards and inputs. It supports structure without introducing heaviness.
- **Error (#B42318):** A conventional alert red for validation or destructive states. Keep it isolated so the core palette stays elegant.

## Typography
The type system is intentionally split between an expressive serif and a technical mono voice. Headings use **Emotion Serif** at light weights for a refined editorial presence, while supporting text and long-form copy use **IBM Plex Mono** for a crisp, contemporary cadence. Buttons and key action labels can use **PP Neue Montreal** to feel modern and slightly more human than the mono text.

Use the display mono sparingly: `headline-display` is dramatic and oversized, so it should be reserved for hero moments. `headline-lg`, `headline-md`, and `headline-sm` carry the poetic serif hierarchy and should remain light in weight. `body-md` is the primary reading size, with `body-lg` used for larger action copy and `body-sm` for supporting metadata. Uppercase treatment is appropriate for short lead-ins and utility phrases, especially when paired with mono or label styles.

## Layout
The layout is centered and highly restrained, with content stacked vertically in a single column. Large spacing intervals create a floating, poster-like composition rather than a dense marketing page. The rhythm relies on a small set of predictable gaps: `xs` for micro spacing, `sm` for compact separation, `md` for major vertical rhythm, and `xl` for generous page breathing room.

Use generous outer padding and keep interactive groups aligned to the center axis. Sections should feel isolated and intentional, with enough room that each phrase or control reads like a deliberate statement. Cards and panels, when used, should remain compact and not introduce a tight grid-heavy structure.

## Elevation & Depth
The system is intentionally flat. There are no meaningful shadows, so hierarchy is created through contrast, scale, spacing, and typography rather than depth effects. The one exception is subtle border definition on cards or controls, which can help preserve structure without breaking the minimal aesthetic.

If a component needs to stand out, prefer color shift, outline, or opacity changes over shadow. This keeps the interface feeling soft, modern, and almost print-like.

## Shapes
The shape language is rounded and pill-forward. Primary actions use `rounded.full`, which makes buttons feel friendly and tactile. Smaller containers and cards use modest radii such as `rounded.md`, giving the system a calm, polished softness without becoming bubbly.

Avoid sharp corners unless the component is intentionally minimal, like a text link or rule-based utility element. The overall effect should be smooth and approachable.

## Components
Buttons are the most expressive component in the system. `button-primary` should be the default call to action: indigo fill, rounded pill shape, generous horizontal padding, and a medium-large label. Keep it visually lightweight despite its prominence by avoiding shadows and heavy borders. `button-secondary` can reuse the same pill geometry but should feel quieter through its softer gray fill. `button-tertiary` is a text-only action for lower-emphasis choices and should remain unboxed.

Buttons should maintain a clear hierarchy: primary for commitment, secondary for alternate entry, tertiary for cancellation or subtle navigation. The height should stay around 64px for prominent actions, with wide horizontal padding to preserve the floating pill proportions visible in the source.

Cards should remain understated: `card` uses the neutral lavender surface, a fine border, and `rounded.md`. They should support content, not compete with it. Inputs should follow the same soft geometry as buttons where appropriate, but with a more neutral surface and clear text contrast. Chips, tags, and small pills should echo the same rounded vocabulary with compact padding and `label-sm` or similar small-label type.

Links should feel textual and direct, not button-like. Use the on-surface color and keep them free of decorative chrome unless they are part of a navigational CTA. Tooltips, checkboxes, radio buttons, and other low-level controls should remain minimal, with emphasis placed on legibility and spacing rather than ornament.

## Do's and Don'ts
- Do keep the composition spacious and centered so the page feels like a curated statement.
- Do use the indigo primary for the strongest CTA and brand-defining accents.
- Do pair serif headlines with mono body copy to preserve the signature editorial/technical contrast.
- Do use pill radii for interactive elements that need warmth and prominence.
- Don't introduce heavy shadows or layered depth; the system is meant to feel flat and airy.
- Don't crowd the layout with multiple competing columns or dense UI blocks.
- Don't overuse the tertiary gray or error red; the palette should stay restrained and poetic.
- Don't mix in unrelated typefaces or loud decorative styles that break the mono/serif balance.