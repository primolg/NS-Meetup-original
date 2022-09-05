import React from "react";
import { Routes, Route } from "react-router-dom";
import AllCampuses from "./components/campuses/allCampuses";
import AllStudents from "./components/students/allStudents";
import { Link } from "react-router-dom";
import SingleCampus from "./components/campuses/singleCampus";
import SingleStudent from "./components/students/singleStudent";

function App(){
    return(
            <div>
                <nav className="navBar">
                    <Link className="nav-links" to="/campuses">campuses</Link>
                    <br></br>
                    <Link className="nav-links" to="/students">students</Link>
                </nav>
                <Routes>
                    <Route exact path="/campuses" element={<AllCampuses />} />
                    <Route exact path="/campuses/:id" element={<SingleCampus />} />
                    <Route exact path="/students" element={<AllStudents />} />
                    <Route exact path="/students/:id" element={<SingleStudent />} />
                </Routes>
                <div className="home-text">
                    <h1>Click on either item in nav bar.</h1>
                </div>
            </div>
    );
};

export default App;