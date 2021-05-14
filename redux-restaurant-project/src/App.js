import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Recipes from './Components/Recipes';
import {Provider, provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter,Router, Switch, Route} from 'react-router-dom';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Feedback from './Components/Feedback';
import GetRecipe from './Components/GetRecipe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Recipes} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/recipe/:id" component={GetRecipe} />
        {/*<Footer />*/}
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
