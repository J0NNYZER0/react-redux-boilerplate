import data from '../mockData/pricing.json';

export default function getPricing(delay = 1000) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  }));
}
