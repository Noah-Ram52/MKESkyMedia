import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import { MAP_LOCATION } from '../../utils/location';

function Map() {
  const { lat, lon, name } = MAP_LOCATION;
  const [mapType, setMapType] = useState('map');

  const [terrain, setTerrain] = useState(true);
  const [labels, setLabels] = useState(true);

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

        <Marker position={[lat, lon]}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;