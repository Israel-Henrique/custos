import {useEffect, useState} from "react";
import styles from "./styles.module.css";
import Input from "../Input/index.jsx";
import Select from "../Select/index.jsx";

const Novojetoform = () =>
{
    let [catg, setCatg] = useState([]); //abreviação de "categoria"

    useEffect(() => 
    {
        const asssincrono = async () =>
        {
            fetch("http://localhost:5000/categorias", 
            {   
                "method": "GET",
                "headers": {"Content-Type": "application/json"}
            })
            .then(resposta => resposta.json()).then(catgs => setCatg(catgs))
            .catch(erro => console.log(erro)); 
        }
        asssincrono();
    }, []);
    

    const JSX = 
    <form className = {styles.formulario}>
        <Input text = "Nome:" type = "text" placeholder = "Nome do projeto" name = "nome"/>
        <Input text = "Orçamento:" type = "number" placeholder = "0000,00" name = "orcamento"/>
        <Select name = "categoria" text = "Selecione a categoria" opcoes = {catg}/>
        <Input type = "submit" name = "enviar" value = "Criar projeto" className = {styles.submissao}/>
    </form>;

    return JSX;
}

export default Novojetoform;