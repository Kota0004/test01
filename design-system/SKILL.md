---
name: claude-design
description: Use this skill to generate well-branded interfaces and assets for Claude Design (静けさを設計するエディトリアル志向のデザインシステム — ivory + terracotta + serif headlines), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key rules (non-negotiable):
- Backgrounds #FAF9F5 / #F0EEE6, text #141413 / #5E5D59 — never pure #FFFFFF or #000000
- Terracotta #D97757 (hover #C15F3C) in 1–2 places per screen only
- Serif headlines (Source Serif 4 + Shippori Mincho, weight 500–600), body Inter + Noto Sans JP 16px / lh 1.8
- Dividers are 1px rules (#E8E6DC), not shadows; pill buttons; radii 8/12/16
- Motion: 700ms reveal (opacity + translateY 24px, cubic-bezier(0.16,1,0.3,1)) and 150ms hover — nothing else
- No purple-blue gradients, glassmorphism, 3D illustrations, emoji headings
- Icons are unicode glyphs (✻ → × ›); the wordmark is set in type — there is no logo image
