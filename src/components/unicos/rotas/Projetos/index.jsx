import { useLocation } from "react-router-dom";
import Mensagem from "../../../reciclaveis/layout/Mensagem";
import styles from "./styles.module.css";

const Projetos = () => 
{
    const local = useLocation();

    const mensagem =  typeof local.state != "undefined" ? local.state : undefined;
    console.log(mensagem)

    const JSX =
    <main className = {styles.proj}>
        <h1>Meus Projetos</h1>
        {mensagem != undefined && (<Mensagem msg = "teste" tipo = "sucesso"/>)}
    </main>;

    return JSX;
}

export default Projetos;