import {connect} from 'react-redux';

import {CartList} from '../../components'
import {increment,decrement} from '../../redux/actions'
export default connect(
    (state=>({list:state.CartList})),
    {
        increment,
        decrement
    }
)(CartList)