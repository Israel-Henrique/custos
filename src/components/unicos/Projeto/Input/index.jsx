import styles from "./styles.module.css";

const Input = ({type, text, name, placeholder, handleOnChange, value, className}) =>
{
    let classextra = "indefinido";
    if (type == "submit") classextra = styles.submit;

    const JSX =
    <div className = {`${styles.input} ${className} ${classextra}`}>
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

    return JSX;
}

export default Input;