import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import pricing from './pricing';
import itemDetails from './itemDetails';

export default history => combineReducers({
  router: connectRouter(history),
  pricing,
  itemDetails,
});
