import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'



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
        
        <section className='formulario formatacao'>
            <form onSubmit={aoSalvar}> 
            <h2>Preencha o Formulário para ficar por dentro das novidades da RubBank!</h2>
                <CampoTexto 
                required={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                required={true} 
                label="Email" 
                placeholder="Digite seu Email - exemplo@exemplo.com"
                valor={email}
                aoAlterado={valor => setEmail(valor)}
                />

                 <Botao texto="Enviar Formulário">
                    Enviar Formulário
                </Botao>
            </form>
        </section>
    )
}

export default Formulario