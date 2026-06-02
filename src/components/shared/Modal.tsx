import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ModalProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  // Options for Gallery Lightbox
  onPrev?: () => void;
  onNext?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  id,
  isOpen,
  onClose,
  children,
  title,
  onPrev,
  onNext,
}) => {
  // Handle escape key and arrow buttons
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent scroll on body
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div id={id} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md">
      {/* Lightbox background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl overflow-hidden bg-transparent flex flex-col items-center">
        {/* Header container */}
        <div className="w-full flex items-center justify-between pb-3 text-white mb-2 max-w-4xl">
          <h3 className="font-bold text-lg md:text-xl tracking-wide">{title || ""}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal content body */}
        <div className="relative flex items-center justify-center w-full max-h-[80vh]">
          {/* Navigation left */}
          {onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-2 md:-left-16 p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 transition-all text-white focus:outline-none z-25 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Children container (holds image or other inputs) */}
          <div className="max-w-full max-h-[75vh] flex justify-center items-center select-none shadow-2xl rounded-2xl overflow-hidden">
            {children}
          </div>

          {/* Navigation right */}
          {onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-2 md:-right-16 p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 transition-all text-white focus:outline-none z-25 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
