import {createStore, applyMiddleware} from 'redux';

import rootReducer from '../reducers';
import { middlewares } from './../configureStore';

export const storeFactory = (initialState) => {
  const createStoreWithMiddle = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddle(rootReducer, initialState);
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}