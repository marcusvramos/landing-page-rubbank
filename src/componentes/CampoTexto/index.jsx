import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={aoDigitado} /*a cada mudança no input eu chamo a função*/required={props.required} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto