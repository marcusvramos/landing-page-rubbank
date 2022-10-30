import './Banner.css'

const Banner =(props) => {
    return (
        <header className='banner'>
            <div className='imagem'>
                <img src="./imagens/banner.png" alt="Banner Principal da página RubBank"/>
            </div>
            {props.children}
        </header>
        
    )
}

export default Banner