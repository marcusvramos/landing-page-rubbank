import './Botao.css'



const Botao = (props) => {
    return (
        <div className='container'>
            <button className='botao'>
                {props.children}
            </button>
        </div>
            
    )
}

export default Botao