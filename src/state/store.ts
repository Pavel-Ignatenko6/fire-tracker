import { configureStore } from '@reduxjs/toolkit';
// reducers
import { markersSlice } from './MarkersSlice';

export const store = configureStore({
    reducer: {
        markers: markersSlice.reducer,
    },
})