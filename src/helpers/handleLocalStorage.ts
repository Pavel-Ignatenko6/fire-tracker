export const getCenterFromStorage = (): [number, number] => {
  const stored = localStorage.getItem('centerCoords');
  return stored ? JSON.parse(stored!) : [40.281417784856544, 9.625139236450195];
};

export const getZoomFromStorage = (): number => {
  const stored = localStorage.getItem('zoom');
  return stored ? JSON.parse(stored!) : 16;
}
