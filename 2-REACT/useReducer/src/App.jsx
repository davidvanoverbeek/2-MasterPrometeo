import { useReducer, useState } from 'react';
import Carrito from './components/Carrito';
import './App.css';

const App = () => {
  const contadorReducer = (state, action) => {
    switch (action.type) {
      case "sumar":
        return state + action.cantidad
        case "restar":
          return state - action.cantidad
        case "reiniciar":
          return 
        default:
          return state;
    }
  }
  
  const [state, dispatch] = useReducer(contadorReducer, 0);
  const [cantidad, setCantidad] = useState(1);
  
  return (
    <>
      <h2>Contador: {state}</h2>
      <input type="number" value={cantidad} onChange={(ev) => setCantidad(Number(ev.target.value))} />
      <button onClick={() => dispatch({type: "sumar", cantidad})}>+{cantidad}</button>
      <button onClick={() => dispatch({type: "restar", cantidad})}>-{cantidad}</button>
      <button onClick={() => dispatch({type: "reiniciar"})}>Reset</button>
      <Carrito />
    </>
  );
};

export default App;
