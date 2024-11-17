import { useMapEvents } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { openPopup, closePopup } from '../state/popupStateSlice';

export const MapEvents = () => {
  const dispatch = useDispatch();
  const map = useMapEvents({
    // change center coords when map is moved
    moveend: () => {
      localStorage.setItem('centerCoords', JSON.stringify(map.getCenter()));
      localStorage.setItem('zoom', JSON.stringify(map.getZoom()));
    },
    popupopen: () => {
      dispatch(openPopup());
    },
    popupclose: () => {
      dispatch(closePopup());
    },
  });
  return null;
};
