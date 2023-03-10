import logo from './logo.svg';
import './App.css';
import RenderizadoElementos from './components/RenderizadoElementos';
import ComponenteClase from './components/practicas/ComponenteClase'
import ComponenteFuncional from './components/ComponenteFuncional'
// import Propiedades from './components/propiedades/Propiedades';
import RenderizadoElementosRedesSociales from './components/RenderizadoElementosRedesSociales';
import { EventosClaseES6, EventosClaseES7, MasSobreEventos } from './components/EventosClase';
// import Componente from './components/Componente'
// import ComponenteFuncionalP from './components/practicas/ComponenteFuncionalP'
// import PropiedadesP from './components/practicas/propiedades/PropiedadesP'
// import Estado from './components/Estado'
// import Estados from './components/Estados';
// import RenderizadoCondicional from './components/RenderizadoCondicional';
import Padre from './components/ComunicacionEntreComponentes';
import CicloVida from './components/CicloVida';
//import AjaxApis from './components/AjaxApis';
import AjaxApisPractica from './components/practicas/AjaxApisPractica';
import ContadorHooks from './components/ContadorHooks';
import SesionHooks from './components/SesionHooks';
import UsoUseEffect from './components/UsoUseEffect';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import HooksPersonalizadoContador from './components/HooksPersonalizadoContador';
import TodoApp from './components/TodoApp';
import CounterApp from './components/CounterApp';
import CounterApp10 from './components/CounterApp10';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr/>
        <CounterApp10 />
        <hr />
        <CounterApp/>
        <hr/>
        <TodoApp />
        <hr/>
        <HooksPersonalizadoContador />
        <hr/>
        <HooksPersonalizados/>
        <hr/>
        <AjaxHooks/>
        <hr/>
        <RelojHooks/>
        <hr/>
        <UsoUseEffect />
        <hr/>
        <SesionHooks/>
        <hr/>
        <ContadorHooks />
        <hr></hr>
        <ComponenteClase saludo='Hola, estoy saludando desde una props'></ComponenteClase>
        <hr></hr>
        <ComponenteFuncional mensaje='Hola, estoy saludando desde una props. Soy un componente funcional'></ComponenteFuncional>
        <hr></hr>
        {/* <Propiedades 
          cadena='Este mensaje es una cadena'
          numero={28}
          booleano={true}
          array={[1,2,3,4,5]}
          objeto={{nombre: 'Michi', apellido: 'Melendez Vargas'}}
          funcion={(numero) => numero * numero}
          elementoReact={<i>Soy un elemento de React JS</i>}
          componenteReact={<ComponenteFuncional></ComponenteFuncional>}>
        </Propiedades> */}

        
        
        {/* <Componente msg='Hola, soy un componente de clase desde una prop'></Componente> */}
        {/* <ComponenteFuncionalP msg='Hola, soy un componente funcional desde una prop'></ComponenteFuncionalP>
        <PropiedadesP
          cadena='Esto es una cadena de texto'
          numero={28}
          booleano={false}
          arreglo={[1,2,3]}
          objeto={{nombre: 'Jose', correo: 'jose@gmail.com'}}
          elementoReact={<i>Esto es un elemento React</i>}
          funcion={(num) => num*num}
          componenteReact= {<Componente msg='Soy un componente pasado como prop'></Componente>}>
        </PropiedadesP> */}
        {/* <hr></hr>
        <Estado></Estado>
        <Estados></Estados>
        <hr></hr>
        <RenderizadoCondicional></RenderizadoCondicional> */}

        <RenderizadoElementos></RenderizadoElementos>
        <hr></hr>
          <RenderizadoElementosRedesSociales></RenderizadoElementosRedesSociales>
        <hr></hr>
        <EventosClaseES6></EventosClaseES6>
        <hr></hr>
        <EventosClaseES7></EventosClaseES7>
        <hr></hr>
        <MasSobreEventos></MasSobreEventos>
        <hr/>
        <Padre/>
        <hr/>
        <CicloVida/>
        <hr/>
        {/* <AjaxApis/> */}
        <AjaxApisPractica/>

        </section>
      </header>

    </div>
  );
}

export default App;
