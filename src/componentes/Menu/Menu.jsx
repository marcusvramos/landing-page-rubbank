import './Menu.css'

const Menu = () => {
    return (
        <nav className='menu'>
            <div>
                <img src="logo-rub.svg" alt="Logo RubBank" />
            </div>

            <div className='list'>
                <ul>
                    <li>Home</li>
                    <li>Sobre Nós</li>
                    <li>Contato</li>
                </ul>
            </div>

            <div>
                <button>Cadastre-se</button>
            </div>

        </nav>
    )
}

export default Menu