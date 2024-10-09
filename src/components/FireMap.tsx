import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapEvents } from './MapEvents';
import { getCenterFromlStorage } from '../helpers/handleLocalStorage';

export const FireMap = () => {
  return (
    <MapContainer
      center={getCenterFromlStorage()}
      zoom={12}
      keyboard={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MapEvents />
    </MapContainer>
  );
};
