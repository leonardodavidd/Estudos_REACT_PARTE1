
import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import Lista from './components/Lista'
import Item from './components/Item'
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/Condicional'
import OutraLista from './components/OutraLista'
import {useState} from 'react'
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'


function App() {
  const [nome,setNome] = useState()
  const meusItens = ['React', 'Vue', 'Angular']
  const name = "Maria";
  return (
    <div className="App">
      <h1>Testando css</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Leonardo"/>
      <SayMyName nome="Leozin"/>
      <SayMyName nome={name}/>
      <Pessoa nome="João" idade="24" profissao="programador" foto="https://via.placeholder.com/150"/>
      <Lista/>
      <Evento/>
      <Form/>
      <Condicional/>
      <h1>Renderização Condicional</h1>
      <h2>Renderização de Listas</h2>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
      <h2>State Lift</h2>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
          <li><Link to="/empresa">Empresa</Link></li>
        </ul>
        <ul>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </Router>
    </div>
  );
}

export default App;
