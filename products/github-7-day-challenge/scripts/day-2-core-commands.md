# Day 2 — Learn the Handful of Commands You'll Actually Use

**Checkpoint:** 2 · **Runtime:** ~2.5 min · **Difficulty:** easy on the hands, slower on the brain — it's a concepts day · **Time to actually do it:** 15–20 min

**Goal:** know what "repository," "commit," and "staging area" mean in plain English, and run the core loop end to end to make one deliberate first commit.

---

[ON CAMERA]

Day 2. Yesterday was clicking; today is the first day you actually use Git. The typing takes about two minutes. The ideas behind it take a bit longer, so don't rush this one.

Three words to get straight. A **repository** is just a folder that Git is watching. A **commit** is a saved snapshot of that folder at a moment in time, with a message attached. And the **staging area** is a waiting room — you pick which changes go into the next commit before you actually make it.

[SCREEN — terminal]

Now the core loop. This is the pattern you'll repeat for the rest of your life as a developer:

    git init                 # start tracking this folder
    git status               # see what has changed
    git add .                # move changes into the staging area
    git commit -m "My first commit"
    git log                  # view your history

`init` once per project. Then it's a rhythm: change some files, `status` to see what moved, `add` to stage, `commit` to save, and `log` to look back. Do it once today on purpose, slowly, watching what each command reports.

[ON CAMERA]

**One thing the guide doesn't tell you.** That waiting room — the staging area — feels like pointless extra steps at first. It isn't. It's there so one messy work session can become several clean commits. Say you fixed a bug *and* renamed some files *and* updated the docs, all at once. You can stage and commit just the bug fix with its own message, then stage and commit the rest separately. `git add -p` even lets you pick line-by-line within a single file. Professionals lean on this constantly to keep history readable.

Second thing: a commit stores the *whole* snapshot of your project, not just the lines that changed. Git works out the differences on the fly when you ask. That's why you can basically never lose work that's been committed — the full state is sitting there.

And a habit worth starting today: write commit messages as commands, not diary entries. "Add login form," not "added login form" or "adding stuff." Read it as "this commit will... Add login form." Also, `git log --oneline` is the version of `log` you'll actually live in — try it.

Above all: run `git status` constantly. Before you add, after you add, before you commit, when you're confused. It's the most-typed Git command there is.

[ON CAMERA]

**Your checkpoint:** run `git log` and share a screenshot showing your first commit message.

Stuck on `git init` doing nothing visible, or `git commit` complaining about identity or "nothing to commit"? That's a normal Day 2 snag — post the screenshot in the community and we'll sort it. See you on Day 3.
