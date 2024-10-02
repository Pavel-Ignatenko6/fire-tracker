import { ReactNode } from 'react';
import styles from './MapDisplay.module.css';
import { Switch } from './switch/Switch';

interface MapDisplayProps {
  mapDisplayClass: string;
  onToggle: () => void;
  handleMapChange: () => ReactNode;
}

export const MapDisplay = ({ mapDisplayClass, onToggle, handleMapChange }: MapDisplayProps) => {
  return (
    <div className={styles['map-display']}>
      <div className={mapDisplayClass}>{handleMapChange()}</div>
      <div className={styles['map-switch-container']}>
        <span className={`${styles['flex-item']} ${styles['map-option']}`}>Prediction</span>
        <div className={`${styles['flex-item']}`}>
          <Switch
            rounded={true}
            mapDisplayClass={mapDisplayClass}
            onToggle={onToggle}
          />
        </div>
        <span className={`${styles['flex-item']} ${styles['map-option']}`}>Damage</span>
      </div>
    </div>
  );
};
