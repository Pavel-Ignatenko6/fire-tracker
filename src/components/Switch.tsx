import { SwitchProps } from '../App';

// Custom Switch ToogMapDisplayPropsle Button
export const Switch = ({ rounded = false, mapDisplayClass, onToggle }: SwitchProps) => {
  return (
    <label className='switch relative inline-block w-20 h-9'>
      <input
        className='checkbox opacity-0 w-0 h-0'
        type='checkbox'
        checked={mapDisplayClass === 'fire-map' ? false : true}
        onChange={onToggle}
      />
      <span
        className={`slider absolute top-0 left-0 right-0 bottom-0  transition-all duration-500 ease-in-out before:absolute before:content-[''] before:w-7 before:h-7 before:left-1 before:bottom-1 before:bg-white before:duration-500 before:ease-in-out  
          ${mapDisplayClass === 'fire-map' ? 'bg-[#2196F3]' : 'bg-[#cf0b0b] before:translate-x-11'} 
          ${rounded ? 'rounded-full before:rounded-2xl' : ''}`}
      />
    </label>
  );
};
