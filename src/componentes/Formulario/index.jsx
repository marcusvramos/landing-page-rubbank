import image_form from '../../assets/form-image.svg'
import logo_form from '../../assets/logo-form.svg'
import logo2 from '../../assets/rublogo-form.svg'
import CampoTexto from '../CampoTexto'
import './Formulario.css'


const Formulario = (props) => {




    return (
        <div className='container-form' id="form-contato">
            <div className='imagens-form'>
                <img src={logo_form} alt="logo Rub" className='imagem-logo'/>
                <img src={image_form} alt="imagem representativa de email" className='imagem-email'/>
            </div>
            <h2 className='segundo-titulo-hidden' >Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
            <section className='formulario formatacao' >
                <form id="form" name="contact"
                     netlify> 
                    <img src={logo2} alt="logo RubBank" className='img-form-hidden' />

                    <h2 className='segundo-titulo'>Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
                    <CampoTexto 
                    required={true} 
                    placeholder="Digite seu Nome"
                    valor={nome}
                    type="text"
                    name="name"
                    
                    />

                    <CampoTexto 
                    required={true} 
                    placeholder="Digite seu Email"
                    valor={email}
                    type="email"
                    name="email"
                    />

                    <p>O Banco Digital perfeito para você!</p>

                    <div className='container-botao'>
                        <button type='submit' className='botao-form-hidden'>
                            Enviar
                        </button>
                        <button type='submit' className='botao-form'>
                            Enviar Formulário
                        </button>
                    </div>
                </form>
            </section>
        </div>
        
    )
}

export default Formulario