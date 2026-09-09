const Botones = () => {

    const opcionA = () => console.log("Opcion A")

    return (
        <div>
            <button onClick={opcionA}>Opcion A</button>
            <button onClick={() => console.log("Opcion B")}>Opcion B</button>
            <button 
              onClick={() => {
                console.log("Opcion");
                console.log("C");
            }}>
                Opcion C
            </button>
        </div>
    );
};

export default Botones;