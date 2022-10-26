import React from "react";
import "../styles/Boton.css"

function Boton({ texto, esBotonDEClic, manejarClic }) {
  return(
    <button
      className={esBotonDEClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;