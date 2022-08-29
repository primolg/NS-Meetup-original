import axios from "axios";
import React from "react";


const AllCampuses = () => {
    // const getCampuses = async() =>{
    //     const data = []
    //     const response = await axios.get('/api/campuses')
    //     const responseData = response.data
    //     responseData.map(item => data.push(item))
    //     return data
    // }
    return (
        <div>
            <h1>Campuses:</h1>
            <ul>
                <li>campus1</li>
                <img width="100px" src="https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/new-dorm-aerial1.jpg?itok=AMZbUIkD" />
                <li>campus2</li>
                <img width="100px" src="https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/new-dorm-aerial1.jpg?itok=AMZbUIkD" />
                <li>campus3</li>
                <img width="100px" src="https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/new-dorm-aerial1.jpg?itok=AMZbUIkD" />
            </ul>
        </div>
    )
}

export default AllCampuses;

