import { createStore, applyMiddleware } from 'redux';

// para enxergar o reducer se precisar
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;