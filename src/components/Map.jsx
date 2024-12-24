import React, { useEffect } from 'react';
import L from 'leaflet';

const Map = () => {
  useEffect(() => {
    // Inicializar el mapa
    const map = L.map('map').setView([-31.7319, -60.5238], 13);

    // Cargar los tiles de OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregar un marcador con un popup
    L.marker([-31.722611, -60.519161])
      .addTo(map)
      .bindPopup('Barrio Macarone.')
      .openPopup();

      L.marker([-31.7544, -60.5236])
      .addTo(map)
      .bindPopup('Cortada 351.')
      .openPopup();

      L.marker([-31.7315, -60.5175])
      .addTo(map)
      .bindPopup('Villa Huesito.')
      .openPopup();

      L.marker([-31.74697990282341, -60.530135506564335])
      .addTo(map)
      .bindPopup('La Pasarella.')
      .openPopup();

      L.marker([-31.7650, -60.5400])
      .addTo(map)
      .bindPopup('El Perejil.')
      .openPopup();

      L.marker([-31.7933, -60.4897])
      .addTo(map)
      .bindPopup('Villa de Emergencia El Radar.')
      .openPopup();

      L.marker([-31.728059697280212, -60.505851149424785])
      .addTo(map)
      .bindPopup('Villa Yatay.')
      .openPopup();

      L.marker([-31.745350074928634, -60.557343091664904])
      .addTo(map)
      .bindPopup('Anacleto Medina')
      .openPopup();

      L.marker([-31.72502749584045, -60.54801086652857])
      .addTo(map)
      .bindPopup('Barrio Humito')
      .openPopup();

      L.marker([-31.74419692777543, -60.529811450347296])
      .addTo(map)
      .bindPopup('Barrio Santa Rita.')
      .openPopup();

      L.marker([-31.77155319657233, -60.493701521646166])
      .addTo(map)
      .bindPopup('Barrio El Triángulo')
      .openPopup();

      L.marker([-31.750936533517052, -60.48728776112036])
      .addTo(map)
      .bindPopup('Barrio Lomas del Mirador 1.')
      .openPopup();

      L.marker([-31.74996796497279, -60.49183141375343])
      .addTo(map)
      .bindPopup('La Milagrosa')
      .openPopup();

      L.marker([-31.7800, -60.5500])
      .addTo(map)
      .bindPopup('Barrio Atraa')
      .openPopup();

      L.marker([-31.775668774606448, -60.515253780298835])
      .addTo(map)
      .bindPopup('Barrio A.S.S.V.E.R.')
      .openPopup();

      L.marker([-31.719924423460046, -60.50737315865044])
      .addTo(map)
      .bindPopup('Villa Almendral.')
      .openPopup();

      L.marker([-31.71894672719691, -60.51562911498776])
      .addTo(map)
      .bindPopup('El Morro.')
      .openPopup();
    // Limpia el mapa al desmontar el componente
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{ height: '500px', width: '100%' }} // Ajusta las dimensiones del mapa
    ></div>
  );
};

export default Map;
