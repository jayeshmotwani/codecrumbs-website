# Contributing

Thanks for taking a look. This is a personal project, but contributions are welcome if they're focused and useful.

## What's in scope

- Bug fixes (layout broken, link wrong, image not loading)
- Accessibility improvements
- Performance improvements
- Updating app listings (description, tech stack, URL changes)

## What's out of scope

- Adding analytics or tracking of any kind
- Redesigning the overall look and feel — open an issue first if you have a strong case
- Adding new apps to the showcase — that's the owner's call

## How to contribute

1. Fork the repo
2. Create a branch: `git checkout -b fix/your-fix-description`
3. Make your change
4. Test it: `npm run dev` and `npm run build` should both pass
5. Open a PR with a clear title and description of what you changed and why

## Local setup

```bash
npm install
npm run dev
```

Requires Node 18+.

## Code style

- React function components, no classes
- Tailwind utilities for styling
- No comments unless the reason is non-obvious
- Keep components small and focused on one section
