import React, { Component } from "react";
import {Card, CardContent, Typography, CardActions } from '@material-ui/core'
// import Assignment from "./Assignment";
import CardData from './CardData'

class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            records: [],
            isLoaded: false,
        }
    }
    

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

    handleDelete = id => {
      console.log(id);
      const items = this.state.records.filter(record => record.id !== id);
      this.setState({ records: items });
      console.log(items);
    };
    

    render(){
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
                      <span>ondelete: {this.ohandleDelete}</span>
                    </Typography>
                    <CardActions>
                  <button onClick={() =>this.handleDelete(record.id)}>Delete</button>
                  </CardActions>
                  </CardContent>
                  
                )
              })}
            </Card>
           
             
          );
      }
        
    }
}
export default App;

