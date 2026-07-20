export type TabId = 'home' | 'work-research' | 'creative-log' | 'about';

export interface Project {
  id: string;
  name: string;
  descript: string;
  category: string[];
  icon: string;
  tags: string[];
  link?: string;
  links?: { label: string; url: string }[];
  image?: string;
  images?: string[];
  metadata?: {
    label: string;
    value: string;
  };
  hasLiveDemo?: boolean;
  isAwarded?: boolean;
  awardText?: string;
  bullets?: {
    text: string;
    link?: string;
    iconType?: "link" | "video" | "trophy" | "award" | "shield" | "cpu";
  }[];
  summary?: string;
  imageCaption?: string;
  imageCaptions?: string[];
}

export interface ProseItem {
  key: string;
  title: string;
  category: string;
  date: string;
  /** Plain-text excerpt / English prose body */
  text: string;
  /** HTML string for rich Chinese prose (use dangerouslySetInnerHTML) */
  htmlContent?: string;
  /** Google Drive file ID for the associated photograph */
  driveImageId?: string;
  /** Google Drive file IDs for the associated photographs */
  driveImageIds?: string[];
  /** When true, renders title & body with the Chinese serif font */
  isChinese?: boolean;
}

export interface TimelineEvent {
  label: string;
  title: string;
  organization: string;
  description: string;
  type: 'current' | 'past';
}

export interface Skill {
  category: string;
  accentColor: 'sage' | 'terra';
  items: string[];
}

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface Toast {
  id: string;
  title: string;
  message: string;
  type: ToastType;
  icon: string;
}
