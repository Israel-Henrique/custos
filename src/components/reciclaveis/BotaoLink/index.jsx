import styles from "./styles.module.css";
import {Link} from "react-router-dom";

const BotaoLink = ({texto, link}) =>

<Link className = {styles.botao} to = {link}>
    {texto}
</Link>;

export default BotaoLink;