# Checkpoint scripts — The GitHub 7-Day Challenge

Spoken-word scripts for the checkpoint videos on the Nas.io challenge. One file per
checkpoint: a welcome video (Checkpoint 0) plus Day 1–7.

- **Language:** English, conversational — written to be read aloud, not printed.
- **Source of truth for the "what to do" beats:** `../src/content/challenge.mjs`
  (`why`, `todo`, `commands`, `checkpoint`, `unlock`) — the same copy that is in
  the `pdfs-v2/` guides. The scripts summarise that day's guide so a learner who
  only watches the video still knows what to do.
- **Every day's script also carries one "the guide doesn't tell you this" beat** —
  a piece of context, a gotcha, or a habit that is *not* in the PDF. That section
  is deliberately additive; keep it out of `challenge.mjs` / the PDFs (those stay
  verbatim from the content pass).
- **Every day names its difficulty and rough time cost** up front, so learners can
  plan the day and don't quit thinking they're slow.

## Files

| File | Checkpoint | Difficulty | Time to actually do it |
|---|---|---|---|
| `checkpoint-0-welcome.md`     | 0 — Welcome     | — | 2–3 min to watch |
| `day-1-setup.md`              | 1 — Setup       | Easiest day | 30–45 min (mostly downloads) |
| `day-2-core-commands.md`      | 2 — Core commands | Easy hands, slower brain | 15–20 min |
| `day-3-repositories.md`       | 3 — Repositories | Easy | 15 min |
| `day-4-real-project.md`       | 4 — Real project | Medium (longest day) | 20–40 min |
| `day-5-branching.md`          | 5 — Branching   | Sounds hard, isn't | 10–15 min |
| `day-6-collaboration.md`      | 6 — Collaboration | Easy — then you wait on a human | 10 min of your time |
| `day-7-portfolio.md`          | 7 — Portfolio   | Easy — polish, no new Git | 20–30 min |

## Format of each script

```
# heading + one-line metadata (checkpoint no. / runtime / difficulty / time cost)
Goal line — what the learner can do after this checkpoint.
---
[ON CAMERA] / [SCREEN] cues in brackets — light direction, delete if reading straight.
The spoken script, in short paragraphs.
A "One thing the guide doesn't tell you" beat.
The checkpoint call-to-action (matches challenge.mjs `checkpoint`).
A close that points people back to the community with a question.
```

Runtimes assume ~130 words/minute delivery.
