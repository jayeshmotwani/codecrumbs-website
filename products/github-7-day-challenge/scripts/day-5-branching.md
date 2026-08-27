# Day 5 — Understand Branching (Without the Confusion)

**Checkpoint:** 5 · **Runtime:** ~2.5 min · **Difficulty:** sounds hard, genuinely isn't · **Time to actually do it:** 10–15 min of typing

**Goal:** understand a branch as "a safe copy to experiment in," create one, make a change, merge it back to main, and know how to bail out of a messy merge.

---

[ON CAMERA]

Day 5. Branching is the thing that scares beginners the most, and it really shouldn't. Here's the whole idea: a branch is a safe copy of your project where you can try something without touching the version that works. If the experiment's good, you merge it in. If it's bad, you throw the branch away and nothing was lost.

[SCREEN — terminal]

    git branch                    # list your branches
    git checkout -b try-an-idea   # create a branch and switch to it
    git commit -am "Try an idea"
    git checkout main
    git merge try-an-idea         # bring the work back

So: you branch off `main`, do your work and commit it over on `try-an-idea`, switch back to `main`, and `merge` pulls that work in. Do that once today.

[ON CAMERA]

**One thing the guide doesn't tell you.** A branch is almost nothing. Under the hood it's a tiny file containing one line — the ID of the commit it points at. That's the entire thing. Creating a branch is instant and costs no space, which is exactly why real developers make dozens of them without thinking twice. One branch per idea. Never do real work directly on `main`.

A few things that make branching click faster. There's a newer command, `git switch`, that does the switching part — `git switch -c try-an-idea` — and it's clearer than `checkout`, which does about five different jobs. Either works. In `git log` you'll see something like `HEAD -> main`; `HEAD` just means "you are here," so that's how you check which branch you're on. Or read your terminal prompt, which usually shows it.

Now, merge conflicts. When Git says there's a conflict, that is **not an error** — Git is telling you two changes touched the same lines and it needs a human to decide which wins. You open the file, you'll see chunks marked with `<<<<<<<`, `=======`, and `>>>>>>>`, you edit it to what you actually want, delete those marker lines, then `git add` and `git commit`. That's the entire recovery.

And your undo button: `git merge --abort`. It puts you back exactly where you were before you ran `merge`, like it never happened. Knowing that command exists is what makes this safe to play with — you genuinely can't break anything today.

[ON CAMERA]

**Your checkpoint:** share a screenshot of your branch list showing at least two branches.

If a conflict showed up and the markers in the file look like nonsense, screenshot the file and post it — conflicts are much less scary once someone walks you through one. See you on Day 6.
