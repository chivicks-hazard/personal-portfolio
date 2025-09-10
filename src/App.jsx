import pkg from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/Mainpage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop";
import CommunitiesPage from "./pages/CommunitiesPage";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const AnimatedRoutes = () => {
  const { Routes, Route, useLocation } = pkg;

  const location = useLocation();
  // Wrap each page with a motion.div to animate independently
  const renderMotion = (Component, key) => {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Component />
      </motion.div>
    );
  };

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainLayout />}>
        <Route index element={renderMotion(MainPage, "main")} />
        <Route
          path="/portfolio"
          element={renderMotion(PortfolioPage, "portfolio")}
        />
        <Route path="/about" element={renderMotion(AboutPage, "about")} />
        <Route
          path="/communities"
          element={renderMotion(CommunitiesPage, "communities")}
        />
      </Route>
    </Routes>
  );
};

const App = () => {
  const { BrowserRouter } = pkg;

  return <AnimatedRoutes />;
};

export default App;
