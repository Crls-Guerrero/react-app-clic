import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import clickBanner from'./img/click-banner.png';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = ()=>{
    setNumClics(numClics + 1);
  }; 
  const reinicarContador = ()=>{
    setNumClics(0);
  };
  return (
    <div className='App'>
      <div className='contenedor'>
        <img
          className='contenedor-logo'
          src={clickBanner}
          alt='logo del contenedor'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Boton
        texto='Reiniciar Clic'
        esBotonDeClic={false}
        manejarClic={reinicarContador}
        />
      </div>
    </div>
  );
}

export default App;
