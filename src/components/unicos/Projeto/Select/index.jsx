import styles from "./styles.module.css";

const Select = ({text, name, handleOnChange, value, opcoes}) =>
{
    let options = opcoes.map(opcao =>

    <option value = {opcao.id} key = {opcao.id}>
        {opcao.nome}
    </option>
    );

    const JSX =
    <div className = {styles.input}>
        <label htmlFor = {name}>{text}</label>
        <select
        
        name = {name}
        onChange = {handleOnChange}
        value = {value}

        id = {name}
        >
            <option disabled>Selecione uma categoria</option>
            {[...options]}
        </select>
    </div>;

    return JSX;
}

export default Select;