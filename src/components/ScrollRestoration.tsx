"use client";

import { useEffect } from "react";

/**
 * Handles precise scroll position restoration on page reload:
 * 1. Disables browser's native scroll restoration (which snaps to sections)
 * 2. Saves exact scrollY to sessionStorage keyed by pathname before unload
 * 3. Restores it instantly on mount — pixel-perfect, no snap
 * 4. Enables smooth-scroll class only after restoration settles (anchor links work)
 * 5. On navigation to a new page the key changes → no cross-page bleed
 */
export default function ScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const key = `scrollY_${window.location.pathname}`;

    const dispatchRestored = () => {
      window.dispatchEvent(new Event("scroll-restored"));
    };

    // Restore saved position instantly, then reveal + signal Hero
    const saved = sessionStorage.getItem(key);
    if (saved !== null) {
      const y = parseInt(saved, 10);
      window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
      sessionStorage.removeItem(key);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.style.transition = "opacity 0.15s ease";
          document.documentElement.style.opacity = "1";
          document.documentElement.style.pointerEvents = "";
          setTimeout(() => {
            document.documentElement.style.transition = "";
            dispatchRestored();
          }, 160);
        });
      });
    } else {
      dispatchRestored();
    }

    const tid = setTimeout(() => {
      document.documentElement.classList.add("js-smooth-scroll");
    }, 300);

    // Save exact position before page unloads — scoped to current pathname
    const saveScroll = () => {
      sessionStorage.setItem(key, String(window.scrollY));
    };
    window.addEventListener("beforeunload", saveScroll);

    return () => {
      clearTimeout(tid);
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, []);

  return null;
}
