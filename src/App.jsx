import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Menu from './componentes/Menu/Menu';
import Introducao from './componentes/Introducao/Index';

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
      <Formulario aoUsuarioCadastrado= {usuario => novoUsuarioAdicionado(usuario)}/>
    
    </div>
  );
}

export default App;
