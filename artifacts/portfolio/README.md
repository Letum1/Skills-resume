# Clyde Miles Bonita - Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS.

## Deploy to Vercel

### 1. Fork / Clone this repo

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." > "Project"
3. Import your GitHub repository
4. Vercel will auto-detect the Vite framework settings

### 3. Build Settings
- **Framework Preset**: Vite
- **Root Directory**: `artifacts/portfolio` (if deploying from monorepo root) or set this as the root if deploying standalone
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### 4. Environment Variables
Set this in your Vercel Project Settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `VERCEL` | `1` |

This prevents the root monorepo's `preinstall` script from blocking npm on Vercel.

### 5. Deploy
Click "Deploy" and your portfolio will be live in seconds.

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Tech Stack
- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- TypeScript
