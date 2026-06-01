# Portfolio Deployment & Setup Guide

## Quick Start (Local Development)

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Development

```bash
cd portfolio_purabh

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev
```

### Build & Production

```bash
# Build for production
npm run build

# Start production server (requires Next.js build output)
npm start
```

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + PostCSS
- **Animations:** Framer Motion
- **Content:** MDX (for case studies)
- **Icons:** react-icons (FiIcon, AiFillGithub, MdMail, etc.)
- **Image Optimization:** next/image
- **Linting:** ESLint 9

## Deployment (Vercel)

### Automatic Deployment

1. Push your branch to GitHub:
   ```bash
   git push -u origin your-branch-name
   ```

2. Vercel auto-detects the Next.js project and deploys on push (if configured).

3. Or manually connect on [Vercel Dashboard](https://vercel.com/dashboard):
   - Select `portfolio-purabh` repo
   - Select branch (`main` or feature branch)
   - Click "Deploy"

### Environment Variables

No additional environment variables are required for the portfolio site. If you add integrations (analytics, contact forms, etc.), add them to `.env.local`:

```bash
# Example (if needed)
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

### Custom Domain

1. Go to Vercel project settings → Domains
2. Add your domain (e.g., `purabh.dev`)
3. Follow DNS instructions

## File Structure

```
portfolio_purabh/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Home/hub
│   │   ├── layout.tsx            ← Root layout
│   │   ├── globals.css           ← Global styles + Tailwind
│   │   └── projects/[slug]/      ← Dynamic project pages
│   ├── components/
│   │   ├── Navbar.tsx            ← Header with social links
│   │   ├── Hero.tsx              ← CTA section
│   │   └── ui/BentoCard.tsx      ← Project card component
│   ├── content/
│   │   └── projects/
│   │       ├── *.mdx             ← Public case studies
│   │       ├── private/          ← Private/full copies (optional, not linked)
│   │       └── sanitization_manifest.csv
│   └── lib/utils.ts              ← Utility functions
├── public/
│   ├── profile.png               ← Your profile photo
│   ├── resume.pdf                ← Your resume
│   └── [other assets]
├── package.json
├── tailwind.config.mjs           ← Tailwind configuration
├── postcss.config.mjs            ← PostCSS plugins
├── tsconfig.json                 ← TypeScript config
└── README.md
```

## Project Management

### Adding a New Case Study

1. Create a new `.mdx` file in `src/content/projects/`:
   ```bash
   cp src/content/projects/template.mdx src/content/projects/my-project.mdx
   ```

2. Write MDX content (markdown + React components).

3. Update `src/app/projects/[slug]/page.tsx` to include the new slug in `validSlugs`.

4. Add a `BentoCard` entry in `src/app/page.tsx` linking to `/projects/my-project`.

### Updating Profile Photo

Replace `public/profile.png` with your new photo and rebuild:

```bash
npm run build
```

### Updating Resume

Replace `public/resume.pdf` with your updated resume.

## Privacy & Sanitization

See `PRIVACY_CHECKLIST.md` for guidelines on handling sensitive client projects, naming anonymization, and private copies.

## Troubleshooting

### Styles not rendering

1. Verify `tailwind.config.mjs` exists and lists correct content paths.
2. Run `npm install` to ensure all dependencies are installed.
3. Clear Next cache: `rm -rf .next` and `npm run dev`.

### Icons not displaying

1. Verify `react-icons` is installed: `npm ls react-icons`.
2. Ensure icon imports use the correct paths (e.g., `react-icons/fi` for Feather icons).
3. Check that icon components are in `"use client"` components for SSR compatibility.

### MDX content not loading

1. Verify the `.mdx` file exists in `src/content/projects/`.
2. Add the slug to `validSlugs` in `src/app/projects/[slug]/page.tsx`.
3. Restart dev server: `npm run dev`.

## Support

For questions or issues:
1. Check the Next.js docs: https://nextjs.org/docs
2. Check Tailwind CSS docs: https://tailwindcss.com/docs
3. Check react-icons: https://react-icons.github.io/react-icons/

