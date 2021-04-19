import React, { Component } from 'react';

class Table extends Component
{
    render(){
        return(
            <table border="1">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Designation</th>
                </tr>
                </thead>
                <tbody>
                <Columns />
                </tbody>
            </table>
        )
    }
}

class Columns extends Component
{
    render()
    {
        return(
            <React.Fragment>
                <tr>
                    <td>Eswari</td>
                    <td>23</td>
                    <td>Developer</td>
                </tr>
                <tr>
                    <td>Sasi</td>
                    <td>22</td>
                    <td>Engineer</td>
                </tr>
                <tr>
                    <td>Satya</td>
                    <td>22</td>
                    <td>Developer</td>
                </tr>
            </React.Fragment>
        )
    }
}

export default Table;