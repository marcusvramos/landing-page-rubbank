import './Introducao.css'
import celular from "../../assets/celulares.svg"
import Botao from '../Botao';



const Introducao = () => {
    return (
        <div className='introduction-container' id="inicio-landing">
 
            <div className="text formatacao">
                <h1>Escolha o Futuro... Comece a controlar sua vida Financeira com o RubBank!</h1>
                <p className='p-introducao'>
                    Alavanque sua vida financeira online. Sua conta RubBank 
                    será a solução para gastar, economizar, fazer orçamentos, investir e muito mais. Tudo de maneira
                    simples e prática.
                    A próxima geração dos Bancos Digitais!
                </p>
                <div className="botao-intro">
                    <Botao >Baixar Agora</Botao>
                </div>
            </div>

            <div className="img-introduction">
                <img id="celulares" src={celular} alt="Telas RubBank" />
            </div>
        </div>
        
    )

}

export default Introducao