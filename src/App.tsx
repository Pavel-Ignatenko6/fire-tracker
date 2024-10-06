import { ReactNode } from 'react';
import { useState } from 'react';
import './App.css';
// components
import { MapDisplay } from './components/MapDisplay.tsx';
import { FireMap } from './components/FireMap.tsx';
import { DamageMap } from './components/DamageMap.tsx';

export interface MapDisplayProps {
  mapDisplayClass: string;
  onToggle: () => void;
  handleMapChange: () => ReactNode;
}

export interface SwitchProps {
  mapDisplayClass: string;
  onToggle: () => void;
  rounded: boolean;
}
// функция возвращающая объект на будущее :)
// export const renderObjects = () => {
//   return {
//     hotels: [
//       {
//         name: 'The Maybourne Beverly Hills',
//         geocode: [34.067719, -118.398949],
//         owner: '...',
//         description: '...',
//          
//       },
//     ],
//     restaurants: [],
//     hospitals: [],
//     policeStations: [],
//     fireStations: [],
//     gasStations: [],
//   };
// }

function App() {
  const [mapDisplayClass, setMapDisplayClass] = useState('fire-map');

  // toggle map using switch in MapDisplay component
  const onToggle = () => setMapDisplayClass(mapDisplayClass === 'fire-map' ? 'damage-map' : 'fire-map');
  // change the map when map class changes
  const handleMapChange = () => (mapDisplayClass === 'fire-map' ? <FireMap 
  
  /> 
  : 
  <DamageMap 
  
  />);
  return (
    <>
      <MapDisplay
        mapDisplayClass={mapDisplayClass}
        onToggle={onToggle}
        handleMapChange={handleMapChange}
      />
    </>
  );
}

export default App;
