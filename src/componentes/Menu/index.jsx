import './Menu.css'

const Menu = () => {

    

    return (
        <nav className='menu formatacao'>
            <div>
                <a href="#home"><img src="logo-rub.svg" alt="Logo RubBank" /></a>
            </div>

            <div className='list'>
                <ul>
                    <a href="#sobre-nos">
                        <li id="sobre">Sobre Nós</li>
                    </a>
                    <a href="#form-contato">
                        <li id="contato">Contato</li>
                    </a>
                </ul>
                
                <button className='button'>Baixar RubBank</button>

                <button className='button-hide'>Baixar App</button>
            </div>

           
          

        </nav>
    )
}

export default Menu