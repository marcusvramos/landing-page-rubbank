import './Formulario.css'
import image_form from '../../assets/form-image.svg'
import logo_form from '../../assets/logo-form.svg'
import Form from '../Form/dummyForm'



const Formulario = (props) => {

    return (
        <div className='container-form' id="form-contato">
            <div className='imagens-form'>
                <img src={logo_form} alt="logo Rub" className='imagem-logo'/>
                <img src={image_form} alt="imagem representativa de email" className='imagem-email'/>
            </div>
            <h2 className='segundo-titulo-hidden' >Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
            <section className='formulario formatacao' >
                <Form />
            </section>
        </div>
        
    )
}

export default Formulario