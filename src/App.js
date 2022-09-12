import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import SinglePage from "./components/campuses/SinglePage";
import HomePage from "./components/campuses/Home";

function App(){
    return(
            <div>
                <nav className="navBar">
                    <Link className="nav-links" to="/singleitem">single page</Link>
                    <Link className="nav-links" to="/">home</Link>
                </nav>
                <Routes>
                    <Route index path="/" element={<HomePage />} />
                    <Route path="/singleitem" element={<SinglePage />} />
                </Routes>
            </div>
    );
};

export default App;