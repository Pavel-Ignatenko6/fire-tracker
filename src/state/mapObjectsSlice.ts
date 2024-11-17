import { createSlice } from '@reduxjs/toolkit';
import { MapObject } from '../App';

export const mapObjectsSlice = createSlice({
  name: 'mapObjects',
  initialState: {
    builds: [],
    resources: [],
    fireExtinguishingAgents: [],
  },
  reducers: {
    addBuilds: (state, action) => {
      state.builds = action.payload;
    },
    addResources: (state, action) => {
      state.resources = action.payload;
    },
    addFireExtinguishingAgents: (state, action) => {
      state.fireExtinguishingAgents = action.payload;
    },
  },
});

export const { addBuilds, addResources, addFireExtinguishingAgents } = mapObjectsSlice.actions;
export default mapObjectsSlice.reducer;

export const buildsValue = (state: any): MapObject[] => state.mapObjects.builds;
export const resourcesValue = (state: any): MapObject[] => state.mapObjects.resources;
export const FireExtinguishingAgentsValue = (state: any): MapObject[] => state.mapObjects.fireExtinguishingAgents;
