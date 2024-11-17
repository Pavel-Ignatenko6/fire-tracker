import { useState } from 'react';
import './App.css';
// components
import { MapDisplay } from './components/MapDisplay.tsx';
import { SideBar } from './components/SideBar.tsx';

// URLs
export const baseUrl = 'http://localhost:5001';
const objects = '/objects';

export const objectsUrl = `${baseUrl}${objects}`;

export interface MapDisplayProps {
  mapDisplayClass: string;
  onToggle: () => void;
}

export interface SwitchProps {
  mapDisplayClass: string;
  onToggle: () => void;
  rounded: boolean;
}

export interface MapObject {
  id: string;
  marker: string;
  coords: [number, number];
  title: string;
  cost: number;
  insuarance: number | null;
}

function App() {
  const [mapDisplayClass, setMapDisplayClass] = useState('fire-map');

  // toggle map using switch in MapDisplay component
  const onToggle = () => setMapDisplayClass(mapDisplayClass === 'fire-map' ? 'damage-map' : 'fire-map');
  // change the map when map class changes
  return (
    <>
      <MapDisplay
        mapDisplayClass={mapDisplayClass}
        onToggle={onToggle}
      />
      <SideBar />
    </>
  );
}

export default App;
