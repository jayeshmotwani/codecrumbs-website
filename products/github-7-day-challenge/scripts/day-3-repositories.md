# Day 3 — Create and Manage Your First Repository

**Checkpoint:** 3 · **Runtime:** ~2.5 min · **Difficulty:** easy · **Time to actually do it:** about 15 min

**Goal:** create a repo on GitHub.com, clone it to the computer, understand local vs remote, and push a small change up.

---

[ON CAMERA]

Day 3. Yesterday your commits lived only on your laptop. Today they go up to GitHub, where the world can see them. This is the step that turns "code on my machine" into "code with a link."

[SCREEN — github.com, New repository]

Start on GitHub.com. Click "New repository," give it a name, and — do check the box that says "Add a README file." Create it.

Then bring it down to your computer and practice the loop:

    git clone https://github.com/you/your-repo.git
    cd your-repo
    git add . && git commit -m "Add notes"
    git push origin main    # send local commits to GitHub

`clone` copies the GitHub repo — full history and all — onto your machine. You make a commit locally like yesterday. Then `git push` sends it back up. Refresh the GitHub page and your change is there.

The mental model: **local** is the copy on your laptop where you do the work. **Remote** is the copy on GitHub that others see and that acts as your backup. You need both, and `push` is the bridge from one to the other.

[ON CAMERA]

**One thing the guide doesn't tell you.** "origin" isn't a magic keyword — it's just the default nickname Git gives the remote URL when you clone. You could rename it. Run `git remote -v` and you'll see `origin` is literally pointing at your `https://github.com/...` address. So `git push origin main` reads as "push my main branch to the place called origin."

Two gotchas that trip up nearly everyone here. First: the very first push sometimes needs `git push -u origin main`. That `-u` links your local `main` to the remote one, so every push after that is just `git push` with nothing else. Second: if a push over HTTPS asks you for a password — your GitHub account password will *not* work. GitHub turned that off in 2021. What it wants is a **Personal Access Token**, which you generate in Settings, Developer settings. Paste the token where it asks for a password.

And the reassuring part: local and remote are equal copies, not master and servant. If GitHub goes down, your local history is completely untouched. Every clone anyone has ever made is a full backup of the project.

[ON CAMERA]

**Your checkpoint:** share the link to your new repository in the Challenge Feed.

If the push got rejected, or the token thing is confusing, paste the full error into the community — the first successful push is a rite of passage and we've all hit that wall. See you on Day 4.
