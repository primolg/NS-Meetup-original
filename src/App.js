import React from "react";
import { Routes, Route } from "react-router-dom";
import AllCampuses from "./components/campuses/allCampuses";
import AllStudents from "./components/students/allStudents";
import { Link } from "react-router-dom";
import SingleCampus from "./components/campuses/singleCampus";
import SingleStudent from "./components/students/singleStudent";
import CreateCampus from "./components/campuses/createCampus";

function App(){
    return(
            <div>
                <nav className="navBar">
                    <Link to="/campuses">campuses</Link>
                    <br></br>
                    <Link to="/students">students</Link>
                </nav>
                <Routes>
                    <Route exact path="/campuses" element={<AllCampuses />} />
                    <Route exact path="/campuses/:id" element={<SingleCampus />} />
                    <Route exact path="/students" element={<AllStudents />} />
                    <Route exact path="/students/:id" element={<SingleStudent />} />
                </Routes>
            </div>
    )
}

export default App;