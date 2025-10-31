import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= breakpoint || navigator.maxTouchPoints > 0 || "ontouchstart" in window;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () =>
      setIsMobile(
        window.innerWidth <= breakpoint || navigator.maxTouchPoints > 0 || "ontouchstart" in window
      );

    update();
    // add listeners
    if (mql.addEventListener) mql.addEventListener("change", update);
    else mql.addListener(update);
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", update);
      else mql.removeListener(update);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, [breakpoint]);

  return isMobile;
}
