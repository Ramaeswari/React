// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Instructors = () => {
//     const [post, setPost] = useState([]);
//     useEffect(() => {
//         fetchData();
//     }, []);
//     const fetchData = () =>{
//         axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001').then(res =>{
//             console.log(res.data)
//             setPost(res.data)
//         }).catch(err =>{
//             console.log(err)
//         })
//     }
//     return(
//         <div>
//           <h4>Instructors</h4>
//           <ul>
//             {post.map(resp =>{
//                 <li>{resp.email}</li>
//             })}
//           </ul>
          
//         </div>
//     )
// }
import axios from 'axios';
import React, { Component } from 'react';

class Instructors extends Component
{
    state = {
        instructorData : []
    }

    componentDidMount = () =>{
        axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001').then(res =>{
            
            this.setState({
                instructorData: res.data
            });
        })
    }
    render()
    {
        const instrustorsList = this.state.instructorData.map(resp =>{
            return(
                <div>
                <img src = {resp.imageUrl} alt="instructor_img" />
                <p>Name: {resp.firstName + resp.lastName}</p>
                <p>Email: {resp.email}</p>
                </div>
                )
        })
        return(
            <div>
                <h4>Instructors List</h4>
                {instrustorsList}
            </div>
        )
        
    }
}

export default Instructors;