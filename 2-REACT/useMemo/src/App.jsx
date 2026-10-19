import Saludo from './components/Saludo'
import ListaAlumnos from './components/Alumnos'
import { useState, useMemo } from 'react'
import './App.css'

const App = () => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("Agustin");
  
  const usuario = useMemo(() => ({ nombre }), [nombre]);

  return (
    <>
      <input 
        type="text" 
        value={nombre} 
        onChange={(ev) => setNombre(ev.target.value)} 
      />
      <Saludo usuario={usuario} />
      <button onClick={() => setContador(contador + 1)}>{contador}</button>
      <ListaAlumnos />
    </>
  )
}

export default App;
