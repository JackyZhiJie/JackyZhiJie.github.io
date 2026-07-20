import React from "react";
import { X } from "lucide-react";
import * as Icons from "lucide-react";
import type { Toast as ToastType } from "@types";

interface ToastProps {
  toast: ToastType;
  onClose: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  const iconComponents = Icons as unknown as Record<string, React.ComponentType<any>>;
  const IconComponent = iconComponents[toast.icon] || Icons.Info;

  const bgColor = {
    info: "bg-bioLight-accentSage/15 text-bioLight-accentSage dark:bg-bioDark-accentSage/10 dark:text-bioDark-accentSage",
    success: "bg-emerald-500/15 text-emerald-400",
    warning: "bg-amber-500/15 text-amber-400",
    error: "bg-red-500/15 text-red-400",
  }[toast.type];

  return (
    <div className="animate-fadeIn flex items-center gap-3 bg-bioLight-card dark:bg-bioDark-card border border-bioLight-border dark:border-bioDark-border/80 px-4 py-3 rounded-xl shadow-xl">
      <div className={`w-8 h-8 rounded-lg ${bgColor} flex items-center justify-center flex-shrink-0`}>
        <IconComponent className="w-4.5 h-4.5" />
      </div>
      <div className="flex-1">
        <span className="block text-xs font-bold text-gray-950 dark:text-white">{toast.title}</span>
        <span className="block text-[10px] text-bioLight-textMuted dark:text-bioDark-textMuted mt-0.5">{toast.message}</span>
      </div>
      <button onClick={() => onClose(toast.id)} className="p-1 rounded hover:bg-bioLight-border dark:hover:bg-bioDark-border/60 transition-colors flex-shrink-0">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

interface ToastContainerProps {
  toasts: ToastType[];
  onRemove: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-2 pointer-events-auto">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={onRemove} />
      ))}
    </div>
  );
};
