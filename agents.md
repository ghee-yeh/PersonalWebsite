# AI Agent Documentation

This document helps AI agents understand and work with this Next.js personal website codebase.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2
- **Styling**: CSS Modules + Global CSS with CSS variables
- **Animations**: Framer Motion
- **Internationalization**: next-intl (URL-based routing)
- **Analytics**: PostHog
- **APIs**: Spotify (currently playing)

## Project Structure

```
site/
├── app/
│   ├── [locale]/             # Locale-based routing (en, es)
│   │   ├── layout.js         # Locale-aware layout with next-intl
│   │   ├── page.js           # Home page
│   │   ├── experience/       # Work experience page
│   │   └── favorites/        # Books/songs/podcasts page
│   ├── _components/          # Shared components
│   │   ├── NavBar/           # Navigation with language toggle
│   │   ├── Footer/           # Social links
│   │   ├── Title/            # Animated name title
│   │   ├── Frame/            # Image frame component
│   │   ├── Polygon/          # SVG polygon shape
│   │   └── Spotify/          # Now playing widget
│   ├── _utils/               # Utility functions
│   │   └── animations.js     # Framer Motion variants
│   ├── experience/           # Experience page components
│   │   └── _components/
│   │       └── ExperienceCard/
│   ├── favorites/            # Favorites page components
│   │   └── _components/
│   │       └── Media/
│   ├── api/
│   │   └── spotify/          # Spotify API route
│   ├── globals.css           # Global styles + theme variables
│   └── page.module.css       # Page-specific styles
├── messages/                 # Translation files
│   ├── en.json               # English translations
│   └── es.json               # Spanish translations
├── i18n/
│   └── routing.js            # next-intl routing config
├── i18n.js                   # next-intl configuration
├── middleware.js             # Locale detection middleware
├── public/                   # Static assets (images)
└── next.config.js            # Next.js config
```

## Key Patterns

### Internationalization

**Implementation: next-intl**
- URL-based routing: `/en/` and `/es/`
- No page reloads on language switch
- Server-side rendering support
- Translations in `messages/en.json` and `messages/es.json`

**Usage in components:**
```jsx
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations();
  return <div>{t('key_name')}</div>;
}
```

**Language switching:**
```jsx
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const locale = useLocale();
const pathname = usePathname();
const router = useRouter();

const switchLocale = () => {
  const newLocale = locale === 'en' ? 'es' : 'en';
  const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
  router.push(newPath);
};
```

### Theming

**CSS Variables:**
```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --primary: #000000;
  --secondary: #ffffff;
  --tertiary: #808080;
  --quaternary: #F3F3F3;
  --selection: #000000;
  --border: #E5E5E5;
}
```

**Theme Toggle:**
- Managed in NavBar component
- Applied via `document.body.className = "${theme}-theme"`
- Classes: `.light-theme` and `.dark-theme`

### Animations

**Framer Motion:**
Reusable animation variants in `app/_utils/animations.js`:

```jsx
import { motion } from "framer-motion";
import { staggerContainer, fadeInVariants } from "../_utils/animations";

<motion.div 
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  <motion.div variants={fadeInVariants}>
    Content fades in
  </motion.div>
</motion.div>
```

### Typography Scale

Global typography classes defined in `globals.css`:
- Headers: `h1` (97px) → `h6` (20px)
- Subtitles: `.s1` (16px), `.s2` (14px)
- Body: `.b1` (16px) → `.b5` (8px)

**Responsive:** Use `clamp()` for fluid typography.

### Component Structure

All components follow this pattern:
```
ComponentName/
├── index.js              # Export only
├── ComponentName.jsx     # Component logic
└── style.module.css      # Scoped styles
```

### Page Layout Pattern

All pages share this structure:
```jsx
<motion.div className={styles.container} variants={staggerContainer} initial="hidden" animate="visible">
  <motion.div variants={fadeInVariants}><NavBar /></motion.div>
  {/* Page content */}
  <motion.div variants={fadeInVariants}><Footer /></motion.div>
</motion.div>
```

Container styles in `page.module.css`:
```css
.container {
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  padding: 80px;
  gap: 64px;
  font-family: var(--font-lora);
}
```

## API Routes

### Spotify API (`/api/spotify`)

Returns currently playing track:
```json
{
  "isPlaying": true,
  "title": "Song Name",
  "artist": "Artist Name",
  "album": "Album Name",
  "albumImageUrl": "https://...",
  "songUrl": "https://open.spotify.com/track/..."
}
```

**Environment Variables Required:**
```
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
SPOTIFY_REFRESH_TOKEN
```

## Styling Guidelines

1. **Use CSS variables** for colors (supports theming)
2. **CSS Modules** for component-specific styles
3. **Global classes** for typography (`.b1`, `.b2`, etc.)
4. **Transitions** on interactive elements (0.3s ease standard)
5. **Responsive**: Mobile-first with media queries

## Common Tasks

### Adding a New Page

1. Create folder in `app/[locale]/`
2. Add `page.js` with client component
3. Include NavBar and Footer with Framer Motion animations
4. Add translations to `messages/en.json` and `messages/es.json`
5. Use `useTranslations()` hook for text

### Adding Translations

1. Open `messages/en.json` and `messages/es.json`
2. Add key to both files
3. Use in component: `const t = useTranslations(); {t('your_key')}`

### Adding a Component

1. Create folder in `app/_components/`
2. Create `index.js`, `ComponentName.jsx`, `style.module.css`
3. Export from index: `export { default } from "./ComponentName";`

### Updating Theme Colors

1. Edit CSS variables in `app/globals.css`
2. Update both `.light-theme` and `.dark-theme` classes

## Deployment

- **Platform**: Vercel
- **Build Command**: `npm run build`
- **Environment Variables**: Set in Vercel dashboard
- **Domain**: Configure in Vercel project settings

## Development

```bash
npm install
npm run dev  # http://localhost:3000
```

## Notes for AI Agents

- All pages under `app/[locale]/` are client components (`"use client"`)
- Language routing handled by middleware (no manual localStorage)
- Animations use Framer Motion with reusable variants
- Images use Next.js `<Image>` component
- External links should have `target="_blank"`
- Maintain consistent spacing (40px, 64px, 80px)
- Keep minimal, clean aesthetic
- URLs are locale-aware: `/en/experience`, `/es/favorites`
