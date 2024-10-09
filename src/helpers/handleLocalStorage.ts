export const getCenterFromlStorage = (): [number, number] =>
  localStorage.getItem('centerCoords') ? JSON.parse(localStorage.getItem('centerCoords')!) : [34.057124, -118.388622];
