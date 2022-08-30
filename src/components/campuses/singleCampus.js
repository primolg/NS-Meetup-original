import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampuses } from "../../store/Campuses";

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
                    return (
                        <li key={campus.id}>
                        <p>{campus.name}</p>
                        <p>{campus.description}</p>
                        <img width="100px" src={campus.imageUrl}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default AllCampuses;

