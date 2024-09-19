import styles from "./styles.module.css";
import {Link} from "react-router-dom";

const BotaoLink = ({texto, link, className}) =>

<Link className = {`${styles.botao} ${className}`} to = {link}>
    {texto}
</Link>;

export default BotaoLink;