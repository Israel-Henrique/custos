import styles from "./styles.module.css";
import Input from "../Input/index.jsx";

const Novojetoform = () =>

<form className = {styles.formulario}>
    {/*<div><input type = "text" placeholder = "Nome do projeto"/></div>*/}
    <Input text = "Nome:" type = "text" placeholder = "Nome do projeto" name = "nome"/>
    <Input text = "Orçamento:" type = "number" placeholder = "0000,00" name = "orcamento"/>
    <div>
        <select name = "categoria">
            <option disabled>Selecione uma categoria</option>
        </select>
    </div>
    <input type = "submit" value = "Criar Projeto"/>
</form>;

export default Novojetoform;