import {useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import Mensagem from "../../../reciclaveis/layout/Mensagem";
import BotaoLink from "../../../reciclaveis/BotaoLink/index.jsx";
import Container from "../../../reciclaveis/layout/Container/index.jsx"
import styles from "./styles.module.css";
import Projcard from "../../Projeto/Projcard/index.jsx";

const Projetos = () => 
{
    const local = useLocation();

    const mensagem =  typeof local.state?.message != "undefined" ? local.state?.message : undefined;
    //console.log(mensagem);
  

    const [projs, setProjs] = useState([]);

    useEffect(() =>
    {
        const asssincrono = (async () =>
        {
            fetch("http://localhost:5000/projetos", 
            {   
                "method": "GET",
                "headers": {"Content-Type": "application/json"}
            })
            .then(resposta => resposta.json()).then(projetos => setProjs(projetos))
            .catch(erro => console.log(erro)); 
    
                
        })();
        
    }, []);
    //console.log(projs);


    const projetos = projs =>
    {
        //test
        let cards = [];
        for (let proj of projs) 
        {
            cards.push(<Projcard props={proj} key = {proj.id}/>);
        }
            
        return cards;
    }

    const JSX =
    <main className = {styles.proj}>
        <div className = {styles.header}>
            <h1>Meus Projetos</h1>
            <BotaoLink texto = "Novo" link = "/novoprojeto"/>
        </div>
        
        {mensagem != undefined && (<Mensagem msg = {mensagem} tipo = "sucesso"/>)}
        <Container customClass = "start">
            {projs.length === 0 ?

            <>Você ainda não tem projetos</>

            :
            
            <>{projetos(projs)}</>}

        </Container>
    </main>;

    return JSX;
}

export default Projetos;