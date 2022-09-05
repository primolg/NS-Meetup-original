import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampuses } from "../../store/Campuses";
import { Link } from "react-router-dom";
import CreateCampus from "./createCampus";
import { deleteCampus } from "../../store/Campuses";

const AllCampuses = () => {
    const campuses = useSelector(state => state.campuses);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchCampuses())
    }, []);


    return (
        <div className="outer-div">
            <div className="left-div">
                <h1 className="list-title">Campuses</h1>
                    {campuses.map((campus) => {
                        const campusLink = `/campuses/${campus.id}`

                        const handleDelete = (evnt) => {
                            const campusId = campus.id
                            evnt.preventDefault();
                            dispatch(deleteCampus({ campusId }))
                        }
                        
                        return (
                            <div className="list-item" key={campus.id}>
                                <div className="name-img">
                                    <Link className='text-link' to={campusLink}>{campus.name}</Link>
                                    <br></br>
                                    <img className="profile-images" src={campus.imageUrl}/>
                                </div>
                                <div className="delete-button">
                                    <button onClick={handleDelete}>x</button>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className="right-div">
                <h4>Add Campus</h4>
                <CreateCampus />
            </div>
        </div>
    
    );
};

export default AllCampuses;

