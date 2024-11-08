import { useMapEvents } from 'react-leaflet';

export const MapEvents = () => {
  const map = useMapEvents({
    // change center coords when map is moved
    moveend: () => {
      localStorage.setItem('centerCoords', JSON.stringify(map.getCenter()));
      localStorage.setItem('zoom', JSON.stringify(map.getZoom()));
    },
  });
  return null;
};
