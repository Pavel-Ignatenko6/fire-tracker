import 'leaflet/dist/leaflet.css';
import styles from './FireMap.module.css';
import { MapContainer, TileLayer } from 'react-leaflet';

export const FireMap = () => {
  return (
    <MapContainer center={[34.057124, -118.388622]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
};
