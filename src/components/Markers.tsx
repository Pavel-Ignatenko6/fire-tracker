import { useRef, useEffect } from 'react';
import { objectsUrl } from '../App';
import { Marker, Popup, useMap } from 'react-leaflet';
import { useFetchMapData } from '../hooks/useFetchMapData';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarObject } from '../state/sidebarObjectState';
import { popupStateValue } from '../state/popupStateSlice';

export const Markers = () => {
  const map = useMap();
  const mapObjects = useFetchMapData(objectsUrl);

  const dispatch = useDispatch();

  const popupRef = useRef(null);
  const popupState = useSelector(popupStateValue);

  // close popup when popupState is false
  useEffect(() => {
    if (!popupState) {
      map.closePopup();
    }
  });
  
  return (
    <>
      {mapObjects.map(
        singleMapObject =>
          singleMapObject.marker !== 'resourceMarker' && (
            <div
              className='marker-container h-2.5 w-2.5'
              key={singleMapObject.id}
            >
              <Marker
                key={singleMapObject.id}
                position={singleMapObject.coords}
                title={singleMapObject.title}
                // get mapObject data for sidebar on click v 
                eventHandlers={{
                  click: () => dispatch(setSidebarObject(singleMapObject)),
                }}
              >
                <Popup ref={popupRef}>
                  <p className='first-letter:capitalize text-base'>{singleMapObject.title}</p>
                </Popup>
              </Marker>
            </div>
          )
      )}
    </>
  );
};
