# Human ArtArk

**In the age of AI-generated images, a platform where real artists grow in public — and where an AI agent helps them get into galleries.**

🌐 [naaaaaaqi.github.io/human-artark](https://naaaaaaqi.github.io/human-artark/) &nbsp;·&nbsp; 🤖 [Agent repo](https://github.com/NaaaaaaQi/my-gallery-agent) &nbsp;·&nbsp; 🎨 [Artist demo](https://naaaaaaqi.github.io/human-artark/artists/sofia-reyes/)

---

## Why This Exists

Any model can generate a beautiful image. That sentence is no longer remarkable.

What is remarkable is a real person — spending years in a studio, getting rejected, trying again — and finally getting into the gallery that changes their career. That journey is irreplaceable. And right now, it mostly happens in the dark.

The art world runs on cold emails and personal connections. Artists don't know which galleries are accepting submissions this month. Galleries drown in generic inquiries. The information to fix this exists — it just hasn't been structured, maintained, and put in the hands of the people who need it.

**Human ArtArk is the infrastructure that closes that gap.**

---

## What's Built

A full platform — live, working, shippable today.

| | |
|---|---|
| **Homepage** | [naaaaaaqi.github.io/human-artark](https://naaaaaaqi.github.io/human-artark/) |
| **70+ gallery database** | Live open call status, updated by agent weekly |
| **77 gallery detail pages** | Every gallery has its own page with apply CTA |
| **7 artist profiles** | Portrait, works, CV, milestones, follower count, agent panel |
| **Apply system** | One click — artist profile auto-attached to every application |
| **Works for sale** | Direct purchase, 0% commission |
| **Artist agent** | Claude matches each artist to open calls, drafts application letters |

---

## The Artist Agent

Every artist on the platform has a personal AI agent that runs every Monday.

```
Artist profile (medium, location, exhibition history, goals)
    +
Live gallery database (70+ galleries, weekly scrape + newsletter parse)
    ↓
Claude ranks open calls by fit for this specific artist
    ↓
Drafts personalized application letters for top matches
    ↓
Pushes report to artist via Telegram
```

**Live output — Sofia Reyes's agent, June 11 2026:**

```
🎨 Human ArtArk — Weekly Opportunities
Sofia Reyes · Painting, Drawing · San Francisco, CA

5 galleries match your work:

1. Mercury 20 Gallery  (fit: 9/10)
   Artist-run cooperative welcoming Latinx figurative narrative work.
   📋 Open membership + 'Beyond Boundaries' juried show

2. Gray Loft Gallery  (fit: 9/10)
   Award-winning Oakland gallery, emerging-artist focus, warehouse space.
   📋 Annual color-theme juried call for entry

3. Faultline Artspace  (fit: 8/10)
   Women+ gallery specializing in painting and experimental practice.
   📋 Artist submissions open

[Draft application letters attached. Reply SEND to submit.]
```

The agent knows Sofia's exhibition history, which galleries she's already applied to, and her specific goals. It never surfaces a gallery that's a bad fit. It never suggests one she's already tried.

**Run it:**
```bash
git clone https://github.com/NaaaaaaQi/my-gallery-agent
ANTHROPIC_API_KEY=sk-ant-... python3 scripts/artist_agent.py --artist sofia-reyes
```

---

## The Core Insight

The relationship between a user and an artist on this platform is not buyer/seller.

It's **witness / witnessed.**

```
Follower   →  watches the artist's journey unfold in real time
Supporter  →  buys a work early, acquires a piece of the story
Witness    →  "I followed them before anyone knew their name"
```

When an early collector buys a work before an artist's first gallery show, they don't just own the piece. They own proof of their own judgment — documented, timestamped, public. That's a new kind of cultural capital.

For the artist: every milestone is visible. Gallery acceptance. First residency. First sale. The community is the witness. The platform is the stage. **You don't grow alone.**

This is what no existing platform offers. Artsy serves buyers. Saatchi serves sellers. Submittable is just forms. None of them make the *artist's journey* the product.

---

## Why Now

Three things are colliding:

**1. AI has made "beautiful" meaningless.** When infinite images flood every feed, human authorship becomes the scarce signal. "Made by a real person, over years" is becoming a premium designation — the way "organic" became a food label when industrial farming scaled.

**2. The art world's infrastructure is broken for emerging artists.** Galleries still run on personal connections and cold emails. The open call information exists — it just hasn't been structured, maintained, and distributed at scale.

**3. Audiences want to witness, not just consume.** Patreon, Substack, every successful creator platform points in the same direction: people want proximity to the *making*, not just the made. Art is no exception.

Human ArtArk sits at the intersection of all three.

---

## Stack

| | |
|---|---|
| **Agent runtime** | [OpenClaw](https://github.com/openclaw/openclaw) — Telegram + Claude + session memory |
| **AI model** | Claude Sonnet (matching) + Claude Haiku (letter drafting, gallery scraping) |
| **Gallery data** | 70+ galleries scraped weekly + newsletter pipeline (IMAP + Claude Haiku) |
| **Frontend** | Vanilla HTML/CSS — no framework, deploys to GitHub Pages instantly |
| **Hosting** | GitHub Pages — free, zero infra |

The gallery database is the foundation. It's built by two agents running in parallel: one scrapes gallery websites for open call signals, one reads a dedicated email inbox full of gallery newsletters. Both write to `GALLERY_DATABASE.md`. The artist agent reads from it.

---

## Vision

**Phase 1 — Bay Area** *(now)*
70+ galleries, live open call data, artist profiles, agent-powered matching, direct sales.

**Phase 2 — Global**
Same pipeline, every city. Human ArtArk becomes the most complete structured record of gallery open calls on earth.

**Phase 3 — Residencies**
Same infrastructure applied to artist residencies worldwide. Yaddo, MacDowell, Headlands, 500+ others. One profile, apply everywhere.

**Phase 4 — Provenance**
Every sale is timestamped. "You were the 3rd person to collect this artist's work" becomes a verifiable, valuable fact. Early collectors build a documented record of taste and belief.

**Phase 5 — The Signal**
"Human ArtArk verified" means: real artist, real work, real journey — tracked from day one. Galleries, curators, and auction houses trust it as a provenance signal.

The moat is the data. Every newsletter parsed, every open call detected, every application sent adds signal the agent gets smarter from. No competitor can replicate three years of accumulated gallery intelligence overnight.

---

## Built By

**Na Qi** ([@NaaaaaaQi](https://github.com/NaaaaaaQi)) &nbsp;·&nbsp; Solo &nbsp;·&nbsp; San Francisco

- Platform: [github.com/NaaaaaaQi/human-artark](https://github.com/NaaaaaaQi/human-artark)
- Agent: [github.com/NaaaaaaQi/my-gallery-agent](https://github.com/NaaaaaaQi/my-gallery-agent)

---

*Human ArtArk · Est. 2026 · San Francisco*
