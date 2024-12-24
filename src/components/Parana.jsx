import React, { useState } from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";

const Parana = () => {
  // Estado para controlar si la información está visible
  const [showInfo, setShowInfo] = useState(false);

  // Función para alternar el estado
  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="parana">
      {/* Botón o encabezado para mostrar/ocultar */}
      <div 
        onClick={handleClick} 
        style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}
      >
       <IoMdInformationCircleOutline /> {showInfo ? 'Ocultar Información' : 'Sobre Paraná'}
        
      </div>

      {/* Contenido que se muestra al hacer clic */}
      {showInfo && (
        <p>
          En el diseño de este mapa, se ha optado por incluir información específica sobre los barrios de emergencia de Paraná, con el propósito de proporcionar un enfoque integral y realista de la ciudad. Estos barrios representan una parte significativa de la dinámica social y cultural local, y su inclusión busca destacar su relevancia dentro del entramado urbano.

La información está dirigida a turistas y visitantes.
         
        </p>
      )}
    </div>
  );
};

export default Parana;

