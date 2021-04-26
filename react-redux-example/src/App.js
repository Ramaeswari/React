import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Actions';
import './App.css';

function App() {

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch(increment(10));
  }

  const handleDecrement = () =>{
    dispatch(decrement());
  }

  return (
    <div className="App">
      Test Redux
      <h3>Counter: {counter}</h3>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
