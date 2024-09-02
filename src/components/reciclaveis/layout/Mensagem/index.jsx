import {useState, useEffect} from "react";
import styles from "./styles.module.css";

const Mensagem = ({msg, tipo}) => 
{
    const [visivel, setVisivel] = useState(false);

    useEffect(() => 
    {
        setVisivel(typeof msg != "undefined");

        if (visivel) return;
        
        (async function () {
            const relogio = setTimeout(() => setVisivel(false), 3000);
            clearTimeout(relogio);
        })();
    })

    const JSX =
    <>
        {visivel && (
        <div className = {`${styles.msg} ${styles[tipo]}`}>
            {msg}
        </div>)};
    </>
    return JSX;
}
export default Mensagem;