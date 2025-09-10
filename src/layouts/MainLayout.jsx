import pkg from "react-router-dom";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import NavBar from "../components/navbar";

const MainLayout = () => {
  const { Outlet } = pkg;

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default MainLayout;
