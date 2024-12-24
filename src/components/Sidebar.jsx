import React from 'react';
import { FaHome } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaSearchLocation } from "react-icons/fa";


import { IoLogoGithub } from "react-icons/io";
import Categories from './Categories';
import Parana from './Parana';

function Sidebar() {
  return (
    <>
      {/* Sidebar */}
      <div className='sidebar'>
        <label></label>
        <input type="text" id="Name" name="Name" />
        <ul>
          <li>
            
            <a href='#'>
              <FaHome /> Inicio
            </a>
          </li>
          <li>
            <a href='#'>
              <FiMapPin /> Mapa
            </a>
          </li>
          <li>
            <a href='#'>
              <FaSearchLocation /> Buscar
            </a>
          </li>
          <li>
            <a href='#'>
              
              <Categories />
            </a>
          </li>
          <li>
            <a href='#'> 
            
             <Parana />
            </a>
          </li>
          <li>
            <a href='#'>
              <IoLogoGithub /> Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Mapa */}
      <div id='map' className='map'></div>
    </>
  );
}

export default Sidebar;
