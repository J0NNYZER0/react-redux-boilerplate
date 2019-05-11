'use strict';
import userData from '../mockData/users.json';

const searchUsers = (delay = 1000) => {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(userData);
    }, delay);
  }));
}

export {
  searchUsers
}
