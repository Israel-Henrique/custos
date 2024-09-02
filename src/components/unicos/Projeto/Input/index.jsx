import styles from "./styles.module.css";

const Input = ({type, step, text, name, placeholder, handleOnChange, onSubmit, value, className}) =>
{
    let classextra = "indefinido";
    if (type == "submit") classextra = styles.submit;

    const JSX =
    <div className = {`${styles.input} ${className} ${classextra}`}>
        <label htmlFor = {name}>{text}</label>
        <input
        
        step = {step}
        type = {type}
        name = {name}
        placeholder = {placeholder}
        onChange = {handleOnChange}
        value = {value}

        id = {name}
        />
    </div>;

    return JSX;
}

export default Input;