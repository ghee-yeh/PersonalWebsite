# Personal Website

Minimalist personal website built with Next.js 16, featuring smooth animations, internationalization, and responsive design.

## Features

- 🌍 **Internationalization** - URL-based routing (`/en`, `/es`) with next-intl
- ✨ **Smooth Animations** - Framer Motion with reusable variants
- 📱 **Fully Responsive** - Mobile-first design with fluid typography
- 🎵 **Spotify Integration** - Shows currently playing or recently played tracks
- 🎨 **Clean Design** - Minimal aesthetic with CSS variables for theming
- 🤖 **AI-Friendly** - Documented in `agents.md` for easy modifications

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **React:** 19.2
- **Styling:** CSS Modules + Global CSS
- **Animations:** Framer Motion
- **i18n:** next-intl
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` (redirects to `/en`)

## Environment Variables

Optional Spotify integration requires:

```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

See [this guide](https://medium.com/@stvehayes/working-with-spotifys-api-to-display-currently-playing-with-react-99544f8797d8) for setup.

## Project Structure

```
app/
├── [locale]/              # Locale-based pages (en, es)
│   ├── page.js           # Home
│   ├── experience/       # Work experience
│   └── favorites/        # Books, songs, podcasts
├── _components/          # Shared UI components
├── _utils/               # Utilities (animations, etc.)
└── api/                  # API routes (Spotify)
messages/                 # Translation files
i18n/                     # Internationalization config
```

## Adding Content

### New Page

1. Create `app/[locale]/your-page/page.js`
2. Add translations to `messages/en.json` and `messages/es.json`
3. Use `useTranslations()` hook for text

### New Translation

```json
// messages/en.json
{
  "your_key": "Your text"
}

// messages/es.json
{
  "your_key": "Tu texto"
}
```

```jsx
// In component
import { useTranslations } from 'next-intl';

const t = useTranslations();
<div>{t('your_key')}</div>
```

## AI Agent Documentation

See `agents.md` for detailed documentation on codebase structure, patterns, and common tasks.

## License

Feel free to use this as inspiration for your own site. Credit appreciated but not required.

## Inspiration

- [leerob.com](https://leerob.com/)
- [pranathiperi.com](https://pranathiperi.com/)
