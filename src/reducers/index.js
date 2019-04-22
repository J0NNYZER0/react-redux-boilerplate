import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import routes from './routes';
import chat from './chat';

export default history => combineReducers({
  router: connectRouter(history),
  routes,
  chat,
});
