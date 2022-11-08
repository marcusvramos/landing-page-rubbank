import image_form from '../../assets/form-image.svg'
import logo_form from '../../assets/logo-form.svg'
import './Formulario.css'
import logo2 from '../../assets/rublogo-form.svg'
import Popup from '../Popup.jsx/'

import { useState } from 'react'

const Formulario = (props) => {

    const [buttonPopup, setButtonPopup] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => console.log("Form successfully submitted"))
          .catch((error) => alert(error));
    };

    return (
        <div className='container-form' id="form-contato">
            <div className='imagens-form'>
                <img src={logo_form} alt="logo Rub" className='imagem-logo'/>
                <img src={image_form} alt="imagem representativa de email" className='imagem-email'/>
            </div>
            <h2 className='segundo-titulo-hidden' >Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
            <section className='formulario formatacao' >
                    <form id="form" 
                    onSubmit={[handleSubmit, () => setButtonPopup(true)]}  
                    name="contact" 
                    method="post" > 
                        <input type="hidden" name="form-name" value="contact" />
                        <img src={logo2} alt="logo RubBank" className='img-form-hidden'/>
            
                        <h2 className='segundo-titulo'>Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
            
                        

                        <div className="campo-texto formatacao">
                            <label>
                                <input placeholder="Digite seu Nome" required={true} type="text" id="name" name="name"/>
                            </label>
                        </div>
            
            
                        <div className="campo-texto formatacao">
                            <label>
                                <input placeholder="Digite seu Email" required={true} type="email" name="email" id="email"/>
                            </label>
                        </div>
            
            
                        <p>O Banco Digital perfeito para você!</p>
                        <div className='container-botao'>
                            <button type="submit" className='botao-form-hidden'>
                                Enviar
                            </button>
                            <button type="submit"  className='botao-form'>
                                Enviar Formulário
                            </button>
                        </div>
                    </form>
            </section>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>Formulário Enviado com Sucesso!</h3>
                <p>Agradecemos pelo contato e estaremos sempre te mantendo antenado nas novidades do Rubbank</p>
            </Popup>

        </div>
        
    )
}

export default Formulario