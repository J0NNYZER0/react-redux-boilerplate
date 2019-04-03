import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import routes from './routes';
import cms from './cms';
import itemDetails from './itemDetails';
import pricing from './pricing';

export default history => combineReducers({
  router: connectRouter(history),
  routes,
  cms,
  itemDetails,
  pricing,
});
