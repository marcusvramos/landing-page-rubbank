import './CampoTexto.css'

const CampoTexto = (props) => {

    return (
        <div className="campo-texto formatacao">
            <label>
                {props.label}
            </label>
            <input value={props.value} required={props.required} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto