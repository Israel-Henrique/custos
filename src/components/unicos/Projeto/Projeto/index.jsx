import {BsPencil, BsTrashFill} from "react-icons/bs";
import styles from "./styles.module.css";

const Projeto = ({props: {id, nome, orcamento, categoria}}) =>
{
    const JSX = 
    <div>
        <h4>{nome}</h4>

        <p>
            <span>Orçamento: </span> R${orcamento}
        </p>

        <p>
            <span></span> {categoria}
        </p>

        <div>
            <p>Editar</p>
            <p>Remover</p>
        </div>
    </div>;

    return JSX;
}

export default Projeto;