import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className="fixed right-6 bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-black/20 transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
