//create store and thirdy middleware to observe thunk
import {createStore,applyMiddleware} from 'redux';

//for async redux request
import thunk from 'redux-thunk';

//after combineReducers 
import allReducers from './reducers'

//redux devtools 
import {composeWithDevTools} from 'redux-devtools-extension'


export default createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk)))