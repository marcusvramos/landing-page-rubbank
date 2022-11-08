import CampoTexto from '../CampoTexto'
import './Formulario.css'
import image_form from '../../assets/form-image.svg'
import logo_form from '../../assets/logo-form.svg'
import logo2 from '../../assets/rublogo-form.svg'


const Formulario = (props) => {


    return (
        <div className='container-form' id="form-contato">
            <div className='imagens-form'>
                <img src={logo_form} alt="logo Rub" className='imagem-logo'/>
                <img src={image_form} alt="imagem representativa de email" className='imagem-email'/>
            </div>
            <h2 className='segundo-titulo-hidden' >Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
            <section className='formulario formatacao' >
                <form 
                    name="contact" method="POST" data-netlify="true"
                    id="form" 
                    onSubmit="submit" > 

                    <img src={logo2} alt="logo RubBank" className='img-form-hidden'/>

                    <input type="hidden" name="form-name" value="contact"/>

                    <h2 className='segundo-titulo'>Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>

                    <CampoTexto 
                    type="text"
                    required={true} 
                    name="first-name"
                    placeholder="Digite seu Nome"
                    
                    
                    />

                    <CampoTexto 
                    type="email"
                    required={true} 
                    name="email"
                    placeholder="Digite seu Email"

                    
                    />

                    <p>O Banco Digital perfeito para você!</p>

                    
                    <button className='botao-form-hidden' type="submit">
                        Enviar
                    </button>
                    <button type="submit" className='botao-form'>
                        Enviar Formulário
                    </button>
                    
                </form>
            </section>
        </div>
        
    )
}

export default Formulario