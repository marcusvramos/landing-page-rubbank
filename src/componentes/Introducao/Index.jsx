import './Introducao.css'
import background from "./bgIntro.svg";

const Introducao = () => {
    return (
        <div className='introduction-container'>
 
            <div class="text">
                <h1>A próxima geração dos Bancos Digitais</h1>
                <p>
                    Alavanque sua vida financeira online. Sua conta RubBank será a solução para gastar, economizar, fazer orçamentos, investir e muito mais.
                </p>
                <button class="btn btn-top btn-introduction">Conhecer Mais</button>
            </div>

            <div class="img-introduction"  style={{ backgroundImage: `url(${background})` }}>
                <img src="https://github.com/marcus-rubcube/rubcamp-landing-page/tree/main/public/imagens/celulares.png" alt="" />
            </div>
        </div>
    )

}

export default Introducao