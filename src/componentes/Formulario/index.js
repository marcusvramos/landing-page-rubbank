import CampoTexto from '../CampoTexto'
import './Formulario.css'



const Formulario = () => {
    return (
        
        <section className='formulario formatacao'>
            <form>
            <h2>Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Email" placeholder="Digite seu Email - exemplo@exemplo.com"/>
            
            </form>
        </section>
    )
}

export default Formulario