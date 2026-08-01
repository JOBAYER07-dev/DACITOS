'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    window.__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    // If the page loaded with a #hash in the URL (e.g. from /#services),
    // scroll to that section once everything has settled.
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) lenis.scrollTo(el, { offset: -90 });
      }, 400);
    }

    window.addEventListener('load', () => lenis.resize());

    return () => {
      resizeObserver.disconnect();
      window.__lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return null;
}
