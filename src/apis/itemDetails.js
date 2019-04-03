import data from '../mockData/itemDetails.json';

export default function getItemsDetails(delay = 1000) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  }));
}
