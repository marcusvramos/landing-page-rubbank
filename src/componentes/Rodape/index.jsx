import './Rodape.css'
import Botao from '../Botao'
import logo02 from '../../assets/logo-rubcube.svg'

const Rodape = () => {

    const data = new Date();
    const ano = data.getFullYear();

    return (

        <footer className='rodape'>
            <div className='containerzao'>
                <div className='container-rodape'>
                    <img src={logo02} className="logo-rodape" alt="Logo RubCube" />
                </div>
                <div className='botao-rodape'>
                    <Botao>Baixar App</Botao>
                </div>
            </div>
            <p className='texto-footer'>Copyright ©{ano} Todos os direitos reservados | Powered by RubCube</p>
        </footer>
    )

}


export default Rodape