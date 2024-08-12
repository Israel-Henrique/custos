import { BrowserRouter, Route, Routes} from "react-router-dom";
import Principal from "./components/unicos/rotas/Principal/index.jsx";
import Contato from "./components/unicos/rotas/Contato/index.jsx";
import Company from "./components/unicos/rotas/Company/index.jsx";
import NovoProjeto from "./components/unicos/rotas/NovoProjeto/index.jsx";
import Container from "./components/reciclaveis/layout/Container/index.jsx"
import Navegacao from "./components/reciclaveis/layout/Navegacao/index.jsx";
import Projetos from "./components/unicos/rotas/Projetos/index.jsx";
import Rodape from "./components/reciclaveis/layout/Rodape/index.jsx";


function App() 
{
  const JSX = 
  <BrowserRouter>
      <Navegacao/>

      <Container customClass = "minHeight">
      <Routes>
        <Route exact path = "/"  element = {<Principal/>}></Route>
        <Route exact path = "/projetos"  element = {<Projetos/>}></Route>
        <Route exact path = "/contato" element = {<Contato/>}></Route>
        <Route exact path = "/company" element = {<Company/>}></Route>
        <Route exact path = "/novoprojeto" element = {<NovoProjeto/>}></Route>
      </Routes>
      </Container>
      
      <Rodape/>
    </BrowserRouter>;

  return JSX;
}

export default App;
