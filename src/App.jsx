
import Menu from './componentes/Menu';
import Introducao from './componentes/Introducao';
import Secao2 from './componentes/Secao2';
import Rodape from './componentes/Rodape';
import SecaoSlider from './componentes/Secao-Slider';
import Formulario from './componentes/Formulario';


function App() {
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:3000')
    .then( () => console.log('DEU CERTO')) 
    .catch( () => console.log('DEU ERRO'))


  // <Formulario />

  return (
    <div className="App" id="home">
      <Menu />
      <Introducao />
      <Secao2 />
      <SecaoSlider />   
      <Formulario />   
      <Rodape />
    </div>
  );
}

export default App;
