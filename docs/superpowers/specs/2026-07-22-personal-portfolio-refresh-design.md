# Personal Portfolio Refresh — Design Specification

## Goal

Transform the existing data-driven Next.js CV into a focused professional portfolio for Ebenezer Jojo Mensah. The site must present current experience, establish credibility through a flagship private product, and make it simple to keep future content current.

## Positioning

The portfolio positions Jojo as a software engineer who builds dependable, AI-enabled digital products. It balances product thinking, full-stack capability, and a clear professional history without making unsupported claims or exposing private work.

## Content Strategy

### Primary case study: RefFlow

RefFlow is the lead project. It is a KNUST-first platform for managing recommendation requests between students and invited lecturers.

The case study explains:

1. The problem: recommendation requests are commonly managed through fragmented conversations, emails, and follow-ups.
2. The product: students submit requests and documents; lecturers can review, respond, draft, complete, and track request work; administrators manage the system.
3. Engineering scope: role-based workflows, document handling, transactional notifications, payment flows, and AI-assisted drafting.
4. The request lifecycle: student submission, lecturer management, automated reminders, completion, and student confirmation.
5. Technology: React, TanStack Start, Cloudflare Workers, Better Auth, Neon/PostgreSQL with Drizzle, Cloudflare R2, Resend, Moolre, and Gemini.

The project must not expose source code, credentials, internal URLs, personal data, private administration screens, or unapproved commercial claims. Its card and case-study CTA use the label `Private product — walkthrough available on request` unless a public URL is explicitly approved later.

### Supporting projects

The portfolio has room for up to three supporting projects. They are added only after Jojo approves their project details, screenshots, and external links. GitHub remains a profile link; no project requires a public repository.

### Experience

The timeline includes:

- AmaliTech — Software Engineer, May 2023 to September 2025.
- AmaliTech — Graduate Trainee, April 2022 to April 2023.
- Lands Commission Ghana — Graduate Geological Engineer, September 2020 to August 2021.
- AYA Engineering Ltd — Engineering Intern, June 2019 to August 2019.

Each entry has a short, outcome-oriented description. The existing generic profile summary and outdated social URL are removed.

## Information Architecture

1. **Hero** — name, specific professional positioning, Takoradi/Ghana location, GitHub, LinkedIn, email, and contact CTA.
2. **Selected work** — RefFlow first, then approved supporting work.
3. **Experience** — chronological professional timeline with role progression shown clearly.
4. **About** — concise engineering background and transition from geological engineering to software.
5. **Capabilities** — grouped skills: Product Engineering, Backend and Infrastructure, AI, and Tools.
6. **Footer** — contact details and external professional links.

## Visual Direction

Keep the existing site lightweight but replace the printable-CV impression with a restrained editorial portfolio. Use stronger typographic hierarchy, intentional whitespace, and a small number of high-quality work visuals. Avoid decorative dashboards, excessive badges, and generic tech imagery.

The RefFlow screenshots follow its Academic Trust System: off-white surfaces, deep slate/black structure, slate metadata, crisp outlines, and emerald only for success/completion. Use sanitized product-facing screens at responsive sizes, each with descriptive alt text.

## Technical Shape

- Retain Next.js 14, React, TypeScript, Tailwind, and the existing component structure.
- Replace the current resume-only data model with typed content for biography, roles, skills, projects, case-study details, links, and screenshots.
- Keep editable content centralized in a single data module.
- Build reusable sections and a reusable project/case-study card rather than putting content directly in the page.
- Update metadata, social preview, favicon, and external-link labeling.

## Privacy and Safety

Before an image is added, confirm it contains no personal information, user documents, email addresses, payment references, API keys, internal domains, or non-public analytics. Use mock or anonymized data when a UI state would otherwise reveal real information.

## Validation

- Check the updated content against the approved experience details and RefFlow description.
- Test desktop and mobile layout.
- Check keyboard navigation, image alt text, heading order, contrast, and external link affordances.
- Run lint and production build.
- Verify the sharing preview and all contact/profile links.

## Out of Scope

- Publishing private source code.
- A public RefFlow demo environment.
- A blog, CMS, analytics dashboard, or contact-form backend in this refresh.
- Adding any unverified project, role, metric, client, or employer claim.
