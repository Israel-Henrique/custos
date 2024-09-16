import {useState, useEffect} from "react";
import styles from "./styles.module.css";

const Mensagem = ({msg, tipo}) => 
{
    const [visivel, setVisivel] = useState(false);

    useEffect(() => 
    { 
        setVisivel(typeof msg !== "undefined");
        console.log("Condicao: " + (typeof msg !== "undefined"))
    }, [msg])
        
    useEffect(()=> 
    {
        if (!visivel) {return};
        console.log("Variavel: " + (visivel));
        
        let ampulheta = setTimeout(() => {setVisivel(false); console.log("ai")}, 3000);

        return () => {clearTimeout(ampulheta); console.log("fechado")};
    }, [visivel])

        

    const JSX =
    <>
        {visivel && (
        <div className = {`${styles.msg} ${styles[tipo]}`}>
            {msg}
        </div>)}
    </>
    return JSX;
}
export default Mensagem;