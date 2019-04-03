import data from '../mockData/routes.json';

export default function getRoutes(delay = 1000) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  }));
}
