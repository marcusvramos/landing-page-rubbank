import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Menu from './componentes/Menu';
import Introducao from './componentes/Introducao';
import Secao2 from './componentes/Secao2';
import Rodape from './componentes/Rodape';
import SecaoSlider from './componentes/Secao-Slider';


function App() {
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:3000')
    .then( () => console.log('DEU CERTO')) 
    .catch( () => console.log('DEU ERRO'))


  const [usuarios, setUsuarios] = useState([])
  const novoUsuarioAdicionado = (usuario) => {
    console.log(usuario)
    setUsuarios([...usuarios, usuario]) 
  }

  return (
    <div className="App" id="home">
      <Menu />
      <Introducao />
      <Secao2 />
      <SecaoSlider />
      <Formulario aoUsuarioCadastrado= {usuario => novoUsuarioAdicionado(usuario)}/>      
      <Rodape />
    </div>
  );
}

export default App;
