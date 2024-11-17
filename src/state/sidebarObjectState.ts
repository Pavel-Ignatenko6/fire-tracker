import {createSlice} from '@reduxjs/toolkit';

export const sidebarObjectSlice = createSlice({
  name: 'sidebarObject',
  initialState: {
    id: '',
    marker: '',
    coords: [],
    title: '',
    cost: 0,
    owner: '',
    insurance: null,
    estimatedDamage: 0,
  },
  reducers: {
    setSidebarObject: (state, action) => {
      state.id = action.payload.id;
      state.marker = action.payload.marker;
      state.coords = action.payload.coords;
      state.title = action.payload.title;
      state.cost = action.payload.cost;
      state.owner = action.payload.owner;
      state.insurance = action.payload.insurance;
      state.estimatedDamage = action.payload.estimatedDamage;
    }
  },
});

export const { setSidebarObject } = sidebarObjectSlice.actions;
export default sidebarObjectSlice.reducer;

export const sidebarObjectValue = (state: any): any => state.sidebarObject;