import styles from "./styles.module.css";
import Novojetoform from "../../Projeto/Novojetoform/index.jsx";

const NovoProjeto = () => 
<section className = {styles.neoprojeto}>
    <h1>Novo Projeto</h1>
    <p>Crie seu projeto para em seguida adicionar os serviços.</p>
    <Novojetoform/>
</section>;

export default NovoProjeto;