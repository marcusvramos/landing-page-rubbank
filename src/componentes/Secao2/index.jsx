import './Secao2.css'
import icon01 from "../../assets/caract01.svg"
import icon02 from "../../assets/caract02.svg"
import icon03 from "../../assets/caract03.svg"
import icon04 from "../../assets/caract04.svg"

const Secao2 = () => {

    const data = new Date();
    const ano = data.getFullYear()

    return (
        <div className="container-escolha">
            <div className="text2">    
                <h2>Porque Escolher o RubBank?</h2>
                <p className='texto-descritivo'>O Banco Digital desenvolvido por Pessosas para Pessoas... Sabemos de suas necessidades e criamos o RubBank para soluciona-las!</p>
            </div>
            <div className="cards-container">
                <div className="cards">
                    <img className="img-cards" src={icon01} alt='Qualidades RubBank' />
                    <span className='title'>Abertura Digital</span>
                    <p>De qualquer lugar, abra sua conta com poucos cliques! Venha fazer parte você também desta comunidade! A facilidade e qualidade que você precisa estão aqui!</p>
                </div>

                <div className="cards">
                    <img className="img-cards" src={icon02} alt='Qualidades RubBank'/>
                    <span className='title'>Tudo pelo app</span>
                    <p>Todas as nossas ferramentas e serviços na palma de sua mão. Faça transferências instantâneas a qualquer hora. Sem burocracia!</p>
                </div>

                <div className="cards">
                    <img className="img-cards" src={icon03} alt='Qualidades RubBank' />
                    <span className='title'>Moeda Digital</span>
                    <p>A mais nova Moeda Digital! Garanta Já suas Rub Coins... Segurança, sem taxa de manutenção das contas e nem tarifas. Somos eficientes, oferecemos justamente o que você precisa!</p>

                </div>

                <div className="cards">
                    <img className="img-cards" src={icon04} alt='Qualidades RubBank' />
                    <span className='title'>Praticidade</span>
                    <p>O fim da complexidade! Em pleno {ano}, a tecnologia e a praticidade nas aplicações são melhores do que agências e papeladas...</p>
                </div>

                
            </div>

        </div>

    )

}

export default Secao2