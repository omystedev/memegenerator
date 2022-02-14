import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';


function App() {

  // Creamos useState por cada linea e imagen
  const[linea1, setLinea1] = useState('');
  const[linea2, setLinea2] = useState('');
  const[imagen, setImagen] = useState('');

  //Creamos funciones onChange lineas
  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value);
  }
  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value);
  }
    
  //Creamos función onChange imagen
  const onChangeImagen = function(evento){
    setImagen(evento.target.value);
  }

//Creamos función onClick botón
const onClickExportar = function(evento){
  //añadimos código de libreria instalada para exportar imagen (HTML2CANVAS)
  html2canvas(document.querySelector("#meme")).then(canvas => {
    //Creamos una variable que convierta la imagen creada
    var img = canvas.toDataURL("image/png");

    //generamos un link de la imagen para descargar
    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img;
    link.click();
  });
}


  return (
    <div className="App">
      <h1> Generador de Memes</h1>

      {/* Select picker de memes */}
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br />

      {/* Caja de texto, cuando se modifique el nombre llamará a la función */}
      <input onChange={onChangeLinea1} type="text" placeholder="linea arriba"/> <br />
      <input onChange={onChangeLinea2} type="text" placeholder="linea abajo"/> <br />
      
      {/* Boton exportar */}
      <button onClick={onClickExportar}>Descargar Meme</button>

      {/* Estructura del meme */}
      <div className="meme" id="meme">
          {/* Input text - Primera linea */}
          <span>{linea1}</span> <br />

          {/* Input text - Segunda linea */}
          <span>{linea2}</span>

          {/* Imagen del meme */}
          <img src={"/img/" + imagen + ".jpg"} />
      </div>

    </div>
  );
}

export default App;
