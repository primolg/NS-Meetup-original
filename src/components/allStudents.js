import axios from "axios";
import React from "react";


const AllStudents = () => {
    // const getCampuses = async() =>{
    //     const data = []
    //     const response = await axios.get('/api/campuses')
    //     const responseData = response.data
    //     responseData.map(item => data.push(item))
    //     return data
    // }
    return (
        <div>
            <h1>Students:</h1>
            <ul>
                <li>student1</li>
                <img width="100px" src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg" />
                <li>student2</li>
                <img width="100px" src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg" />
                <li>student3</li>
                <img width="100px" src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg" />
            </ul>
        </div>
    )
}

export default AllStudents;

