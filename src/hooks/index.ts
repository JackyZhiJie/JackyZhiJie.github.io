import { useState, useCallback } from 'react';
import type { Toast, ToastType, TabId } from '@types';


export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  }, []);

  return { isDarkMode, toggleTheme };
};

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (title: string, message: string, icon: string, type: ToastType = 'info') => {
      const id = Math.random().toString(36).substr(2, 9);
      const toast: Toast = { id, title, message, type, icon };

      setToasts((prev) => [...prev, toast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, showToast, removeToast };
};

export const useNavigation = () => {
  const [currentTab, setCurrentTab] = useState<TabId>('home');

  const navigateTo = useCallback((tab: TabId) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { currentTab, navigateTo };
};

export const useProjectFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterProjects = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  return { selectedCategory, filterProjects };
};
