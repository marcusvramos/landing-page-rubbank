import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Menu from './componentes/Menu/Menu';
import Introducao from './componentes/Introducao/Index';
import Secao2 from './componentes/Secao2';
import Rodape from './componentes/Rodape';

<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>

function App() {

  const [usuarios, setUsuarios] = useState([])

  const novoUsuarioAdicionado = (usuario) => {
    console.log(usuario)
    setUsuarios([...usuarios, usuario])
  }

  return (
    <div className="App">
      <Menu />
      <Introducao />
      <Secao2 />
      <Formulario aoUsuarioCadastrado= {usuario => novoUsuarioAdicionado(usuario)}/>
      <Rodape />
    </div>
  );
}

export default App;
