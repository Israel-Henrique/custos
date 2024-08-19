import styles from "./styles.module.css";

const Input = ({type, text, name, placeholder, handleOnChange, value}) =>

<div className = {styles.input}>
    <label htmlFor = {name}>{text}</label>
    <input
    
    type = {type}
    name = {name}
    placeholder = {placeholder}
    handleonchange = {handleOnChange}
    value = {value}

    id = {name}
    />
</div>;

export default Input;