import { useLocation } from "react-router-dom";
import Mensagem from "../../../reciclaveis/layout/Mensagem";
import BotaoLink from "../../../reciclaveis/BotaoLink/index.jsx";
import Container from "../../../reciclaveis/layout/Container/index.jsx"
import styles from "./styles.module.css";

const Projetos = () => 
{
    const local = useLocation();

    const mensagem =  typeof local.state?.message != "undefined" ? local.state?.message : undefined;
    console.log(mensagem)

    const JSX =
    <main className = {styles.proj}>
        <div>
            <h1>Meus Projetos</h1>
            <BotaoLink texto = "Novo" link = "/novoprojeto"/>
        </div>
        
        {mensagem != undefined && (<Mensagem msg = {mensagem} tipo = "sucesso"/>)}
        <Container customClass = "start"></Container>
    </main>;

    return JSX;
}

export default Projetos;