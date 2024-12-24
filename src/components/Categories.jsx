import React, { useState } from 'react';
import { MdOutlineCategory } from "react-icons/md";

const Categories = () => {
  const [showCategories, setShowCategories] = useState(false);

  const handleClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="categories">
      {/* Este div maneja el evento onClick */}
      <div 
        className="category-header" 
        onClick={handleClick} 
        style={{ cursor: 'pointer', fontWeight: 'bold' }}
      >
        <MdOutlineCategory />{showCategories ? 'Ocultar Categorías' : 'Categorías'}
        
      </div>

      {showCategories && (
        <ul>
          <li>Barrios de Emergencia (marcado con azul)</li>
          
        </ul>
      )}
    </div>
  );
};

export default Categories;


