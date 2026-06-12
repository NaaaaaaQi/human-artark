# Human ArtArk

**In the age of AI-generated images, a platform where real artists grow in public — and where an AI agent helps them get into galleries.**

🌐 [naaaaaaqi.github.io/human-artark](https://naaaaaaqi.github.io/human-artark/) &nbsp;·&nbsp; 🎨 [Artist demo](https://naaaaaaqi.github.io/human-artark/artists/sofia-reyes/) &nbsp;·&nbsp; 🏛 [Gallery list](https://naaaaaaqi.github.io/human-artark/galleries/) &nbsp;·&nbsp; 🤖 [Agent repo](https://github.com/NaaaaaaQi/my-gallery-agent)

---

## Why This Exists

Any model can generate a beautiful image. In 2026, that sentence is no longer remarkable.

What is remarkable is a real person — spending years in a studio, getting rejected, trying again — and finally getting into the gallery that changes their career. That journey is irreplaceable. The problem isn't talent. It's information asymmetry: artists don't know which galleries are accepting submissions this month; galleries drown in generic cold emails. The information to fix this exists. It just hasn't been structured, maintained, and put in the hands of the people who need it.

---

## What's Built

Everything below is live and working today.

| | |
|---|---|
| **Homepage** | [naaaaaaqi.github.io/human-artark](https://naaaaaaqi.github.io/human-artark/) |
| **Gallery database** | 70+ Bay Area galleries, live open call status |
| **Gallery detail pages** | 77 individual pages, each with apply CTA |
| **Artist profiles** | Portrait, works, CV, milestones, follower count, agent panel |
| **Apply system** | One click — artist profile auto-attached to every application |
| **Works for sale** | Direct purchase, 0% commission |
| **Artist agent** | Weekly open call matching + personalized letter drafting via Telegram |

---

## The Artist Agent

Every artist on the platform has a personal AI agent. It runs every Monday.

```
Artist profile (medium, location, exhibition history, goals)
    +
Live gallery database (70+ galleries, scraped weekly + newsletter parsed)
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
Sofia Reyes · Painting, Drawing · San Francisco

5 galleries match your work this week:

1. Mercury 20 Gallery  (fit: 9/10)
   Artist-run cooperative welcoming Latinx figurative narrative work.
   📋 Open membership + 'Beyond Boundaries' juried show

2. Gray Loft Gallery  (fit: 9/10)
   Award-winning Oakland gallery, emerging-artist focus.
   📋 Annual color-theme juried call — deadline June 30

3. Faultline Artspace  (fit: 8/10)
   Women+ gallery specializing in painting and experimental practice.
   📋 Artist submissions open

[Draft letters ready. Reply SEND to submit.]
```

The agent knows Sofia's exhibition history, which galleries she's already applied to, and her goals. It never surfaces a gallery that doesn't fit. It writes a different letter for each one.

```bash
git clone https://github.com/NaaaaaaQi/my-gallery-agent
ANTHROPIC_API_KEY=sk-ant-... python3 scripts/artist_agent.py --artist sofia-reyes
```

---

## The Core Insight: Witness

Every platform in this space has missed something.

The relationship between a user and an artist on Human ArtArk is not buyer/seller. It's **witness / witnessed.**

```
Follower   →  watches the artist's journey unfold in real time
Supporter  →  buys a work early, acquires a piece of the story
Witness    →  "I was following them before anyone knew their name"
```

When an early collector buys a work before an artist's first gallery show, they don't just own the piece. They own proof of their own judgment — documented, timestamped, publicly verifiable. That's a new kind of cultural capital. The platform makes that story visible from the very beginning: follower counts, milestone timeline, first sale, first acceptance.

**Why no existing platform has done this:**

| Platform | What it is | Why it can't do witness |
|----------|------------|------------------------|
| **Artsy** | Gallery/auction marketplace | Artists are inventory. Business model serves galleries, not artists. |
| **Saatchi Art** | Artist-to-collector sales | Transactional only. No growth narrative, no audience, no journey. |
| **Submittable** | Application submission tool | Just forms. No profile that persists. No community. |
| **Artwork Archive** | Artist inventory manager | Back-office tool. No public presence at all. |
| **Human ArtArk** | **The artist's public journey** | Built around the artist from day one. The journey is the product. |

The gap is structural, not a missing feature. Artsy can't add "witness" without betraying its gallery clients. Saatchi can't add it without changing what it fundamentally is.

---

## Why Now

Three things are happening simultaneously:

1. **AI has made "beautiful" meaningless as a signal.** Human authorship is becoming the scarce premium — the way "organic" became a food label when industrial farming scaled.

2. **The art world's infrastructure is still broken for emerging artists.** Galleries run on personal connections and cold emails. The open call data exists. Nobody has structured it.

3. **Audiences want to participate in a story, not just consume output.** Patreon, Substack, every successful creator platform points the same direction: proximity to the making, not just the made.

Human ArtArk sits at the intersection of all three.

---

## What's Already in Motion

- 70 gallery newsletters delivered to a dedicated inbox, parsed weekly since March 2026
- Gallery database: 847 line changes across 23 commits since January
- Agent pipeline live: scraper + newsletter parser + artist matcher + letter drafter
- Artist detail pages show real follower counts and milestone timelines

---

## Stack

| | |
|---|---|
| **Agent runtime** | [OpenClaw](https://github.com/openclaw/openclaw) — Telegram + Claude + session memory |
| **Matching** | Claude Sonnet |
| **Letter drafting + gallery scraping** | Claude Haiku |
| **Frontend** | Vanilla HTML/CSS, GitHub Pages — zero infra |
| **Gallery data** | GALLERY_DATABASE.md — version-controlled, agent-maintained |

---

## Vision

**Phase 1 — Bay Area** *(now)*  70+ galleries. Live open call data. Artist profiles. Agent-powered matching. Direct sales.

**Phase 2 — Global**  Same pipeline, every city. The most complete structured record of gallery open calls on earth.

**Phase 3 — Residencies**  Yaddo, MacDowell, Headlands, 500+ others. One profile, apply everywhere.

**Phase 4 — Provenance**  "You were the 3rd person to collect this artist's work." Timestamped, verifiable, permanently part of the record.

**Phase 5 — The Signal**  "Human ArtArk verified" becomes what galleries, curators, and auction houses use to establish provenance and authenticity.

The moat is the data. Every newsletter parsed, every open call detected, every application sent makes the agent better. That compound value is not reproducible overnight.

---

## Built By

**Na Qi** ([@NaaaaaaQi](https://github.com/NaaaaaaQi)) · Solo · San Francisco

- Platform: [github.com/NaaaaaaQi/human-artark](https://github.com/NaaaaaaQi/human-artark)
- Agent: [github.com/NaaaaaaQi/my-gallery-agent](https://github.com/NaaaaaaQi/my-gallery-agent)

---

*Human ArtArk · Est. 2026 · San Francisco*
