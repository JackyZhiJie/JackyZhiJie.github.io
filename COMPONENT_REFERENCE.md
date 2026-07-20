# Component Hierarchy & File Reference

## Directory Tree

```
portfolio-website/
├── .env.example              # Environment variables template
├── .gitignore               # Git ignore rules
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project documentation
├── SETUP_GUIDE.md           # Detailed setup guide
├── tailwind.config.ts       # Tailwind CSS theme configuration
├── tsconfig.json            # TypeScript compiler config
├── tsconfig.node.json       # TypeScript config for Node files
├── vite.config.ts           # Vite build configuration
│
└── src/
    ├── App.tsx              # Main application component
    ├── main.tsx             # React entry point
    │
    ├── components/
    │   ├── Header.tsx       # Navigation & Theme Toggle
    │   ├── Footer.tsx       # Footer with social links
    │   ├── Toast.tsx        # Toast notification system
    │   ├── ProseModal.tsx   # Essay/prose modal reader
    │   ├── ProjectCard.tsx  # Individual project card
    │   │
    │   └── sections/
    │       ├── Hero.tsx     # Home section with simulator
    │       ├── WorkResearch.tsx    # Projects grid
    │       ├── CreativeLog.tsx     # Essays & photos
    │       └── About.tsx    # Bio, skills, timeline
    │
    ├── data/
    │   ├── projects.ts      # Project definitions
    │   └── prose.ts         # Essay/reflection content
    │
    ├── hooks/
    │   └── index.ts         # Custom React hooks
    │       ├── useTheme()
    │       ├── useToast()
    │       ├── useNavigation()
    │       └── useProjectFilter()
    │
    ├── types/
    │   └── index.ts         # TypeScript definitions
    │       ├── TabId
    │       ├── Project
    │       ├── ProseItem
    │       ├── TimelineEvent
    │       ├── Skill
    │       └── Toast
    │
    └── styles/
        └── globals.css      # Global styles & Tailwind imports
```

## Component Hierarchy

```
<App>
  {/* Ambient Background Effects */}
  <div className="ambient-glow" />
  
  <Header
    currentTab={string}
    isDarkMode={boolean}
    onNavigate={(tab) => void}
    onThemeToggle={() => void}
    mobileMenuOpen={boolean}
    onMobileMenuToggle={() => void}
  >
    {/* Logo/Monogram */}
    {/* Desktop Navigation */}
    {/* Action Bar (Theme, Contact, Mobile Menu) */}
    {/* Mobile Menu Drawer (conditional) */}
  </Header>

  <main className="flex-grow">
    {/* Conditional Sections Based on currentTab */}
    
    {currentTab === 'home' && (
      <HeroSection
        onNavigateToTab={(tab) => void}
        onShowToast={(title, msg, icon) => void}
      >
        {/* Hero Grid with Profile Image & Bio */}
        {/* Three Gateway Cards */}
        {/* Environmental Facade Simulator */}
      </HeroSection>
    )}

    {currentTab === 'work-research' && (
      <WorkResearchSection
        onShowToast={(title, msg, icon) => void}
      >
        {/* Filter Navigation */}
        {/* Project Grid */}
        {projects.map(project => (
          <ProjectCard project={project} />
        ))}
      </WorkResearchSection>
    )}

    {currentTab === 'creative-log' && (
      <CreativeLogSection
        onOpenProse={(key) => void}
      >
        {/* Prose List */}
        {/* Photo Gallery Grid */}
      </CreativeLogSection>
    )}

    {currentTab === 'about' && (
      <AboutSection
        onShowToast={(title, msg, icon) => void}
      >
        {/* Bio Text */}
        {/* Skills Categories */}
        {/* Timeline */}
        {/* Awards */}
        {/* CV Download Button */}
      </AboutSection>
    )}
  </main>

  <Footer>
    {/* Copyright */}
    {/* Social Links */}
  </Footer>

  <ToastContainer
    toasts={Toast[]}
    onRemove={(id) => void}
  >
    {toasts.map(toast => (
      <Toast toast={toast} onClose={onRemove} />
    ))}
  </ToastContainer>

  {selectedProse && (
    <ProseModal
      prose={ProseItem | null}
      isOpen={boolean}
      onClose={() => void}
    />
  )}
</App>
```

## Data Structures

### Project Object
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  category: string[]; // 'transit' | 'hci' | 'multimedia'
  icon: string;       // lucide icon name
  tags: string[];
  metadata?: {
    label: string;
    value: string;
  };
}
```

### ProseItem Object
```typescript
interface ProseItem {
  key: string;
  title: string;
  category: string;
  date: string;
  text: string;
}
```

### Toast Object
```typescript
interface Toast {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  icon: string;
}
```

## Key Features by Component

### Header.tsx
- Sticky navigation bar
- Logo/monogram with hover effects
- Desktop nav links with active state
- Mobile menu drawer (responsive)
- Theme toggle button
- Contact email button
- Lucide icons

### Hero.tsx (Home Section)
- Profile image frame with layered borders
- Main headline with serif typography
- Bio paragraph with styled mentions
- Social action buttons
- Three gateway cards with icons
- Environmental facade simulator with sliders

### WorkResearch.tsx
- Section title & description
- Filter buttons (Show All, Transit, HCI, Multimedia)
- Responsive project grid (1 col → 2 col → 3 col)
- Project card components

### ProjectCard.tsx
- Project icon (dynamic Lucide icon)
- Title & description
- Category label
- Optional metadata display
- Tech tag badges
- Hover animations

### CreativeLog.tsx
- Prose list with categories and dates
- Clickable articles (opens modal)
- Photography gallery (2 column grid)
- Hover overlays on photo cards

### About.tsx
- Bio & introduction text
- Three skill categories with badges
- Timeline with colored bullet points
- Awards section with icons
- CV download button

### Toast.tsx
- Auto-dismissing notifications
- Icon support (dynamic)
- Four types: info, success, warning, error
- Close button
- Stacking in bottom-right

### ProseModal.tsx
- Full-screen modal with backdrop
- Header with category, title, date
- Scrollable prose content
- Close button
- Footer with attribution

## Responsive Behavior

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Header | Stacked | Stacked | Flex |
| Hero Grid | 1 col | 2 col | 1:2 ratio |
| Gateway Cards | 1 col | 3 col | 3 col |
| Project Grid | 1 col | 2 col | 3 col |
| Photo Gallery | 2 col | 2 col | 2 col |
| About Grid | 1 col | 1 col | 2 col (7:5) |
| Footer | Stacked | Flex | Flex |

## Color System

### Dark Mode (Default)
- Background: `#111414` (bioDark-bg)
- Cards: `#181D1D` (bioDark-card)
- Borders: `#283030` (bioDark-border)
- Muted Text: `#899797` (bioDark-textMuted)
- Sage Accent: `#86A396` (bioDark-accentSage)
- Terra Accent: `#C27B63` (bioDark-accentTerra)
- Moss: `#26332E` (bioDark-accentMoss)

### Light Mode
- Background: `#FBF9F6` (bioLight-bg)
- Cards: `#F1EDE7` (bioLight-card)
- Borders: `#E1D9CD` (bioLight-border)
- Muted Text: `#67706B` (bioLight-textMuted)
- Sage Accent: `#4A7261` (bioLight-accentSage)
- Terra Accent: `#AB583F` (bioLight-accentTerra)

## State Management

### useTheme Hook
- `isDarkMode`: boolean
- `toggleTheme()`: toggles dark/light mode

### useToast Hook
- `toasts`: Toast[]
- `showToast(title, message, icon, type)`: creates toast
- `removeToast(id)`: removes specific toast

### useNavigation Hook
- `currentTab`: TabId
- `navigateTo(tab)`: changes current section

### useProjectFilter Hook
- `selectedCategory`: string
- `filterProjects(category)`: filters project display

## Animation Classes

- `.animate-fadeIn` - Fade in animation
- `.animate-pulse-glow` - Pulsing glow effect
- `.animate-pulse` - Breathing pulse (built-in)
- `.transition-all` - Smooth transitions
- `.hover:scale-105` - Scale on hover
- `.group-hover:` - Parent hover effects

## Responsive Utilities

- `hidden md:flex` - Hidden on mobile, visible on tablet+
- `flex-col md:flex-row` - Stack on mobile, row on tablet+
- `px-4 sm:px-6 lg:px-8` - Responsive padding
- `text-sm sm:text-base lg:text-lg` - Responsive text size
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - Responsive grid

---

This structure ensures scalability, maintainability, and easy customization!
