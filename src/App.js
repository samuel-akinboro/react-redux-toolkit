import "./styles.css";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementBy } from './reducers/counter'

export default function App() {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counter);
  
  const handleIncrement = () => {
      dispatch(increment());
  }
  
  const handleDecrement = () => {
      dispatch(decrement())
  }
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button>+5</button>
    </div>
  );
}
