import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import React from "react";
import Profile from "./pages/Profile";
import Education from "./pages/Education";
import WorkExp from "./pages/WorkExp";
import Skills from "./pages/Skills";
import OtherExp from "./pages/OtherExp";
import { AnimatePresence } from "framer-motion";

const App: React.FC = () => {
    const location = useLocation();
	return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/resume/profile" element={<Profile />} />
                <Route path="/resume/education" element={<Education />} />
                <Route path="/resume/work-exp" element={<WorkExp />} />
                <Route path="/resume/skills" element={<Skills />} />
                <Route path="/resume/other-exp" element={<OtherExp />} />
            </Routes>
        </AnimatePresence>
	);
};

export default App;
