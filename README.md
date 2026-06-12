# Human ArtArk

**The platform for artists — build your profile, find open calls, apply to galleries, get into residencies, and sell your work. All in one place.**

🌐 [naaaaaaqi.github.io/human-artark](https://naaaaaaqi.github.io/human-artark/) &nbsp;·&nbsp; 🎨 [Artist demo](https://naaaaaaqi.github.io/human-artark/artists/sofia-reyes/) &nbsp;·&nbsp; 🏛 [Gallery list](https://naaaaaaqi.github.io/human-artark/galleries/)

---

## What artists used to deal with

- Manually searching 70+ gallery websites every week to see who's accepting submissions
- Not knowing a gallery closed their open call three weeks ago
- Writing a new application letter from scratch for every gallery
- Sending the same portfolio PDF over and over in cold emails
- No record of what they've applied to, or who responded
- No place to sell work without giving 35–50% to a gallery or platform

## What Human ArtArk does instead

### One profile, used everywhere

An artist builds their profile once — portrait, works, CV, statement, exhibition history. That profile is the link attached to every gallery application they send. Galleries get a complete picture; the artist never assembles a submission package again.

### Live gallery database — updated automatically

70+ Bay Area galleries, tracked by two agents running in parallel:
- One scrapes each gallery's website weekly, looking for open call announcements
- One reads a dedicated inbox of gallery newsletters, parsing submission windows and deadlines

Artists see accurate, current open call status — not whatever was last manually updated six months ago.

```
Gallery websites + Newsletters
        ↓
  Scraper agent + Newsletter parser (Claude Haiku)
        ↓
  GALLERY_DATABASE.md — updated weekly
        ↓
  77 gallery pages, rebuilt automatically
```

### A personal agent for every artist

Every artist has an AI agent that runs every Monday. It knows their medium, location, exhibition history, and which galleries they've already contacted.

**What it does each week:**
1. Scans the gallery database for active open calls
2. Ranks galleries by fit for that specific artist
3. Drafts personalized application letters for the top matches
4. Sends a report to the artist on Telegram

**Live output — Sofia Reyes, June 11 2026:**

```
🎨 Human ArtArk — Weekly Opportunities
Sofia Reyes · Painting, Drawing · San Francisco

5 galleries match your work this week:

1. Mercury 20 Gallery  (fit: 9/10)
   Artist-run cooperative, welcoming figurative narrative work.
   📋 Open membership + 'Beyond Boundaries' juried show

2. Gray Loft Gallery  (fit: 9/10)
   Emerging-artist focus, warehouse space, annual juried call.
   📋 Color-theme call for entry — deadline June 30

3. Faultline Artspace  (fit: 8/10)
   Women+ gallery specializing in painting.
   📋 Artist submissions open

[Draft letters ready. Reply SEND to submit.]
```

The agent never suggests a gallery Sofia has already applied to. It never surfaces a gallery that doesn't show painting. It writes a different letter for each gallery, grounded in what that gallery actually programs.

**Run it yourself:**
```bash
git clone https://github.com/NaaaaaaQi/my-gallery-agent
ANTHROPIC_API_KEY=sk-ant-... python3 scripts/artist_agent.py --artist sofia-reyes
```

### Apply in one click

Every gallery page has an Apply button. The gallery is pre-filled. The artist's profile is attached. They write one short note and send.

No cold email. No assembling attachments. No wondering if they got the submission format right.

### Sell work directly — 0% commission

Artists list works on their profile. Collectors browse and inquire directly. The platform takes nothing. The artist keeps everything.

---

## What's live

| | |
|---|---|
| Homepage | [naaaaaaqi.github.io/human-artark](https://naaaaaaqi.github.io/human-artark/) |
| Gallery list | 70+ Bay Area galleries, live open call status |
| Gallery pages | 77 individual pages, each with open call detail + apply |
| Artist profiles | Portrait, works, CV, milestones, follower count, agent panel |
| Apply system | One click — profile auto-attached |
| Works for sale | Direct sale, 0% commission |
| Artist agent | Weekly matching + letter drafting via Telegram |

---

## What's already in motion

- 70 gallery newsletters currently delivered to a dedicated inbox, parsed weekly since March 2026
- Gallery database: 847 line changes across 23 commits since January
- Agent pipeline running live: scraper + newsletter parser + artist matcher + letter drafter
- 3 artists with active Telegram connections to their agent

---

## Stack

| | |
|---|---|
| Agent runtime | [OpenClaw](https://github.com/openclaw/openclaw) — Telegram + Claude + session memory |
| Matching | Claude Sonnet |
| Letter drafting + scraping | Claude Haiku |
| Frontend | Vanilla HTML/CSS, GitHub Pages |
| Gallery agent repo | [github.com/NaaaaaaQi/my-gallery-agent](https://github.com/NaaaaaaQi/my-gallery-agent) |

---

## Built by

**Na Qi** ([@NaaaaaaQi](https://github.com/NaaaaaaQi)) · Solo · San Francisco

- Platform: [github.com/NaaaaaaQi/human-artark](https://github.com/NaaaaaaQi/human-artark)
- Agent: [github.com/NaaaaaaQi/my-gallery-agent](https://github.com/NaaaaaaQi/my-gallery-agent)

---

*Human ArtArk · Est. 2026 · San Francisco*
