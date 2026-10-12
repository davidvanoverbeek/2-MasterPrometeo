import './App.css';
import Component from './components/Component';
import Cronometro from './components/Cronometro';
import { useState } from 'react';

const App = () => {
  const [visible, setVisible] = useState(true)

  return (
    <>
      {
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Ocultar" : "Mostrar"}
        </button>
      }
      {visible && <Cronometro />}
      <Component />
    </>
  );
};

export default App;
