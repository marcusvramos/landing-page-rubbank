import image_form from '../../assets/form-image.svg'
import logo_form from '../../assets/logo-form.svg'
import './Formulario.css'
import logo2 from '../../assets/rublogo-form.svg'
import Popup from '../Popup.jsx/'

import { useState } from 'react'
import userEvent from '@testing-library/user-event'

const Formulario = (props) => {

    const [buttonPopup, setButtonPopup] = useState(false);

    const [value, setValue] = useState({
        name: '',
        email: '',
    })

    const valueInput = e => setValue({ ...userEvent, [e.target.value]: e.target.value})

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const myForm = event.target;
        const formData = new FormData(myForm);

        setValue({
            name: '',
            email: '',
        })
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => setButtonPopup(true))
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
                    onSubmit={handleSubmit}  
                    name="contact" 
                    method="post" > 
                        <input type="hidden" name="form-name" value="contact" />
                        <img src={logo2} alt="logo RubBank" className='img-form-hidden'/>
            
                        <h2 className='segundo-titulo'>Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
            
                        

                        <div className="campo-texto formatacao">
                            <label>
                                <input placeholder="Digite seu Nome" onChange={valueInput} required={true} value={value.name} type="text" id="name" name="name"/>
                            </label>
                        </div>
            
            
                        <div className="campo-texto formatacao">
                            <label>
                                <input placeholder="Digite seu Email" onChange={valueInput} required={true} value={value.email} type="email" name="email" id="email"/>
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
                <p>Agradecemos pelo contato! Estaremos sempre te mantendo antenado sobre as novidades do Rubbank!</p>
            </Popup>

        </div>
        
    )
}

export default Formulario