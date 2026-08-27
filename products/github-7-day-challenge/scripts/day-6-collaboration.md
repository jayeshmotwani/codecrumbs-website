# Day 6 — Collaborate Like a Real Developer

**Checkpoint:** 6 · **Runtime:** ~2.5 min · **Difficulty:** easy to do — then you wait on a human · **Time to actually do it:** ~10 min of your work, plus however long a maintainer takes to reply

**Goal:** fork a public repo, make a small change, open your first pull request, and know how to read and respond to a review comment.

---

[ON CAMERA]

Day 6. Almost no real-world code is written alone. Today you learn how people propose changes to each other's projects — forks and pull requests — which is the thing that separates "I know Git" from "I could work on a team."

[SCREEN — github.com, a beginner-friendly repo]

We'll point you at a beginner-friendly repo. Click "Fork" on GitHub to make your own copy, then locally:

    git clone https://github.com/you/their-repo.git
    git checkout -b fix-readme-typo
    git commit -am "Fix typo in README"
    git push origin fix-readme-typo   # then open a PR on GitHub

Push your branch, and GitHub shows a button to open a pull request — a PR. That's a formal "here's a change, please consider merging it." Then a maintainer reviews it, maybe leaves comments, and eventually merges it.

[ON CAMERA]

**One thing the guide doesn't tell you.** Fork versus branch confuses people: you *branch* inside a repo you're allowed to write to; you *fork* when you're not — a fork is your own separate copy on GitHub's servers that you have full control over. You then branch inside your fork.

Before you change a single character, look for a file called `CONTRIBUTING.md` in the repo and read it. Every project has its own rules — commit message style, where to post first, whether they even want small fixes. Ignoring that file is the number one reason first PRs get closed without a merge.

Keep this first one tiny. A typo, a broken link, a confusing sentence in the docs. Maintainers merge small, obvious fixes in minutes. Big surprise PRs sit for weeks because reviewing them is work.

And understand what a PR actually is: a conversation, not a submission you hand in. If the reviewer clicks "Request changes," that is completely normal and not a rejection of you. You just make more commits on the same branch and push again — the PR updates itself automatically. No need to open a new one.

One merged pull request to a real project says more on your profile than ten repos you made alone. So while you're there, star the repo and hit watch — maintainers notice the people who stick around.

[ON CAMERA]

**Your checkpoint:** share the link to your first-ever Pull Request. Today's bonus also unlocks a curated "Good First Issue" list of beginner-friendly repos, so you've got somewhere to go next.

If your branch pushed but GitHub isn't showing the "Compare & pull request" button, or a review comment came back and you're not sure what it's asking — paste the link in the community and we'll read it with you. See you on Day 7, the last one.
