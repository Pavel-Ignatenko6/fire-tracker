import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapEvents } from './MapEvents';
import { getCenterFromlStorage } from '../helpers/handleLocalStorage';

export const DamageMap = () => {
  return (
    <MapContainer
      center={getCenterFromlStorage()}
      zoom={12}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MapEvents />
    </MapContainer>
  );
};
