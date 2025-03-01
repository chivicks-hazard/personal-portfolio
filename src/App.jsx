import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="portfolio" element={<PortfolioPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
