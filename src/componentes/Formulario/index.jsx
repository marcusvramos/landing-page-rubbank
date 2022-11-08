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
                <form id="form" 
                    onSubmit="submit"> 
                    
                    <img src={logo2} alt="logo RubBank" className='img-form-hidden'/>

                    <h2 className='segundo-titulo'>Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>

                    <div className="campo-texto formatacao">
                        <label></label>
                        <input placeholder="Digite seu Nome" required="true" type="text" />
                    </div>


                    <div className="campo-texto formatacao">
                        <label></label>
                        <input placeholder="Digite seu Email" required="true" type="email" />
                    </div>


                    <p>O Banco Digital perfeito para você!</p>
                    <div className='container-botao'>
                        <button className='botao-form-hidden'>
                            Enviar
                        </button>
                        <button className='botao-form'>
                            Enviar Formulário
                        </button>
                    </div>
                </form>
            </section>
        </div>
        
    )
}

export default Formulario