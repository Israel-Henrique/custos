import {useEffect, useState} from "react";
import styles from "./styles.module.css";
import Input from "../Input/index.jsx";
import Select from "../Select/index.jsx";

const Novojetoform = ({handleSubmit, dadosProjeto = {categoria: 1}}) =>
{
    const [catg, setCatg] = useState([]); //abreviação de "categoria"
    const [projeto, setProjeto] = useState(dadosProjeto)

    useEffect(() => 
    {
        const asssincrono = (async () =>
        {
            fetch("http://localhost:5000/categorias", 
            {   
                "method": "GET",
                "headers": {"Content-Type": "application/json"}
            })
            .then(resposta => resposta.json()).then(catgs => setCatg(catgs))
            .catch(erro => console.log(erro)); 

            
        })();
        //asssincrono();
        
    }, []);
    //setTimeout(() => console.log(catg), 5000)

    function submeter (evento)
    {
        evento.preventDefault();
        handleSubmit(projeto);
        console.log(projeto);
    }

    function handleOnChange(evento)
    {
        setProjeto({...projeto, [evento.target.name]: (evento.target.value)});
        //console.log(projeto);
    }
    
    function handleOnSelect(evento)
    {
        setProjeto({...projeto, categoria: evento.target.value})
        
        //console.log(projeto);
    }

    const JSX = 
    <form onSubmit = {submeter}  className = {styles.formulario}>
        <Input text = "Nome:" type = "text" placeholder = "Nome do projeto" name = "nome" handleOnChange = {handleOnChange}/>
        <Input text = "Orçamento:" type = "number" step = ".01" placeholder = "0000,00" name = "orcamento" handleOnChange = {handleOnChange}/>
        <Select name = "categoria" text = "Selecione a categoria" opcoes = {catg} handleOnChange = {handleOnSelect}/>
        <Input type = "submit" name = "enviar" value = "Criar projeto" className = {styles.submissao}/>
    </form>;

    return JSX;
}

export default Novojetoform;

