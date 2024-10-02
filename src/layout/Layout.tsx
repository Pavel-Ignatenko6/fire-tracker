import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles['layout-container']}>
      <div className='header'>
        <h1>Fire Tracker</h1>
      </div>
      <div className='content'>
        <Outlet />
      </div>
      <div className='footer'>Footer</div>
    </div>
  );
}
