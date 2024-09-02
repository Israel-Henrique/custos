import styles from "./styles.module.css";
import Novojetoform from "../../Projeto/Novojetoform/index.jsx";
import {useNavigate} from "react-router-dom";

const NovoProjeto = () => 
{
    const navegante = useNavigate();

    function handleSubmit(projeto = {}) 
    {
        projeto.custo = 0;
        projeto.servicos = 0;

        fetch("http://localhost:5000/projetos", 
        {   
            "method": "POST",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify(projeto)
        })
        .then(resposta => resposta.json()).then(dados => {console.log(dados); navegante("/projetos", {"message": "TESTANDO"})})
        .catch(erro => console.log(erro)); 
    }
    

    const JSX =
    <section className = {styles.neoprojeto}>
        <h1>Novo Projeto</h1>
        <p>Crie seu projeto para em seguida adicionar os serviços.</p>
        <Novojetoform handleSubmit = {handleSubmit}/>
    </section>;

    return JSX;
}

export default NovoProjeto;