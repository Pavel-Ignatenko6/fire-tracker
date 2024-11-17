import { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  buildsValue,
  resourcesValue,
  FireExtinguishingAgentsValue,
  addBuilds,
  addResources,
  addFireExtinguishingAgents,
} from '../state/mapObjectsSlice';

export const useFetchMapData = (url: string) => {
  const dispatch = useDispatch();
  const builds = useSelector(buildsValue);
  const resources = useSelector(resourcesValue);
  const fireExtinguishingAgents = useSelector(FireExtinguishingAgentsValue);
  const mapData = { builds, resources, fireExtinguishingAgents };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const mapData = await response.json();

      const { builds, resources, fireExtinguishingAgents } = mapData;
      dispatch(addBuilds(builds));
      dispatch(addResources(resources));
      dispatch(addFireExtinguishingAgents(fireExtinguishingAgents));
    }
    fetchData();
  }, []);

  const mapObjects = Object.values(mapData).flat();
  return mapObjects;
};
