import { createSlice } from '@reduxjs/toolkit';
import { MapObject } from '../App';

export const markersSlice = createSlice({
  name: 'markers',
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

export const { addBuilds, addResources, addFireExtinguishingAgents } = markersSlice.actions;
export default markersSlice.reducer;

export const buildsValue = (state: any): MapObject[] => state.markers.builds;
export const resourcesValue = (state: any): MapObject[] => state.markers.resources;
export const FireExtinguishingAgentsValue = (state: any): MapObject[] => state.markers.fireExtinguishingAgents;
