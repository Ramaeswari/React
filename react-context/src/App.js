import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar';
import { BookList } from './Components/BookList';
import { BookProvider } from './Components/BookContext';
import AddBook from './Components/AddBook';

function App() {
  
  return (
    <div className="App">
      <BookProvider>
      <Navbar />
      <AddBook />
      <BookList />
      </BookProvider>
    </div>
  );
}

export default App;
