import './Introducao.css'
import background from "./bgIntro.svg";

const Introducao = () => {
    return (
        <div className='introduction-container'>
 
            <div class="text">
                <h1>Escolha o Futuro... Comece a controlar sua vida Financeira com o RubBank!</h1>
                <p>
                    Alavanque sua vida financeira online. Sua conta RubBank 
                    será a solução para gastar, economizar, fazer orçamentos, investir e muito mais. Tudo de maneira
                    simples e prática.
                    A próxima geração dos Bancos Digitais!
                </p>
                <button class="btn btn-top btn-introduction">Conhecer Mais</button>
            </div>

            <div class="img-introduction"  style={{ backgroundImage: `url(${background})` }}>
                <img src={require("../../assets/celulares.png")} alt="" />
            </div>
        </div>
    )

}

export default Introducao