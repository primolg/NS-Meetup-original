import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampuses } from "../../store/Campuses";
import { Link } from "react-router-dom";

const AllCampuses = () => {
    const campuses = useSelector(state => state.campuses);
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(fetchCampuses())
    }, [])
    return (
        <div>
            <h1>Campuses:</h1>
            <ul>
                {campuses.map((campus) => {
                    const campusLink = `/campuses/${campus.id}`
                    return (
                        <li key={campus.id}>
                        <Link to={campusLink}>{campus.name}</Link>
                        <br></br>
                        <img width="100px" src={campus.imageUrl}/>
                        </li>
                    );
                })}
            </ul>
            <Link to="/campuses/create">Create New Campus</Link>
        </div>
    )
};

export default AllCampuses;

