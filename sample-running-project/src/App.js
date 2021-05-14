// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Recipes from "./components/Recipes";
// import Axios from "axios";

// function App() {
//   const [search, setSerach] = useState("chiken");
//   const [recipes, setRecipes] = useState([]);

//   const APP_ID = "919f8822";
//   const APP_KEY = "19b1d8e965c989ee9e4f25dcb9b613e9";

//   useEffect(() => {
//     getRecipes();
//   }, []);

//   const getRecipes = async () => {
//     const res = await Axios.get(
//       `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
//     );
//     console.log(res.data.hits);
//     setRecipes(res.data.hits);
//   };

//   const onInputChange = e => {
//     setSerach(e.target.value);
//   };

//   const onSearchClick = () => {
//     getRecipes();
//   };
//   return (
//     <div className="App">
//       <Header
//         search={search}
//         onInputChange={onInputChange}
//         onSearchClick={onSearchClick}
//       />
//       <div className="container">
//         <Recipes recipes={recipes} />
//       </div>
//     </div>
//   );
// }

// export default App;



import Navbar from './Components/Navbar';
import Form from './Components/Form';
import { useState, useEffect, Component } from 'react';
// import { Component } from 'react';
import axios from 'axios';
import RecipesData from './Components/Home';
import Modal from './Components/ModalPart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ModalPart from './Components/ModalPart';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Feedback from './Components/Feedback';
import Home from './Components/Home';
import Footer from './Components/Footer';

class App extends Component{
  state ={
    name: "eswari",
    
  }
  render(){
  return(
    <BrowserRouter>
    <div className="App">
      <Navbar />
      
      
      {/*<RecipesData />*/}
      <Route exact path="/" component={Home} />
      
      <Route path="/about" component={About} />
      <Route path="/contactUs" component={ContactUs} />
      <Route path="/feedback" component={Feedback} />
      <Route exact path = "/recipes/:id" component={ModalPart } ></Route>
      {/*<Footer />*/}
      {/*<ModalPart />*/}
      {/*<BrowserRouter>
            <Switch>
                <Route exact path="/" component={Modal} />
            </Switch>
      </BrowserRouter>*/}
    </div>
    </BrowserRouter>
  )
}
}

export default App;