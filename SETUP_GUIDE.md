# TypeScript/React Portfolio Website - Setup & Development Guide

## 🎯 Project Overview

Your portfolio website has been successfully converted to a modern TypeScript/React project with:

- ✅ **Full TypeScript Support** - Type-safe codebase with strict mode enabled
- ✅ **Separated Components** - Each section is its own `.tsx` component
- ✅ **Fully Responsive** - Mobile-first design with Tailwind CSS breakpoints
- ✅ **Component Architecture**:
  - Header (Navigation + Theme Toggle)
  - Hero Section (Home with environmental simulator)
  - Work & Research (Projects grid with filtering)
  - Creative Log (Essays and photography)
  - About (Biography, skills, timeline)
  - Footer (Social links)
  - Toast Notifications
  - Prose Modal (Essay reader)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
This will open your browser at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```
Output will be in the `dist/` folder ready for deployment

## 📁 Project Structure Explained

### `src/components/` - Reusable React Components
- **Header.tsx** - Navigation with mobile menu and theme toggle
- **Footer.tsx** - Footer with social links
- **Toast.tsx** - Notification system
- **ProseModal.tsx** - Modal for displaying essays
- **ProjectCard.tsx** - Individual project display card
- **sections/** - Page sections:
  - `Hero.tsx` - Home page with environmental facade simulator
  - `WorkResearch.tsx` - Projects grid with category filtering
  - `CreativeLog.tsx` - Articles and photography gallery
  - `About.tsx` - Bio, skills, timeline, awards, CV download

### `src/data/` - Data & Content
- **projects.ts** - Project definitions (add/edit projects here)
- **prose.ts** - Essays and reflections data

### `src/hooks/` - Custom React Hooks
- **useTheme()** - Dark/light mode management
- **useToast()** - Toast notification system
- **useNavigation()** - Page navigation state
- **useProjectFilter()** - Project filtering logic

### `src/types/` - TypeScript Definitions
All type interfaces for the application (Project, ProseItem, Toast, etc.)

### `src/styles/` - Styling
- **globals.css** - Global styles, Tailwind imports, custom animations

### Root Configuration Files
- **vite.config.ts** - Vite build configuration
- **tailwind.config.ts** - Tailwind CSS color scheme & extensions
- **tsconfig.json** - TypeScript compiler options
- **postcss.config.js** - PostCSS with Tailwind
- **package.json** - Dependencies and scripts

## 🎨 Responsive Design

The website uses Tailwind CSS breakpoints:

```
Mobile:    < 640px   (default/sm)
Tablet:    641-1024px (md breakpoint)
Desktop:   > 1024px  (lg breakpoint)
```

Example usage:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

## 🔄 Component Communication Flow

```
App.tsx (Main component)
├── Header (Theme, Navigation, Mobile Menu)
├── Main Content
│   ├── Hero Section (Home)
│   ├── Work & Research Section
│   ├── Creative Log Section
│   └── About Section
├── Footer
├── ToastContainer (Notifications)
└── ProseModal (Essay Reader)
```

## 🎯 How to Customize

### Add a New Project

1. Edit `src/data/projects.ts`:
```typescript
{
  id: '7',
  title: 'New Project Name',
  description: 'What this project does...',
  category: ['transit', 'hci'], // Choose from: transit, hci, multimedia
  icon: 'code2', // Lucide icon name
  tags: ['React', 'TypeScript', 'Tailwind'],
  metadata: {
    label: 'Company Name',
    value: 'Some metric or info'
  }
}
```

2. The project will automatically appear in the Work & Research section with proper filtering

### Add a New Essay/Reflection

1. Edit `src/data/prose.ts`:
```typescript
yourEssayKey: {
  key: 'yourEssayKey',
  title: 'Essay Title',
  category: 'Category Name',
  date: 'March 15, 2026',
  text: `Your essay content here...`
}
```

2. The essay will appear in Creative Log with a clickable modal reader

### Change Colors

Edit `tailwind.config.ts` to customize the biophilic color palette:

```typescript
bioDark: {
  bg: '#111414',      // Background
  card: '#181D1D',    // Card backgrounds
  border: '#283030',  // Borders
  textMuted: '#899797', // Secondary text
  accentSage: '#86A396', // Green accent
  accentTerra: '#C27B63', // Terra/Orange accent
  accentMoss: '#26332E'   // Dark green
}
```

## 🌓 Theme System

The dark/light theme is managed by:
1. `useTheme()` hook in `src/hooks/index.ts`
2. Stores preference in localStorage
3. Applies 'dark' class to `<html>` element
4. Tailwind's `dark:` prefix enables dark mode styles

## 🔔 Toast Notifications

Display notifications anywhere in your app:

```typescript
const { showToast } = useToast();

showToast(
  'Title',
  'Message',
  'icon-name', // lucide icon
  'info' // type: 'info', 'success', 'warning', 'error'
);
```

## 📱 Mobile Menu

The Header component includes a mobile menu that:
- Only shows on screens < 768px (md breakpoint)
- Toggles with hamburger icon
- Closes automatically on navigation

## ⚡ Performance Tips

1. **Images** - Consider adding image optimization
2. **Code Splitting** - Sections load with main bundle (consider lazy loading if needed)
3. **CSS** - Tailwind purges unused styles in production builds
4. **Icons** - Using Lucide React (tree-shakeable icons)

## 🔗 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
Update `vite.config.ts` with your repo name, then:
```bash
npm run build
```

## 📚 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint (if configured)
```

## 🛠️ Dependencies Included

- **react** - UI library
- **react-dom** - React DOM rendering
- **lucide-react** - Icon library
- **tailwindcss** - Utility CSS framework
- **vite** - Modern build tool
- **typescript** - Type safety

## 🎓 Learn More

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev/)

## ✨ Next Steps

1. Run `npm install` to install all dependencies
2. Run `npm run dev` to start the development server
3. Make changes to components and see live updates
4. Customize colors, projects, and content
5. Deploy using your preferred hosting platform

## 📞 Support

For questions or issues, refer to the documentation links above or check the component files for inline comments.

---

**Happy coding! 🚀**
