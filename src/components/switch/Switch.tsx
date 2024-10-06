import styles from './Switch.module.css';
import { SwitchProps } from '../../App';

// Custom Switch ToogMapDisplayPropsle Button
export const Switch = ({ rounded = false, mapDisplayClass, onToggle }: SwitchProps) => {
  return (
    <label className={styles.switch}>
      <input
        className={styles.checkbox}
        type='checkbox'
        checked={mapDisplayClass === 'fire-map' ? false : true}
        onChange={onToggle}
      />
      <span className={`${styles.slider} ${rounded ? styles.rounded : ''}`} />
    </label>
  );
};
