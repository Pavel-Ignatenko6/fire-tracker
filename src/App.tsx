import { useState } from 'react';
import './App.css';
// components
import { MapDisplay } from './components/MapDisplay.tsx';
import { FireMap } from './components/FireMap.tsx';
import { DamageMap } from './components/DamageMap.tsx';

function App() {
  const [mapDisplayClass, setMapDisplayClass] = useState('fire-map');

  // toggle map using switch in MapDisplay component
  const onToggle = () => setMapDisplayClass(mapDisplayClass === 'fire-map' ? 'damage-map' : 'fire-map');
  // change the map when map class changes
  const handleMapChange = () => (mapDisplayClass === 'fire-map' ? <FireMap /> : <DamageMap />);
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
