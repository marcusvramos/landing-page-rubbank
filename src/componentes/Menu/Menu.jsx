import './Menu.css'

const Menu = () => {
    return (
        <nav className='menu formatacao'>
            <div>
                <img src="logo-rub.svg" alt="Logo RubBank" />
            </div>

            <div className='list'>
                <ul>
                    <a href="#sobre-nos">
                        <li>Sobre Nós</li>
                    </a>
                    <a href="#form-contato">
                        <li>Contato</li>
                    </a>
                </ul>
                
                <button>Baixar RubBank</button>
            </div>

           
          

        </nav>
    )
}

export default Menu