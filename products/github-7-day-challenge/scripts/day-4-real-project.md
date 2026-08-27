# Day 4 — Add a Real Project to GitHub

**Checkpoint:** 4 · **Runtime:** ~2.5 min · **Difficulty:** medium — the longest day so far · **Time to actually do it:** 20–40 min, depending on how tidy your project already is

**Goal:** get a real project you've built onto GitHub with a README and a clear commit history, so it looks intentional instead of dumped.

---

[ON CAMERA]

Day 4. This is the day theory turns into portfolio. You're going to take something you've actually built — and it can be small, a script, a little webpage, a class exercise — and put it on GitHub properly.

[SCREEN — project folder + terminal]

The Git part is short and you already know it:

    git add .
    git commit -m "Add project: what it does in one line"
    git push origin main

The time today goes into two things: writing a README that explains what the project does, and making the commit message actually descriptive. And today's bonus unlocks copy-paste commit message and README templates — use them.

[ON CAMERA]

**One thing the guide doesn't tell you** — and this one matters. **Add a `.gitignore` file *before* your first commit.** That's a plain text file listing stuff Git should ignore: `node_modules`, build folders, `.env`, `.DS_Store`. If you skip it and commit a giant dependency folder, ripping it back out of history later is genuinely annoying. GitHub maintains a ready-made `.gitignore` for every language at github.com/github/gitignore — copy the one for your stack.

Attached to that: **never commit secrets.** API keys, database passwords, anything in a `.env` file. And if you do it by accident — deleting the file in a new commit is *not* enough. The key is still sitting in your history for anyone to find. The real fix is to go to wherever that key came from and revoke it. Assume a committed secret is a burned secret.

On the README: the first paragraph is what shows up in Google results and on your profile, so lead with what the thing *does* and, if it's visual, a screenshot or a GIF. "Installation instructions" can come lower down.

And on commit history — recruiters do scroll through it. Fifteen commits that tell the story of how the project came together beat one commit called "final." Don't fake it or pad it, just get into the habit of committing each real step as you go.

A repo with a README, a `.gitignore`, and a license file looks about ten times more deliberate than a pile of loose files — and adding all three takes maybe two minutes.

[ON CAMERA]

**Your checkpoint:** drop your project's GitHub link — bonus points if your README is genuinely useful.

If Git is trying to commit thousands of files and you're not sure what to ignore, ask in the community before you push — paste your `git status` output and we'll help you write the `.gitignore`. See you on Day 5.
