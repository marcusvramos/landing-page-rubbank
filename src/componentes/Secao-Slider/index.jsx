import Slider from '../Slider';
import{SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import './SecaoSlider.css'

import icon01 from "../../assets/caract01.svg"
import icon02 from "../../assets/caract02.svg"
import icon03 from "../../assets/caract03.svg"
import icon04 from "../../assets/caract04.svg"

const SecaoSlider = () =>{

    const data = new Date();
    const ano = data.getFullYear()

    const settings = {
        slidesPerView: 1,
        loop: true,
        breakpoints: {
            // when window width is >= 580px
            580: {
              slidesPerView: 2,
              spaceBetween: 20
            },
        },
        navigation: true,
        pagination: {
          clickable: true
        },
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
    
    }
    
    return (
        <div className='container-slider'>
            <div className="text2">
                <h2>Porque Escolher o RubBank?</h2>
                <p className='texto-descritivo'>O Banco Digital desenvolvido por Pessoas para Pessoas... Sabemos de suas necessidades e criamos o RubBank para solucioná-las!</p>
            </div>
            <Slider settings={settings} className="slider-hidden">
                    <SwiperSlide>
                    <div className="cards">
                            <img className="img-cards" src={icon01} alt='Qualidades RubBank' />
                            <span className='title'>Abertura Digital</span>
                            <p className='p-cards'>De qualquer lugar, abra sua conta com poucos cliques! Venha fazer parte você também desta comunidade! A facilidade e qualidade que você precisa estão aqui!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="cards">
                            <img className="img-cards" src={icon02} alt='Qualidades RubBank'/>
                            <span className='title'>Tudo pelo app</span>
                            <p className='p-cards'>Todas as nossas ferramentas e serviços na palma de sua mão. Faça transferências instantâneas a qualquer hora. Sem burocracia!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="cards">
                            <img className="img-cards" src={icon03} alt='Qualidades RubBank' />
                            <span className='title'>Moeda Digital</span>
                            <p className='p-cards'>A mais nova Moeda Digital! Garanta Já suas Rub Coins... Segurança, sem taxa de manutenção das contas e nem tarifas. Somos eficientes, oferecemos justamente o que você precisa!</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="cards">
                            <img className="img-cards" src={icon04} alt='Qualidades RubBank' />
                            <span className='title'>Praticidade</span>
                            <p className='p-cards'>O fim da complexidade! Em pleno {ano}, a tecnologia e a praticidade nas aplicações são melhores do que agências e papeladas...</p>
                        </div>
                    </SwiperSlide>
                </Slider>
        </div>
    )
}

export default SecaoSlider