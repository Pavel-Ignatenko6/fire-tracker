import { Outlet } from 'react-router-dom';
import searchIcon from '../assets/icons/magnifying-glass-location-solid.svg';

export const Layout = () => {
  return (
    <div className='layout-container min-h-screen w-full flex flex-col items-center justify-between'>
      <div className='header w-screen text-center border border-gray-400'>
        <h1 className='text-4xl mb-2'>Fire Tracker</h1>
      </div>
      {/* search bar */}
      <div className='flex-item city-search flex justify-around p-2 rounded-3xl shadow-[2px_3px_5px_.5px_rgba(0,0,0,0.5)] drop-shadow-md]'>
        <input
          type='text'
          className='outline-none h-10 text-2xl'
        />
        {/* search button */}
        <div className='icon-background w-10 h-10 bg-green-500 rounded-full flex justify-center ml-3 cursor-pointer transition hover:bg-green-400 active:scale-90'>
          <img
            className='search-icon w-6'
            src={searchIcon}
            alt='search icon'
          />
        </div>
      </div>
      {/* main content */}
      <div className='flex-item content'>
        <Outlet />
      </div>
      <div className='flex-item footer w-screen text-center border border-gray-400 m-0'>
        <span className=''>
          Developed by{' '}
          <a
            className='text-blue-700 font-semibold'
            href='https://github.com/Pavel-Ignatenko6'
          >
            Pavel Ignatenko
          </a>
        </span>
      </div>
    </div>
  );
};
