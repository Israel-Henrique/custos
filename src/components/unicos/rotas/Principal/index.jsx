import styles from "./styles.module.css";
import porquinho from "../../../../img/porquinho.png";

const Principal = () => 
<>
    <h1 className = {styles.teste}>Bem vindo ao <span>Costs</span></h1>
    <p>Comece a gerenciar os seus projetos agora mesmo!</p>
    <div id = "porquinho"></div>
</>;

export default Principal;