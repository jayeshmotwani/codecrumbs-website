# Day 1 — Get Your Developer Home Base Set Up

**Checkpoint:** 1 · **Runtime:** ~2.5 min · **Difficulty:** easiest day of the challenge · **Time to actually do it:** 30–45 min, and most of that is download bars

**Goal:** account created, Git installed, editor installed, and Git connected to the GitHub account so the two can talk.

---

[ON CAMERA]

Welcome to Day 1. Today is 100% setup and zero shortcuts, because everything after this depends on it. The good news: there's almost nothing to memorise today. If you can install an app, you can finish this.

[SCREEN — github.com signup]

Four things to do. First, create your GitHub account. When you pick a username, treat it like choosing a domain name — something clean and professional, because recruiters genuinely look at this. `jane-dev` or `janesmith`, not `xX_jane_Xx`.

Second, install Git on your computer. Third, install a code editor — VS Code is the standard, grab it if you don't already have one.

[SCREEN — terminal]

Fourth, connect Git to your GitHub account so your laptop and GitHub can talk. That's three commands:

    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"
    git --version

The first two tell Git who you are — use the same name and email as your GitHub account. The last one just confirms the install worked; if it prints a version number, you're good.

[ON CAMERA]

**One thing the guide doesn't tell you.** That email you just put into `git config` gets stamped onto every commit you ever make, publicly and permanently. If you use your personal email, it ends up scraped across thousands of public commits. So before you do anything else: go to GitHub, Settings, Emails, tick "Keep my email private," and it'll give you a `users.noreply.github.com` address. Put *that* in the `git config` command instead. Future you will be glad.

Two smaller things. On Windows, install "Git for Windows" — it comes with a terminal called Git Bash, and you want to use that instead of CMD so that every tutorial's commands match what you type. And your username is very sticky: changing it later breaks every link and every clone URL pointing at your repos. Pick one you'll be happy with in two years.

While you're on your profile — add a photo and your real name. A profile with an avatar gets taken seriously. The default grey icon quietly says "abandoned account."

[ON CAMERA]

**Your checkpoint:** post a screenshot of your new GitHub profile page in the Challenge Feed.

That's Day 1. If `git --version` threw an error, or the config commands didn't seem to do anything — drop it in the community with a screenshot of exactly what you typed and what came back. Setup issues are usually a two-minute fix once someone sees the error. See you tomorrow.
