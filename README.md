# Jacky Chen - Professional Portfolio Website

https://jackyzhijie.github.io/

A modern, fully responsive TypeScript/React portfolio website with biophilic design elements.

## Features

✨ **Responsive Design** - Mobile-first approach with Tailwind CSS
🌓 **Dark/Light Theme** - Toggle between biophilic dark and ceramic light themes
⚡ **Fast & Modern** - Built with Vite + React + TypeScript
🎨 **Beautiful Components** - Separated, reusable React components
🔥 **Interactive Elements** - Modal systems, toast notifications, filtering
📱 **Mobile Optimized** - Works seamlessly on all screen sizes

## Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Navigation header with theme toggle
│   ├── Footer.tsx              # Site footer with social links
│   ├── Toast.tsx               # Toast notification system
│   ├── ProseModal.tsx          # Article/essay modal
│   ├── ProjectCard.tsx         # Individual project card
│   └── sections/
│       ├── Hero.tsx            # Home section with environmental simulator
│       ├── WorkResearch.tsx    # Projects grid with filtering
│       ├── CreativeLog.tsx     # Essays and photography gallery
│       └── About.tsx           # Biography, skills, timeline & awards
├── data/
│   ├── projects.ts            # Projects data
│   └── prose.ts               # Essays/reflections data
├── hooks/
│   └── index.ts               # Custom React hooks
├── styles/
│   └── globals.css            # Global styles and Tailwind imports
├── types/
│   └── index.ts               # TypeScript type definitions
├── App.tsx                    # Main App component
└── main.tsx                   # React entry point

public/                        # Static assets
index.html                     # HTML entry point
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The compiled output will be in the `dist/` folder.

## Customization

### Add New Projects

Edit `src/data/projects.ts` and add a new project object:

```typescript
{
  id: '7',
  title: 'Your Project Title',
  description: 'Project description...',
  category: ['category1', 'category2'],
  icon: 'lucide-icon-name',
  tags: ['Tech1', 'Tech2'],
}
```

### Add New Essays

Edit `src/data/prose.ts` and add a new prose item:

```typescript
yourKey: {
  key: 'yourKey',
  title: 'Essay Title',
  category: 'Category',
  date: 'Month Day, Year',
  text: 'Your essay content...',
}
```

### Customize Colors

Edit `tailwind.config.ts` to modify the biophilic color palette:

```typescript
colors: {
  bioDark: {
    bg: '#111414',
    // ... other colors
  }
}
```

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive prefixes (sm:, md:, lg:) for proper scaling.

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool & dev server
- **Lucide React** - Icon library

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

© 2026 Jacky Xie Chen. All rights reserved.

## Contact

- Email: jackyxiechenzhijie@gmail.com
- LinkedIn: [jackyxczj](https://www.linkedin.com/in/jackyxczj)
- GitHub: [JackyZhiJie](https://github.com/JackyZhiJie)
