import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCampuses } from "../../store/Campuses";

const SingleCampus = () => {

    const {id} = useParams();
    const campus = useSelector(state => state.campuses);
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(fetchCampuses(id))
    }, [])
    console.log(campus)

    return (
        <div>
            {campus.map((campus) => {
                    return (
                        <div key={campus.id}>
                        <p>{campus.name}, {campus.address}</p>
                        <p>{campus.description}</p>
                        <img width="100px" src={campus.imageUrl}/>
                        </div>
                    );
                })}
        </div>
    )
}

export default SingleCampus;

