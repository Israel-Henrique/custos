import {FaFacebook as Face, FaInstagram as Insta, FaLinkedin as LKdin} from "react-icons/fa";
//import { GiSonicShoes} from "react-icons/gi";
import styles from "./styles.module.css";

const Rodape = () => 
<footer className = {styles.rodape}>
    <ul>
        <li><Face/></li>
        <li><Insta/></li>
        <li><LKdin/></li>
    </ul>

    <span>Custos, 2024</span>
</footer>;

export default Rodape;