import './Rodape.css'
import logo02 from '../../assets/logo-rubcube.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'


const Rodape = () => {

    const data = new Date();
    const ano = data.getFullYear();

    return (

        <footer className='rodape formatacao'>
            <div className='containerzao'>
                <div className='container-rodape'>
                    <img src={logo02} className="logo-rodape" alt="Logo RubCube" />
                </div>
                <div className='lista'>

                    <a href="https://www.instagram.com/rubcube.com.br/" target="_blank" rel="noreferrer"><img src={instagram} alt="Logo Instagram" /></a>
                    <a href="https://www.linkedin.com/company/rubcube" target="_blank" rel="noreferrer"><img src={linkedin} alt="Logo Linkedin" /></a>
                    <div className='container-downloads'>
                        <a href="https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&amp;hl=en" target="_blank" rel="noreferrer">
                            <img className="play-store" src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/google_play_store.svg" alt='PlayStore'/>
                        </a>
                        <a href="https://itunes.apple.com/us/app/bbc-news/id364147881?mt=8" target="_blank" rel="noreferrer">
                            <img className="app-store" src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/ios_app_store.svg" alt='AppleStore'/>
                        </a>
                    </div>

                </div>
            </div>
            <p className='texto-footer'>Copyright ©{ano} Todos os direitos reservados | Powered by <a href="https://www.rubcube.com/" target="_blank" rel="noreferrer">RubCube</a></p>
        </footer>
    )

}


export default Rodape