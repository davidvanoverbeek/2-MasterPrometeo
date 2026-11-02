import { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

const Boton = () => {
    // Le indico que contexto va a utilizar y que voy a sacar del mismo
    const { temaDark } = useContext(TemaContext);
    return <button className={temaDark ? "dark" : "ligth"}>Tema: {temaDark ? "Tema claro" : "Tema oscuro"}</button>;
};

export default Boton;