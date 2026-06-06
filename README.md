# FIFA World Cup 2026 Pool

A simple, static website displaying team assignments for a World Cup 2026 pool among 13 friends.

## Pool Rules

- **13 friends** total
- Each friend gets **3 teams**:
  - 1 from Tier 1 (top 13 ranked teams) - Favorite
  - 1 from Tier 2 (next 13 ranked teams) - Dark Horse
  - 1 from Tier 3 (next 13 ranked teams) - Underdog
- **Winner takes all** - whoever has the World Cup winner wins the pool!

## Current Assignments

| Friend | Tier 1 (Favorite) | Tier 2 (Dark Horse) | Tier 3 (Underdog) |
|--------|------------------|---------------------|-------------------|
| Ali DT | England | Poland | Serbia |
| Ali MG | Netherlands | USA | Costa Rica |
| Bernie | Spain | Mexico | Tunisia |
| Bryan | France | Japan | Chile |
| Chino | Uruguay | Ecuador | Egypt |
| Diego | Brazil | Canada | Cameroon |
| Genaro | Portugal | Denmark | Wales |
| Ivan | Italy | Morocco | Austria |
| Roman | Croatia | Senegal | Peru |
| Luis | Argentina | South Korea | Ukraine |
| Ramiro | Germany | Switzerland | Sweden |
| Toño | Belgium | Iran | Nigeria |
| Moz | Colombia | Australia | Saudi Arabia |

## Tech Stack

- **Framework**: [Astro](https://astro.build) (static site generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Hosting**: Cloudflare Pages
- **Data**: TypeScript files (no database)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Regenerating Assignments

If you want to regenerate the team assignments:

```bash
npm run generate-assignments
```

This will create new random assignments and overwrite `src/data/assignments.ts`. Review the changes with `git diff` before committing.

## Deployment to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. Push this repository to GitHub
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

### Option 2: Direct Upload with Wrangler

```bash
# Install wrangler globally (if not already installed)
npm install -g wrangler

# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=quiniela-mundial-2026
```

## Project Structure

```
quiniela-mundial-2026/
├── scripts/
│   └── generate-assignments.ts    # Random assignment generator
├── src/
│   ├── components/
│   │   ├── FriendCard.astro       # Card showing friend + teams
│   │   ├── Header.astro           # Page header
│   │   └── TeamBadge.astro        # Team flag + name
│   ├── data/
│   │   ├── assignments.ts         # Generated friend-team mappings
│   │   ├── friends.ts             # List of 13 friends
│   │   └── teams.ts               # 48 World Cup teams with tiers
│   ├── layouts/
│   │   └── Layout.astro           # Base HTML layout
│   ├── pages/
│   │   └── index.astro            # Main pool page
│   ├── styles/
│   │   └── global.css             # Global Tailwind styles
│   └── utils/
│       └── flags.ts               # Country code → emoji converter
├── astro.config.mjs               # Astro configuration
├── package.json                   # Dependencies and scripts
└── tailwind.config.mjs            # Tailwind configuration
```

## Features

- View-only static page (no authentication needed)
- Responsive design (mobile, tablet, desktop)
- Country flags using Unicode emoji (zero dependencies)
- Beautiful gradient background
- Clean, modern UI with Tailwind CSS
- Fast loading (static site, optimized build)

## License

MIT
