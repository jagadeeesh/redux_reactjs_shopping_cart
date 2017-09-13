import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';
import { browserHistory } from 'react-router';
import productsData from './data/products';
import cartReducer from './reducers/cart';
import productsReducer from './reducers/products';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  routing: routerReducer
});

let store = createStore(
  rootReducer,
  {
    products: productsData // initial store values,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
