import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Principal from "./components/unicos/rotas/Principal/index.jsx"
import Contato from "./components/unicos/rotas/Contato/index.jsx"
import Company from "./components/unicos/rotas/Company/index.jsx"
import NovoProjeto from "./components/unicos/rotas/NovoProjeto/index.jsx"

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to = "/">Principal</Link></li>
        <li><Link to = "/contato">Contato</Link></li>
        <li><Link to = "/company">Empresa</Link></li>
        <li><Link to = "/novoprojeto">Novo Projeto</Link></li>
      </ul>
      <Routes>
        <Route exact path = "/"  element = {<Principal/>}></Route>
        <Route exact path = "/contato" element = {<Contato/>}></Route>
        <Route exact path = "/company" element = {<Company/>}></Route>
        <Route exact path = "/novoprojeto" element = {<NovoProjeto/>}></Route>
      </Routes>
      <p>Rodapé</p>
    </BrowserRouter>
  );
}

export default App;
