import { useState, useMemo } from "react";

const alumnos = ["Juan", "Jorge", "Joa", "Agustin"];

const ListaAlumnos = () => {
    const [contador, setContador] = useState(0);
    const [keyword, setKeyword] = useState("");

    const filtrados = useMemo(() => {
        console.log("Filtrando...")
        return alumnos.filter((alumnos) => 
            alumnos.toLowerCase().includes(keyword.toLowerCase())
        );
    }, [keyword])
    
    return <>
        <button onClick={() => setContador(contador + 1)}>
            Segundo contador
        </button>
        <input 
            type="text"
            placeholder="Nombre del alumno"
            value={keyword}
            onChange={(ev) => setKeyword(ev.target.value)} 
        />
        <ul>
            {filtrados.map((filtrado) => (
                <li key={filtrado}>
                    <p>{filtrado}</p>
                </li>
            ))}
        </ul>
    </>;
};

export default ListaAlumnos;