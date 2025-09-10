// ScrollToTop.tsx
import { useEffect } from "react";
import pkg from "react-router-dom";

const ScrollToTop = () => {
  const { useLocation } = pkg;

  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
