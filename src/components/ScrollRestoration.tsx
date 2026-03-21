"use client";

import { useEffect } from "react";

/**
 * Handles precise scroll position restoration on page reload:
 * 1. Disables browser's native scroll restoration (which snaps to sections)
 * 2. Saves exact scrollY to sessionStorage before unload
 * 3. Restores it instantly on mount — pixel-perfect, no snap
 * 4. Enables smooth-scroll class only after restoration settles (anchor links work)
 */
export default function ScrollRestoration() {
  useEffect(() => {
    // Take over scroll restoration from the browser
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Restore saved position instantly (before any paint if possible)
    const saved = sessionStorage.getItem("scrollY");
    if (saved !== null) {
      const y = parseInt(saved, 10);
      // Use instant scroll — no smooth behavior interference
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
      sessionStorage.removeItem("scrollY");
    }

    // After position is restored, enable smooth scrolling for anchor links
    const tid = setTimeout(() => {
      document.documentElement.classList.add("js-smooth-scroll");
    }, 100);

    // Save exact position before page unloads
    const saveScroll = () => {
      sessionStorage.setItem("scrollY", String(window.scrollY));
    };
    window.addEventListener("beforeunload", saveScroll);

    return () => {
      clearTimeout(tid);
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, []);

  return null;
}
