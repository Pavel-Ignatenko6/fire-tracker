export const getCenterFromStorage = (): [number, number] => {
  const stored = localStorage.getItem('centerCoords');
  return stored ? JSON.parse(stored!) : [35.448564647910466, -83.47715950025304];
};

export const getZoomFromStorage = (): number => {
  const stored = localStorage.getItem('zoom');
  return stored ? JSON.parse(stored!) : 16;
}
