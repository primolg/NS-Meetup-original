import React from "react";
import { Routes, Route } from "react-router-dom";
import AllCampuses from "./components/allCampuses";
import AllStudents from "./components/allStudents"; 
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

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
                    <Route path="/students" element={<AllStudents />} />
                </Routes>
            </div>
    )
}

export default App;