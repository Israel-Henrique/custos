import {BsPencil, BsTrashFill} from "react-icons/bs";
import BotaoLink from "../../../reciclaveis/BotaoLink";
import styles from "./styles.module.css";

const Projcard = ({props: {id, nome, orcamento, categoria}}) =>
{
    //console.log(id);
    const JSX = 
    <div className = {styles.card}>
        <h4>{nome}</h4>

        <p>
            <span>Orçamento: </span> R${orcamento}
        </p>

        <p>
            <span className = {styles.catg}></span> {categoria}
        </p>

        <div>
            <div className = {styles.botao}><BsPencil/><BotaoLink texto = "Editar" link = ""/></div>
            <div className = {styles.botao}><BsTrashFill/><BotaoLink texto = "Remover" link = ""/></div>
        </div>
    </div>;

    return JSX;
}

export default Projcard;