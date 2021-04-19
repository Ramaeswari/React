import React, { Component } from 'react';
import {Card, CardContent, Typography, CardActions } from '@material-ui/core'

class CardData extends Component
{
    componentDidMount = () =>{
        this.getData()
    }
    getData()
    {
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
                alert("User has been deleted")
                this.getData()
            })
        })
    }

    handleDelete = itemId => {
      const items = this.state.records.filter(record => record.id !== itemId);
      this.setState({ records: items });
    };

    render()
    {
        var {isLoaded, records} = this.state;
        if(!isLoaded)
        {
            return <div>Loading</div>;
        }
        else
        {
            return(
                <Card>
                {this.state.records.map(record =>{
                  return(
                    <CardContent style={{
                      width: "30%",
                      border: "1px solid #d3d3d3",
                      margin: "10px auto"
                    }}>
                      <Typography>
                        <h2>Users Data</h2>
                      </Typography>
                      <Typography key = {record.id}>
                        <p><span>User Name : {record.name}</span></p>
                        <p><span>User email : {record.email}</span></p>
                        
                      </Typography>
                      <CardActions>
                    <button onClick={this.handleDelete}>Delete</button>
                    </CardActions>
                    </CardContent>
                    
                  )
                })}
              </Card>
             
               
            );
        }
        
        
    }
}
export default CardData;