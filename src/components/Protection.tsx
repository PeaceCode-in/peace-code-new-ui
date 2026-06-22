"use client";

import { useEffect } from "react";

export default function Protection() {
  useEffect(() => {
    // Prevent right click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Prevent dragging images
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    // Prevent common inspection/save shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+S (Save), Ctrl+P (Print), Ctrl+C (Copy)
      if (e.ctrlKey && (e.key === "s" || e.key === "p" || e.key === "c")) {
        e.preventDefault();
      }
      
      // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U (Inspect/Source)
      if (
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) ||
        (e.ctrlKey && (e.key === "U" || e.key === "u")) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    // Prevent copy event completely
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return null;
}
