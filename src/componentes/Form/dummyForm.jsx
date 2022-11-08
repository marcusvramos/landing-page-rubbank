import React from "react"
import logo2 from '../../assets/rublogo-form.svg'

const Form = () => {
    return (
        <form id="form" 
            onSubmit="submit" 
            name="contact" 
            method="POST" 
            data-netlify="true"
            action="../../../success.js"> 
            
                <img src={logo2} alt="logo RubBank" className='img-form-hidden'/>
    
                <h2 className='segundo-titulo'>Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
    
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
                    <button className='botao-form'>
                        Enviar Formulário
                    </button>
                </div>
            </form>
    )
}
    


export default Form
