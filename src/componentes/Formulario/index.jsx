import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import image_form from '../../assets/form-image.svg'
import logo_form from '../../assets/logo-form.svg'


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
            <div>
                <img src={logo_form} alt="logo Rub" className='imagem-logo'/>
                <img src={image_form} alt="imagem representativa de email" className='imagem-email'/>
            </div>
            <section className='formulario formatacao' >
                <form onSubmit={aoSalvar}> 
                <h2 className='segundo-titulo'>Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
                    <CampoTexto 
                    required={true} 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />

                    <CampoTexto 
                    required={true} 
                    placeholder="Digite seu Email - exemplo@exemplo.com"
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                    />

                    <p>O Banco Digital perfeito para você!</p>

                    <div className='container-botao'>
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