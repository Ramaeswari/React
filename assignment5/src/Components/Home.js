import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component
{
    state ={
        productsData : []
    }
    componentDidMount = () => {
        axios.get('https://hub.dummyapis.com/products').then(res =>{
            console.log(res.data);
            this.setState({
               productsData: res.data
            })
        })
    }

    render(){
        const productsList = this.state.productsData.map(product => {
            return(
                <div key={product.id} >
                    <p><b className="productDetails">Product Name: </b>{product.name}</p>
                    <p><span className="productDetails">Product Price: </span>{product.price}</p>
                </div>
            )
        })
        return(
            <div className="container">
            {productsList}
            </div>
        )
    }
}
export default Home;

// const productsDataList = this.state.productsData.length ? 
//         (this.state.displayData.map(resp =>{
//             return(
//                 <div key={resp.id}>
//                     <p>{resp.name}</p>
//                     <p>{resp.price}</p>
//                 </div>
//             )
//         })) : (<p>Loading.....</p>);
//         return(
//             <div>
//                 {productsDataList}
//             </div>
//         )