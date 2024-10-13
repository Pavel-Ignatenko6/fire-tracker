export const getCenterFromStorage = (): [number, number] => {
  const stored = localStorage.getItem('centerCoords');
  return stored ? JSON.parse(stored!) : [34.057124, -118.388622];
};

export const getZoomFromStorage = (): number => {
  const stored = localStorage.getItem('zoom');
  return stored ? JSON.parse(stored!) : 12;
}
