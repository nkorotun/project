import {createStore, combineReducers} from 'redux';
import loginReducer from './reducers';

const rootReducer = combineReducers({loginReducer});

export const store = createStore(rootReducer);
