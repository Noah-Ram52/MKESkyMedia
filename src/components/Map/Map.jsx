import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import { MAP_LOCATION } from '../../utils/location';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Map() {
  const { lat, lon, name } = MAP_LOCATION;
  const [mapType, setMapType] = useState('map');

  return (
    <section className="map">
      <div className="map__toggle">
        <button
          className={mapType === 'map' ? 'map__toggle-button active' : 'map__toggle-button'}
          onClick={() => setMapType('map')}
        >
          Map
        </button>
        <button
          className={mapType === 'satellite' ? 'map__toggle-button active' : 'map__toggle-button'}
          onClick={() => setMapType('satellite')}
        >
          Satellite
        </button>
      </div>

      <MapContainer
        center={[lat, lon]}
        zoom={16}
        style={{ width: '100%', height: '700px' }}
        className="map__container"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url={
            mapType === 'satellite'
              ? 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
              : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          }
        />
        <Marker position={[lat, lon]} icon={defaultIcon}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;