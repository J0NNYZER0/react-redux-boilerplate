import data from '../mockData/chat.json';
const delay = 1000;

export function getChat() {
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
