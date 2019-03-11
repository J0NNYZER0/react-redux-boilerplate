import itemsDetailData from '../mockData/itemDetails.json';


export default function getItemDetails(delay = 1000) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(itemsDetailData);
    }, delay);
  }));
}
