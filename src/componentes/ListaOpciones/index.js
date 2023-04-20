import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //metodo map -> arreglo.map( (equipo, index) => {
//      return <option></option>
    //})
    /*const equipos =[
        "Programacion",
        "FrontEnd",
        "Data Science",
        "Devops",
        "UX y Deseño",
        "Movil",
        "Innovacion y Gestion"
    ]*/

    const manejarCambio = (e) =>{
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map( (equipo, index) =>{
                return <option key={index} value={equipo}> {equipo} </option>
            })}
        </select>
    </div>
}

export default ListaOpciones