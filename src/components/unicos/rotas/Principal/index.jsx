import styles from "./styles.module.css";
import porquinho from "../../../../img/porquinho.png";
import BotaoLink from "../../../reciclaveis/BotaoLink";

const Principal = () => 
<section className = {styles.principal}>
    <h1>Bem vindo ao <span>Costs</span></h1>
    <p>Comece a gerenciar os seus projetos agora mesmo!</p>
    <BotaoLink texto = "Criar projeto" link = "/novoprojeto"/>
    {true && <img src = {porquinho}/>}
</section>;

export default Principal;