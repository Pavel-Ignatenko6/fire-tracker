import { objectsUrl } from '../App';
import { Marker } from 'react-leaflet';
import { useFetchMapData } from '../hooks/useFetchMapData';

export const Markers = () => {
  return (
    <>
      {useFetchMapData(objectsUrl).map(
        singleMapObject =>
          singleMapObject.marker !== 'resourceMarker' && (
            <Marker
              key={singleMapObject.id}
              position={singleMapObject.coords}
              title={singleMapObject.title}
            ></Marker>
          )
      )}
    </>
  );
};
