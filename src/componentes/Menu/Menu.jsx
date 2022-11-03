import './Menu.css'

const Menu = () => {
    return (
        <nav className='menu'>
            <div>
                <img src="logo-rub.svg" alt="Logo RubBank" />
            </div>

            <div className='list'>
                <ul>
                    <li>Sobre Nós</li>
                    <li>Contato</li>
                </ul>
                
                <button>Baixar RubBank</button>
            </div>

           
          

        </nav>
    )
}

export default Menu