import 'leaflet/dist/leaflet.css';
import styles from './FireMap.module.css';
import { MapContainer, TileLayer } from 'react-leaflet';

export const FireMap = () => {
  return (
    <MapContainer center={[7.099, 125.625]} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
};
