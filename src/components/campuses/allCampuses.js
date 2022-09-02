import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampuses } from "../../store/Campuses";
import { Link, useNavigate } from "react-router-dom";
import CreateCampus from "./createCampus";
import { deleteCampus } from "../../store/Campuses";

const AllCampuses = () => {
    const campuses = useSelector(state => state.campuses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=> {
        dispatch(fetchCampuses())
    }, [])


    return (
        <div>
            <h1>Campuses:</h1>
            <ul>
                {campuses.map((campus) => {
                    const campusLink = `/campuses/${campus.id}`

                    const handleDelete = (evnt) => {
                        const campusId = campus.id
                        evnt.preventDefault();
                        dispatch(deleteCampus({ campusId }))
                    }
                    
                    return (
                        <li key={campus.id}>
                        <Link to={campusLink}>{campus.name}</Link>
                        <br></br>
                        <img width="100px" src={campus.imageUrl}/>
                        <button onClick={handleDelete}>x</button>
                        </li>
                    );
                })}
            </ul>
            <div className="creatorDiv">
                <h4>Create New Campus:</h4>
                <CreateCampus />
            </div>
        </div>
    
    )
};

export default AllCampuses;

