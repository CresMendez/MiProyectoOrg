//import {useState} from "react"
import "./MiOrg.css"
const MiOrg=(props)=>{
    //estado - hooks
    //useState
    //useState() ->es una funcion
    //sintaxis const[nombreVariable, funcionActualiza] = useState(valorinicial)
    //const [mostrar, actualizarMostrar] = useState(true)

    //mostrar/ocultarFormulario
    /*const manejarClick =()=>{
        console.log("mostrar/ocultar", !mostrar)
        actualizarMostrar(!mostrar)
    }*/

    //etiques html
    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/BotonAdd.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg