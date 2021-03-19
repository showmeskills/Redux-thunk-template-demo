import {combineReducers} from 'redux';

import {CartList} from './CartList'
import {BlogList} from './BlogList'

export default combineReducers({
    CartList,
    BlogList
})