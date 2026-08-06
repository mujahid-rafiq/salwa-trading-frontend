import { useEffect, useState } from "react";

// Tailwind 'md' breakpoint is 768px. We'll consider mobile < md.
const MD_QUERY = "(max-width: 767px)";

export default function useResponsive() {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(MD_QUERY).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(MD_QUERY);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  return { isMobile };
}
