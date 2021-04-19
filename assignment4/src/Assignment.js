import React, { Component } from 'react';
// import axios from 'axios';

class Assignment extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            records: [],
            isLoaded: false,
        }
    }
    

    componentDidMount = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()).then(resp =>{
            this.setState({
                isLoaded: true,
                records: resp
            })
        })
    }
    
    deleteUser = (id) =>
    {
        fetch('https://jsonplaceholder.typicode.com/users/'+id, {
            method: 'DELETE',
        }).then(result => {
            result.json().then(resp => {
                alert("deleted")
            })
        })
    }
    render(){
        var {isLoaded, records} = this.state;
        if(!isLoaded)
        {
            return <div>Loading</div>;
        }
        else
        {
            return(
                <div>
                    <h1>Users Data</h1>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map(record =>{
                                return(
                                    <tr key={record.id}>
                                        <td>{record.name}</td>
                                        <td>{record.email}</td>
                                        <td>
                                            <button onClick={this.deleteUser}>Delete</button>
                                        </td>
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
export default Assignment;