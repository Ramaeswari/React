import React, { Component } from 'react';
import Display from './Display';
class Employee extends Component
{
    state = {
        EmployeeData: [
            {
                empId: 501,
                empName: "eswari",
                age: 23,
                city: "hyderabad",
                designation: "Developer"
            },
            {
                empId: 502,
                empName: "sasi",
                age: 22,
                city: "Rajahmundry",
                designation: "Engineer"
            },
            {
                empId: 503,
                empName: "satya",
                age: 20,
                city: "hyderabad",
                designation: "Software Engineer"
            }
        ]
    };

    render(){
        return(
            <div>
                <Display EmployeeData = {this.state.EmployeeData}></Display>
            </div>
        )
    }
}
export default Employee;

// <Display empId = {this.state.empId} empName = {this.state.empName} age = {this.state.age} city = {this.state.city} designation = {this.state.designation} />
