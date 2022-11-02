import './Introducao.css'
import background from "./bgIntro.svg";
import celular from "../../assets/celulares.svg"

const Introducao = () => {
    return (
        <div className='introduction-container'>
 
            <div className="text">
                <h1>Escolha o Futuro... Comece a controlar sua vida Financeira com o RubBank!</h1>
                <p>
                    Alavanque sua vida financeira online. Sua conta RubBank 
                    será a solução para gastar, economizar, fazer orçamentos, investir e muito mais. Tudo de maneira
                    simples e prática.
                    A próxima geração dos Bancos Digitais!
                </p>
                <button className="btn btn-top btn-introduction">Baixar Agora</button>
            </div>

            <div className="img-introduction"  style={{ backgroundImage: `url(${background})`}}>
                <img src={celular} alt="Telas RubBank" />
            </div>
        </div>
        
    )

}

export default Introducao