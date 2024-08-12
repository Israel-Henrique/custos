import {Link} from "react-router-dom";
import Container from "../Container/index.jsx";
import logo from "../../../../img/custos.png";
import styles from "./styles.module.css";

const Navegacao = () => 
<nav className = {styles.navegacao}>
    <Container>
        <Link to = "/"><img src = {logo}/></Link>

        <ul className = {styles.lista}>
            <li><Link to = "/contato">Contato</Link></li>
            <li><Link to = "/company">Empresa</Link></li>
            <li><Link to = "/projetos">Projetos</Link></li>
            <li><Link to = "/novoprojeto">Novo Projeto</Link></li>
        </ul>
        
    </Container>
</nav>

export default Navegacao;