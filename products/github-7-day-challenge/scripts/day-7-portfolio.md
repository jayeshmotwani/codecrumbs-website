# Day 7 — Showcase Your Portfolio

**Checkpoint:** 7 · **Runtime:** ~2.5 min · **Difficulty:** easy — it's polish and curation, no new Git · **Time to actually do it:** 20–30 min

**Goal:** create a profile README, pin your 3–6 best repos, and do a final cleanup pass so 30 seconds on your profile lands well.

---

[ON CAMERA]

Day 7. Last one. A recruiter or hiring manager decides what they think of your GitHub profile in about thirty seconds. Today is entirely about making those thirty seconds count. No new Git commands — this is editing and curation.

[SCREEN — github.com]

Three jobs. First, the profile README. There's a trick to it:

    # create a repo named EXACTLY your username -> it shows on your profile
    git clone https://github.com/you/you.git
    git add README.md
    git commit -m "Add profile README"
    git push origin main

A repo whose name matches your username is special — its README renders right on your profile page. The name match is case-sensitive, so get it exact.

Second, pin your three to six best repositories from the "Customize your pins" option on your profile.

Third, a final pass: clear README on everything pinned, sensible repo names, and nothing called `test` or `asdf` left on display.

[ON CAMERA]

**One thing the guide doesn't tell you.** Each pinned repo card shows its description and a language bar — so an empty "About" field makes good code look abandoned. Go into each pinned repo, click the gear next to "About," and fill in a one-line description, a live demo link if you have one, and a few topic tags. That sidebar is the first thing people click.

A few more that punch above their effort. Your contribution graph — the green squares — gets a glance from recruiters, and what they're reading is consistency, not volume. Don't commit junk to farm squares though; it's obvious and it looks worse than a sparse graph. In each repo's Settings there's a "Social preview" image slot — set it, and your links unfurl with a proper card when you share them anywhere.

Make the profile README genuinely scannable: who you are, what you're working on now, your main skills, and how to reach you. Someone should get all of that in one screen without scrolling.

And when you choose what to pin — pin the project you can talk about for twenty minutes in an interview, not the one with the most stars. The conversation is the point.

[ON CAMERA]

**Your checkpoint:** share your finished GitHub profile link — this is the one you'll actually put on your resume.

That's the challenge. Seven days, and you've got a real profile to show for it. If you want a second pair of eyes before you call it done, post your profile link in the community and ask for feedback — that's exactly what it's there for. Congratulations on finishing.
