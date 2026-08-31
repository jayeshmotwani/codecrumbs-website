/*
 * Content for "The GitHub 7-Day Challenge: Zero to Portfolio-Ready".
 *
 * Prose (title, tagline, "why this matters", "what you'll do", checkpoints) is
 * taken VERBATIM from the challenge content pass:
 *   ~/Downloads/github-challenge-nas-io.md  (sections 1, 2, 6)
 * Nothing here invents new lesson material.
 *
 * `commands` per day render the canonical one-line Git command for a step that
 * the content pass already describes in words (e.g. Day 3 "practice pushing" ->
 * `git push`). They add no new concepts; they present the same tasks in the
 * form a learner will actually type. Markup tokens inside command strings:
 *   {p}…{/p}  orange shell prompt      {k}…{/k}  git keyword (purple)
 *   {c}…{/c}  dimmed # comment
 */

export const challenge = {
  title: 'The GitHub 7-Day Challenge',
  titleFull: 'The GitHub 7-Day Challenge: Zero to Portfolio-Ready',
  tagline:
    "One small Git skill a day. By Day 7, you'll have a GitHub profile that " +
    "actually looks like a developer's — not just a folder of files.",
  brandTagline: 'Your daily bite of tech mastery.',
  totalDays: 7,
};

export const days = [
  {
    n: 1,
    slug: 'get-your-developer-home-base-set-up',
    title: 'Get Your Developer Home Base Set Up',
    nav: 'Setup',
    why:
      "Every developer's work — from beginner side projects to production code " +
      "at big tech companies — lives on GitHub. Before you can learn a single " +
      "Git command, you need the account and tools in place. Skip this step and " +
      "every day after it gets harder, so today is 100% setup, zero shortcuts.",
    todo: [
      'Create your GitHub account (and pick a professional-looking username — recruiters see this)',
      'Install Git on your computer',
      "Install a code editor (VS Code) if you don't already have one",
      'Connect Git to your GitHub account so your computer and GitHub can "talk" to each other',
    ],
    termLabel: 'connect git to your account',
    commands: [
      '{c}# tell Git who you are — use the same name & email as your GitHub account{/c}',
      '{p}${/p} {k}git{/k} config --global user.name "Your Name"',
      '{p}${/p} {k}git{/k} config --global user.email "you@example.com"',
      '{p}${/p} {k}git{/k} --version   {c}# confirm the install worked{/c}',
    ],
    checkpoint:
      'Post a screenshot of your new GitHub profile page in the Challenge Feed.',
  },
  {
    n: 2,
    slug: 'learn-the-commands-youll-actually-use',
    title: "Learn the Handful of Commands You'll Actually Use",
    nav: 'Core commands',
    why:
      "Git has hundreds of commands, but working developers really only use " +
      "about 8–10 of them day to day. You don't need to memorize a manual — you " +
      "need to get comfortable typing the same handful of commands until " +
      "they're muscle memory.",
    todo: [
      'Learn what a "repository," "commit," and "staging area" actually mean (in plain English, not textbook definitions)',
      'Practice the core loop: {code}git init{/code}, {code}git add{/code}, {code}git commit{/code}, {code}git status{/code}, {code}git log{/code}',
      'Make your first commit — on purpose, so you see exactly what it does',
    ],
    termLabel: 'the core loop',
    commands: [
      '{p}${/p} {k}git{/k} init                 {c}# start tracking this folder{/c}',
      '{p}${/p} {k}git{/k} status               {c}# see what has changed{/c}',
      '{p}${/p} {k}git{/k} add .                {c}# stage your changes{/c}',
      '{p}${/p} {k}git{/k} commit -m "My first commit"',
      '{p}${/p} {k}git{/k} log                  {c}# view your commit history{/c}',
    ],
    checkpoint:
      'Run {code}git log{/code} and share a screenshot showing your first commit message.',
  },
  {
    n: 3,
    slug: 'create-and-manage-your-first-repository',
    title: 'Create and Manage Your First Repository',
    nav: 'Repositories',
    why:
      'A repository (or "repo") is just a project folder that Git is tracking. ' +
      'Knowing how to create one — and the difference between a local repo on ' +
      'your laptop and a remote one on GitHub.com — is the skill that turns ' +
      '"code on my computer" into "code the world can see."',
    todo: [
      'Create a new repository directly on GitHub.com',
      'Clone it down to your computer',
      'Understand the difference between local and remote, and why you need both',
      'Practice pushing a small change up to GitHub',
    ],
    termLabel: 'clone, then push',
    commands: [
      '{p}${/p} {k}git{/k} clone https://github.com/you/your-repo.git',
      '{p}${/p} cd your-repo',
      '{p}${/p} {k}git{/k} add . && {k}git{/k} commit -m "Add notes"',
      '{p}${/p} {k}git{/k} push origin main   {c}# send local commits to GitHub{/c}',
    ],
    checkpoint:
      'Share the link to your new repository in the Challenge Feed.',
  },
  {
    n: 4,
    slug: 'add-a-real-project-to-github',
    title: 'Add a Real Project to GitHub',
    nav: 'Real project',
    why:
      "An empty repository doesn't impress anyone. Today's the day theory " +
      "becomes a portfolio — you'll take something you've actually built (even " +
      "something small) and get it properly onto GitHub, with the basic polish " +
      "(a README, a clear commit history) that makes it look intentional rather " +
      "than dumped there.",
    todo: [
      'Take an existing project (or a simple one you build today) and add it to Git',
      'Write a basic README explaining what the project does',
      'Commit and push it with a clear, descriptive commit message',
    ],
    termLabel: 'ship the project',
    commands: [
      '{p}${/p} {k}git{/k} add .',
      '{p}${/p} {k}git{/k} commit -m "Add project: what it does in one line"',
      '{p}${/p} {k}git{/k} push origin main',
    ],
    checkpoint:
      "Drop your project's GitHub link — bonus points if your README is genuinely useful.",
    unlock:
      'Bonus unlocked today: copy-paste Commit Message & README templates.',
  },
  {
    n: 5,
    slug: 'understand-branching-without-the-confusion',
    title: 'Understand Branching (Without the Confusion)',
    nav: 'Branching',
    why:
      "Branching is the concept that trips up most beginners — and it's also " +
      "what lets real teams work on the same project without stepping on each " +
      "other's code. Once you see a branch as just “a safe copy to " +
      "experiment in,” it stops being scary.",
    todo: [
      'Learn what a branch actually is, using a simple analogy (not a diagram full of arrows)',
      'Create a new branch and make a change on it',
      'Merge that branch back into your main branch',
      "See what happens (and how to recover) when a merge doesn't go cleanly",
    ],
    termLabel: 'branch, then merge',
    commands: [
      '{p}${/p} {k}git{/k} branch                     {c}# list your branches{/c}',
      '{p}${/p} {k}git{/k} checkout -b try-an-idea    {c}# create + switch to it{/c}',
      '{p}${/p} {k}git{/k} commit -am "Try an idea"',
      '{p}${/p} {k}git{/k} checkout main',
      '{p}${/p} {k}git{/k} merge try-an-idea          {c}# bring the work back{/c}',
    ],
    checkpoint:
      'Share a screenshot of your branch list showing at least two branches.',
  },
  {
    n: 6,
    slug: 'collaborate-like-a-real-developer',
    title: 'Collaborate Like a Real Developer',
    nav: 'Collaboration',
    why:
      'Almost no real-world code is written alone. Understanding how people ' +
      'propose changes to each other’s projects — via forks and pull ' +
      'requests — is what separates "I know Git" from "I can work on a team’s ' +
      'codebase."',
    todo: [
      "Fork someone else's public repository (we'll point you to a beginner-friendly one)",
      'Make a small change and open your first Pull Request',
      'Learn what a code review comment looks like and how to respond to one',
    ],
    termLabel: 'fork → change → pull request',
    commands: [
      '{c}# after clicking "Fork" on github.com, then locally:{/c}',
      '{p}${/p} {k}git{/k} clone https://github.com/you/their-repo.git',
      '{p}${/p} {k}git{/k} checkout -b fix-readme-typo',
      '{p}${/p} {k}git{/k} commit -am "Fix typo in README"',
      '{p}${/p} {k}git{/k} push origin fix-readme-typo   {c}# then open a PR on GitHub{/c}',
    ],
    checkpoint:
      'Share the link to your first-ever Pull Request.',
    unlock:
      'Bonus unlocked today: the curated "Good First Issue" list of beginner-friendly repos.',
  },
  {
    n: 7,
    slug: 'showcase-your-portfolio',
    title: 'Showcase Your Portfolio',
    nav: 'Portfolio',
    why:
      'A recruiter or hiring manager looking at your GitHub profile decides ' +
      'what they think of you in about 30 seconds. Today is about making those ' +
      '30 seconds count — pinning your best work, writing a profile README, and ' +
      'cleaning up anything that looks unfinished.',
    todo: [
      'Create a GitHub profile README (the special repo that shows up on your profile page)',
      'Pin your 3–6 best repositories',
      'Do a final pass: clear README files, sensible repo names, no "test" or "asdf" repositories left pinned',
    ],
    termLabel: 'the profile readme repo',
    commands: [
      '{c}# create a repo named EXACTLY your username -> it shows on your profile{/c}',
      '{p}${/p} {k}git{/k} clone https://github.com/you/you.git',
      '{p}${/p} {k}git{/k} add README.md',
      '{p}${/p} {k}git{/k} commit -m "Add profile README"',
      '{p}${/p} {k}git{/k} push origin main',
    ],
    checkpoint:
      "Share your finished GitHub profile link — this is the one you'll actually put on your resume.",
  },
];
