import './Botao.css'



const Botao = (props) => {
    return (
        <div className='container'>
            <button className='botao formatacao'>
                {props.children}
            </button>
        </div>
            
    )
}

export default Botao