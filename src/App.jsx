import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Mainpage from "./pages/Mainpage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Mainpage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
