import { Switch } from './Switch.tsx';
import { MapDisplayProps } from '../App';
import { FireMap } from './FireMap.tsx';
import { DamageMap } from './DamageMap.tsx';

export const MapDisplay = ({ mapDisplayClass, onToggle }: MapDisplayProps) => {
  return (
    <div className='map-display flex flex-col items-center justify-between p-4 shadow-xl shadow-black/20'>
      <div className={mapDisplayClass}>
        {mapDisplayClass === 'fire-map' && <FireMap />}
        {mapDisplayClass === 'damage-map' && <DamageMap />}
      </div>
      <div className='map-switch-container w-full h-20 flex items-center justify-center [&>*]:ml-6 text-3xl '>
        <span>Prediction</span>
        <div>
          <Switch
            rounded={true}
            mapDisplayClass={mapDisplayClass}
            onToggle={onToggle}
          />
        </div>
        <span>Damage</span>
      </div>
    </div>
  );
};
