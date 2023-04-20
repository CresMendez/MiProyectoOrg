
import './Campo.css'

const Campo = (props)=>{// props propiedades de los componentes, si manda un string podemos usar metodos como to uppercase
    
    //const [valor, actualizarValor] = useState("")

    const placeholderModificado=`${props.placeholder}...`

    //Destructuracion
    const { type ="text" }=props

    const manejarCambio= (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio} 
        type={type} 
        >  
        </input>
    </div>
}

export default Campo