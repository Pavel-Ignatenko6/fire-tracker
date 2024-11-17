import { configureStore } from '@reduxjs/toolkit';
// reducers
import { mapObjectsSlice } from './mapObjectsSlice';
import { popupStateSlice } from './popupStateSlice';
import { sidebarObjectSlice } from './sidebarObjectState';

export const store = configureStore({
  reducer: {
    mapObjects: mapObjectsSlice.reducer,
    popupState: popupStateSlice.reducer,
    sidebarObject: sidebarObjectSlice.reducer,
  },
});
