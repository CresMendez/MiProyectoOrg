import {useState} from "react"
import "./formulario.css"
import Campo from "../Campo/CampoTexto" //podemos dejarlo como index y ya no es necesario poner el nombre del archivos
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const Formulario = (props) =>{

    const [nombre, actualizarNombre]=useState("")
    const [puesto, actualizarPuesto]=useState("")
    const [foto, actualizarFoto]=useState("")
    const [equipo, actualizarEquipo]=useState("")

    const [titulo, actualizarTitulo]=useState("")
    const [color, actualizarColor]=useState("")

    //reetructuracion
    const {RegistrarColaborador, crearEquipo}=props

    const manejarEnvio=(e)=>{
        e.preventDefault()
        let datosAEnviar={
            nombre: nombre, //esto
            puesto, //es lo mismo que esto
            foto,//es lo mismo que esto
            equipo
        }
        RegistrarColaborador(datosAEnviar)
    }
    const CrearNuevoEquipo = (e)=>{
        e.preventDefault()
         crearEquipo({titulo, colorPrimario:color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />
            <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
            valor={equipo} 
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton>Crear colaborador</Boton>
        </form>
        
        <form onSubmit={CrearNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo</h2>
            <Campo 
            titulo="Titulo" 
            placeholder="Ingresar Titulo" 
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo}
            />
            <Campo 
            titulo="Color" 
            placeholder="Ingresar el color en Hex" 
            required
            valor={color} 
            actualizarValor={actualizarColor}
            type="color"
            />
            <Boton>Crear Equipo</Boton>
        </form>
    </section>
}

export default Formulario