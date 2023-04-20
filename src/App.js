
import {useState} from "react" //usarlo dentro de ocmponente o funcion
import { v4 as uuidv4} from 'uuid'
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";


function App() {

  const [mostrarFormulario, actualizarMostrar]=useState(false)
  const [colaboradores, actualizarColaboradores]=useState([{
    id: uuidv4(),
    equipo: "Programacion",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:false
  },
  {
    id: uuidv4(),
    equipo: "FrontEnd",
    foto: "https://github.com/CresMendez.png",
    nombre: "Crescencio Mendez",
    puesto: "Desarrollador de software",
    fav:true
  },
  {
    id: uuidv4(),
    equipo: "Programacion",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id: uuidv4(),
    equipo: "UX y Deseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id: uuidv4(),
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id: uuidv4(),
    equipo: "Innovacion y Gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  }])

  const [equipos, actualizarEquipos]= useState([

    {
      id: uuidv4(),
      titulo:"FrontEnd",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo:"UX y Deseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovacion y Gestion",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
])

  //ternario --> condicion ? seMuestra : noSeMuestra
  //otra forma para condicionar--> condicion && seMuestra
  const cambiarMostrar= ()=>{
    actualizarMostrar(!mostrarFormulario)
  }
  //Registra colaborardor
  const RegistrarColaborador=(colaborador)=>{
    console.log("nuevo colaborador", colaborador)
    //Spread operator, hace una copia del arreglo
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador (no entendi bien esta parte de eliminar por que la condicion dice diferente de?)
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores =colaboradores.filter((colaborador)=>colaborador.id !==id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })
   actualizarEquipos(equiposActualizados)
  }

  //Crear nuevo Equipo
  const crearEquipo =(nuevoEquipo)=>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4() }])//una copia con tres puntitos, y luego le agrega un nuevo objeto que tome los datos del nuevo equipo como una  copia
    //no le entiendo a lo de arriba, lo de las copias
  }
  
  const like = (id) =>{
    console.log("like ",id)
    const colaboradoresActualizadoslike=colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizadoslike)
  }
  
  return (
    <div>
      <Header/>
      {/*mostrarFormulario===true ? <Formulario/> : <></>*/}     
      {mostrarFormulario && <Formulario 
      equipos={equipos.map( (equipo)=> equipo.titulo )} 
      RegistrarColaborador={RegistrarColaborador}
      crearEquipo={crearEquipo}
      />} 

      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      {
        //mejorado enviando equipo 
        equipos.map( (equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)//map tiene que llevar siempre una key | nombre -> funcion

      }
      <Footer></Footer>

      {/*
      
                      
        //para recorrer un arreglo,  map recibe datos y regresa un nuevo arreglo
       // equipos.map( (equipo)=>{//equipo es el objeto que se esta llamando puede ser el nombre cualquiera
       //   return <Equipo datos={equipo} key={equipo.titulo}></Equipo>//map tiene que llevar siempre una key
       // } )
       
       <Equipo equipo="Programacion"></Equipo>
      <Equipo equipo="Front End"></Equipo>
      <Equipo equipo="Data Science"></Equipo>
      <Equipo equipo="Devops"></Equipo>
      <Equipo equipo="UX y Diseño"></Equipo>
      <Equipo equipo="Móvil"></Equipo>
  <Equipo equipo="Innovación y  Gestión"></Equipo>*/}
    </div>
  );
}

export default App;
