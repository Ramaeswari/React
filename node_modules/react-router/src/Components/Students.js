import React, { Component } from 'react';
import axios from 'axios';

class Students extends Component
{
    state = {
        studentData : []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
          
          this.setState({
              studentData: res.data
          })
        })
    }
    render(){
        if(!this.state.studentData.length)
        {
            return <div>Loading</div>;
        }
        else
        {
            return(
                <div>
                    <h3>Students Data</h3>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.studentData.map(student =>{
                                return(
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    
            </div>
            );
        }
    }
}

export default Students;

// <div key={student.id}>
//                         <p>Name: {student.name}</p>
//                         <p>Email: {student.email}</p>
//                     </div>