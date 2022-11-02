import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import image_form from '../../assets/form-image.svg'
import logo_form from '../../assets/logo-form.svg'
import background from './backGround.svg'




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
        <div className='container'>
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

                    <Botao texto="Enviar Formulário">
                        Enviar Formulário
                    </Botao>
                </form>
            </section>
        </div>
        
    )
}

export default Formulario