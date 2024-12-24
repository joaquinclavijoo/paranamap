import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import 'leaflet/dist/leaflet.css';
import Map from './components/map';


function App() {
  

  return (
    <div>
        <h1> Mapa de Paraná</h1>


  <Sidebar />
  <Map />
  
    </div>
  )
}

export default App
