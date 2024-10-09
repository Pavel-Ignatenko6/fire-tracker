import styles from './MapDisplay.module.css';
import { Switch } from './switch/Switch';
import { MapDisplayProps } from '../App';
import { FireMap } from './FireMap.tsx';
import { DamageMap } from './DamageMap.tsx';

export const MapDisplay = ({ mapDisplayClass, onToggle }: MapDisplayProps) => {
  return (
    <div className={styles['map-display']}>
      <div className={mapDisplayClass}>
        {mapDisplayClass === 'fire-map' && <FireMap />}
        {mapDisplayClass === 'damage-map' && <DamageMap />}
      </div>
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
