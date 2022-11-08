import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import image_form from '../../assets/form-image.svg'
import logo_form from '../../assets/logo-form.svg'
import logo2 from '../../assets/rublogo-form.svg'


const Formulario = (props) => {

    const [nome, setNome] = useState('') // hook (gancho) -- valor atual, e o novo valor a ser SETADO
    const [email, setEmail] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault() // previnir o comportamento padrão do navegador -- 'Submete e Atualiza'
        props.aoUsuarioCadastrado({
            nome,
            email
        })
    }

    return (
        <div className='container-form' id="form-contato">
            <div className='imagens-form'>
                <img src={logo_form} alt="logo Rub" className='imagem-logo'/>
                <img src={image_form} alt="imagem representativa de email" className='imagem-email'/>
            </div>
            <h2 className='segundo-titulo-hidden' >Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
            <section className='formulario formatacao' >
                <form id="form" 
                    onSubmit={aoSalvar}> 
                    <img src={logo2} alt="logo RubBank" className='img-form-hidden'/>

                    <h2 className='segundo-titulo'>Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
                    <CampoTexto 
                    required={true} 
                    placeholder="Digite seu Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />

                    <CampoTexto 
                    required={true} 
                    placeholder="Digite seu Email"
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                    />

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