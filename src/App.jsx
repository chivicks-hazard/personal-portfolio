import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/Mainpage";
import PortfolioPage from "./pages/PortfolioPage";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <motion.div {...pageVariants}>
                <MainPage />
              </motion.div>
            }
          />
          <Route
            path="portfolio"
            element={
              <motion.div {...pageVariants}>
                <PortfolioPage />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>
);

export default App;
