import { useState } from "react";
import { useRef } from "react";

const EditorNotas = () => {
    const inputRef = useRef(null);
    /*const [nota, setNota] = useState("");*/
    const valorAnteriorRef = useRef("");

    const handlerFocus = () => {
        inputRef.current.focus();
    };

    const handlerResetAndFocus = () => {
        inputRef.current.value = "";
        inputRef.current.focus();
    };
    
    const handlerSave = () => {
        const valorActual = inputRef.current.value;
        alert(`Antes -> "${valorAnteriorRef.current}" - Ahora -> "${valorActual}"`);
        valorAnteriorRef.current = valorActual;
    };

    /*const handlerSaveState = () => {
        alert(nota);
    }*/

    return ( 
        <div>
            <h2>Editor de Notas</h2>
            {/*<p>{nota}</p>*/}
            <input 
                ref={inputRef} 
                type="text" 
                placeholder="Escribe una nota..." 
                /*onChange={(ev) => setNota(ev.target.value)}*/ 
            />
            <button onClick={handlerFocus}>Focus</button>
            <button onClick={handlerResetAndFocus}>Reset and focus</button>
            <button onClick={handlerSave}>Guardar</button>
        </div>
    );
};

export default EditorNotas;