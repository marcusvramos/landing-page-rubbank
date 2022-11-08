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
                    <form id="form" 
                    onSubmit="submit" 
                    name="contact" 
                    method="POST" 
                    data-netlify="true"> 
                        <img src={logo2} alt="logo RubBank" className='img-form-hidden'/>
            
                        <h2 className='segundo-titulo'>Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
            
                        <input type="hidden" name="contact" value="contact" />

                        <div className="campo-texto formatacao">
                            <label></label>
                            <input placeholder="Digite seu Nome" required="true" type="text" name="name"/>
                        </div>
            
            
                        <div className="campo-texto formatacao">
                            <label></label>
                            <input placeholder="Digite seu Email" required="true" type="email" name="email"/>
                        </div>
            
            
                        <p>O Banco Digital perfeito para você!</p>
                        <div className='container-botao'>
                            <button type="submit" className='botao-form-hidden'>
                                Enviar
                            </button>
                            <button type="submit" className='botao-form'>
                                Enviar Formulário
                            </button>
                        </div>
                    </form>
            </section>
        </div>
        
    )
}

export default Formulario