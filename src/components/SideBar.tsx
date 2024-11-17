import closeIcon from '../assets/icons/xmark-solid.svg';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarObjectValue } from '../state/sidebarObjectState';
import { popupStateValue, closePopup } from '../state/popupStateSlice';

export const SideBar = () => {
  const sidebarObject = useSelector(sidebarObjectValue);
  const popupState = useSelector(popupStateValue);
  const dispatch = useDispatch();
  
  return (
    <div className={`container bg-white z-50 w-96 h-screen fixed top-0 left-0 border-2 border-solid border-x-orange-700 ${popupState ? 'translate-x-0' : '-translate-x-full'}`}>
      <img
        className='close-btn w-12 h-12 absolute top-2 right-2 cursor-pointer'
        src={closeIcon}
        alt='close-icon'
        onClick={() => dispatch(closePopup())}
      />
      {/* heading */}
      <h2 className='mt-36 text-center text-4xl'> Object Information </h2>

      <div className='side-bar-content text-2xl leading-10 mt-8 ml-6'>
        {/* single p */}
        <p>
          <span className='font-semibold underline'>Title:</span> {sidebarObject.title}
        </p>
        {/* single p */}
        <p>
          <span className='font-semibold underline'>Cost:</span> {sidebarObject.cost}
        </p>
        {/* single p */}
        <p>
          <span className='font-semibold underline'>Owner:</span> {sidebarObject.owner}
        </p>
        {/* single p */}
        {sidebarObject.insurance && (
          <p>
            <span className='font-semibold underline'>Insurance:</span> {sidebarObject.insurance}
          </p>
        )}
        {/* single p */}
        <p>
          <span className='font-semibold underline'>Estimated Damage:</span> {sidebarObject.estimatedDamage}
        </p>
      </div>
    </div>
  );
};
