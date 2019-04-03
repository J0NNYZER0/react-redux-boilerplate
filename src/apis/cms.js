import data from '../mockData/cms.json';
const delay = 1000;

export function getCms() {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  }));
}

export function addSection(section) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  }));
}

export function repositionSection(currPos,newPos) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  }));
}

export function addArea(area) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  }));
}
