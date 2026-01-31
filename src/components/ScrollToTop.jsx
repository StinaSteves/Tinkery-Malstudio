import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // ❌ NIE beim Hash scrollen
    if (location.hash) return;

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}