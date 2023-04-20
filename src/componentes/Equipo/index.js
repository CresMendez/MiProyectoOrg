import "./Equipo.css"
import Colaborador from "../Colaborador"
import  hexToRgba from 'hex-to-rgba' //libreria para opacidad

const Equipo = (props)=>{
    //Destructuracion  color secundario lo eliminados
    const { colorPrimario,  titulo, id } = props.datos//es como decir colorprimario es igual a props.datos.colorprimario
    const {colaboradores, eliminarColaborador, actualizarColor, like}=props


    const obj={backgroundColor:hexToRgba(colorPrimario, 0.6)}
    const estiloTitulo={borderColor:colorPrimario} 

    //es un objeto el color, este es otra forma, return <section className="equipo" style={{backgroundColor:"#000"}}>
    return <> 
            { colaboradores.length>0 && 
            <section className="equipo" style={obj}>
                <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento)=>{
                    actualizarColor(evento.target.value, id)
                }}
                />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
            
                {
                colaboradores.map( (colaborador, index)=> <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario} 
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
                }
            </div>
            </section>
            }
        </>
}

export default Equipo