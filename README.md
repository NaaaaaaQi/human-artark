# Human ArtArk

**In the age of AI-generated images, a platform that uses agents to help real human artists get seen, apply to galleries, find residencies, and sell their work — while the world watches them grow.**

🌐 **Live:** [naaaaaaqi.github.io/human-artark](https://naaaaaaqi.github.io/human-artark/)

---

## The Problem

Any model can generate a painting in 3 seconds. In 2026, "beautiful image" is no longer a signal of anything.

But there are still tens of thousands of real artists — people spending years in studios, making things with their hands — who can't get gallery shows not because their work isn't good enough, but because **the art world has no infrastructure for discovery at scale.** Galleries receive hundreds of cold emails. Artists don't know which ones are accepting submissions, what they're looking for, or when the deadline is.

The information exists. It's just scattered across 70+ websites, newsletters, and Instagram DMs. No one has aggregated it into a usable form for artists.

**Human ArtArk is the agent that does that.**

---

## What We Built

A full-stack platform — static frontend + autonomous agent pipeline — that:

1. **Monitors galleries continuously** — scrapes websites, subscribes to newsletters, parses open call announcements
2. **Maintains a live gallery database** — structured data on 70+ Bay Area galleries: open call status, deadlines, submission preferences, contact info
3. **Generates artist-facing pages** — every gallery gets a detail page, every artist gets a profile; the agent regenerates the site when data changes
4. **Lets artists apply with one click** — profile attached automatically, gallery pre-filled from context
5. **Surfaces artists to collectors** — public profile + works for sale, 0% commission, direct purchase

### The Agent Pipeline

```
Gallery websites + Newsletters
        ↓
  [Scraper Agent]  ←── OpenClaw runtime
  parse_newsletters.py / update_gallery_status.py
        ↓
  GALLERY_DATABASE.md  (structured, version-controlled)
        ↓
  [Site Generator Agent]
  generate_artark_site.py
        ↓
  77 gallery pages + artist profiles
  deployed to GitHub Pages on every update
```

The agent reads newsletters, extracts open call signals ("now accepting submissions", "deadline: July 1"), updates gallery status, and triggers a site rebuild. Artists see live, accurate data without anyone updating a spreadsheet by hand.

---

## Why This Is an Agent Problem

Gallery open call status changes weekly. A static database rots. You need an agent that:

- **Reads** — subscribes to ~70 gallery newsletters, parses unstructured prose for structured signals
- **Judges** — determines whether a gallery is currently accepting submissions
- **Writes** — updates the database and regenerates 77 HTML pages
- **Acts** — sends application emails on behalf of artists with their profile attached

This is not a CRUD app. Every piece of data in the system was produced by an agent reading the real world.

---

## The Unique Insight

The irony is precise: **we use AI agents to help human artists survive in an AI-dominated world.**

The pitch to collectors is equally sharp: when any model can generate a beautiful image, the thing that becomes scarce and valuable is *provenance* — knowing that a real person made this, over years, in front of witnesses. Human ArtArk is where you find them before the rest of the world does.

---

## What's Live Right Now

| Page | URL |
|------|-----|
| Homepage | [/human-artark/](https://naaaaaaqi.github.io/human-artark/) |
| Gallery list (70+) | [/human-artark/galleries/](https://naaaaaaqi.github.io/human-artark/galleries/) |
| Gallery detail (×77) | [/human-artark/galleries/minnesota-street-project/](https://naaaaaaqi.github.io/human-artark/galleries/minnesota-street-project/) |
| Artist list | [/human-artark/artists/](https://naaaaaaqi.github.io/human-artark/artists/) |
| Artist detail (×7) | [/human-artark/artists/amara-diallo/](https://naaaaaaqi.github.io/human-artark/artists/amara-diallo/) |
| Apply to gallery | [/human-artark/apply/](https://naaaaaaqi.github.io/human-artark/apply/) |

**Agent scripts (in `/openclaw/scripts/`):**
- `parse_newsletters.py` — reads gallery newsletters, extracts open call signals
- `update_gallery_status.py` — updates GALLERY_DATABASE.md from scraped data
- `generate_artark_site.py` — generates all 77 gallery pages + artist pages from the database
- `generate_html.py` — generates the openclaw gallery agent UI

---

## Tech Stack

- **Runtime:** OpenClaw (gallery agent harness)
- **Frontend:** Vanilla HTML/CSS — no framework, no build step, deploys instantly to GitHub Pages
- **Agent scripts:** Python — BeautifulSoup scraping, regex newsletter parsing, markdown database, HTML generation
- **Hosting:** GitHub Pages (free, static, zero infra)
- **Images:** Unsplash direct IDs + Picsum (free, no API key)
- **Data:** `GALLERY_DATABASE.md` — version-controlled, human-readable, agent-writable

---

## Long-Term Vision

**Phase 1 (now):** Bay Area galleries. Agent monitors newsletters and open calls. Artists apply.

**Phase 2:** Global expansion. The same agent pipeline scales to London, Berlin, New York. The database becomes the most comprehensive structured record of gallery open calls on earth.

**Phase 3:** Artist CRM. Every application tracked. Response rates by gallery. The agent learns which galleries respond to which types of work and surfaces better matches over time.

**Phase 4:** Residency network. Same pipeline applied to artist residencies worldwide — Yaddo, MacDowell, Headlands, 500+ others. One profile, apply everywhere.

**Phase 5:** Collector marketplace. Works listed on artist profiles. Smart contracts for provenance tracking. "You were the 3rd person to collect Sofia Reyes" becomes a verifiable, valuable fact.

The moat is the data. Every newsletter subscription, every open call parsed, every application sent adds signal. The agent gets better at matching artists to opportunities. No competitor can replicate 3 years of accumulated gallery intelligence overnight.

---

## The Bigger Bet

In 10 years, "made by a human" will be a premium designation — the way "organic" became a premium food label when industrial farming scaled. Human ArtArk is building the infrastructure to verify, surface, and monetize that designation before the market fully prices it in.

We're not anti-AI. We're pro-human. And we're using every tool available — including agents — to make sure human artists don't get left behind.

---

## Team

Built by **Na Qi** ([@NaaaaaaQi](https://github.com/NaaaaaaQi)) with Claude Code.

- Gallery database: 70+ Bay Area galleries, fully structured
- Agent pipeline: live newsletter monitoring + status updates
- Platform: homepage, 77 gallery pages, artist profiles, apply system

**Repos:**
- Platform: [github.com/NaaaaaaQi/human-artark](https://github.com/NaaaaaaQi/human-artark)
- Gallery agent: [github.com/NaaaaaaQi/my-gallery-agent](https://github.com/NaaaaaaQi/my-gallery-agent)

---

*Human ArtArk · Est. 2026 · San Francisco*
