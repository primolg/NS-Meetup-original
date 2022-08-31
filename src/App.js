import React from "react";
import { Routes, Route } from "react-router-dom";
import AllCampuses from "./components/campuses/allCampuses";
import AllStudents from "./components/students/allStudents"; 
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SingleCampus from "./components/campuses/singleCampus";
import SingleStudent from "./components/students/singleStudent";


function App(){
    return(
            <div>
                <nav>
                    <Link to="/campuses">campuses</Link>
                    <br></br>
                    <Link to="/students">students</Link>
                </nav>
                <Routes>
                    <Route path="/campuses" element={<AllCampuses />} />
                    <Route path="/campuses/:id" element={<SingleCampus />} />
                    <Route path="/students" element={<AllStudents />} />
                    <Route path="/students/:id" element={<SingleStudent />} />
                </Routes>
            </div>
    )
}

export default App;