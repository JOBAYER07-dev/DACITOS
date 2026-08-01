'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';

export type ToastState = { type: 'success' | 'error'; message: string } | null;

export default function Toast({
  toast,
  onClose,
}: {
  toast: ToastState;
  onClose: () => void;
}) {
  return (
    <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-[70] w-[calc(100%-2rem)] max-w-sm">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-2xl px-4 py-3.5 flex items-start gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            )}
            <p className="text-sm text-text-primary flex-1 leading-snug">
              {toast.message}
            </p>
            <button
              onClick={onClose}
              aria-label="Dismiss notification"
              className="text-text-muted hover:text-text-primary transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
