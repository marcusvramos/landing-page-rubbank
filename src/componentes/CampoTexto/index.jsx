import './CampoTexto.css'

const CampoTexto = (props) => {

    return (
        <div className="campo-texto formatacao">
            <label>
                {props.label}
            </label>
            <input required={props.required}  placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto