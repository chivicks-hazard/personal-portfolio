import React from "react";

export const metadata = {
  title: "Portfolio",
  openGraph: {
    title: "Victor Chigbo | Portfolio",
    description: "Chivicks Hazard's Portfolio",
    type: "website",
  },
  keywords: [
    "Victor",
    "Chigbo",
    "chivicks_hazard",
    "Chivicks",
    "Hazard",
    "Victor Chigbo",
    "Chivicks Hazard",
    "portfolio",
    "skills",
    "projects",
  ],
};

const PortfolioLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default PortfolioLayout;
