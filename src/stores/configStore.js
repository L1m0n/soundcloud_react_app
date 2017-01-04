import {createStore, applyMiddleware } from 'redux';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers/index';
import {browserHistory} from 'react-router';
import createLogger from 'redux-logger';


const logger = createLogger();
const router = routerMiddleware(browserHistory);

const createStoreWithMiddleware = applyMiddleware(router, logger)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
}

