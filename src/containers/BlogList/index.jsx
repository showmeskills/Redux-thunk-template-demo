import {connect} from 'react-redux';
import {BlogList} from '../../components'

import {startAxios} from '../../redux/actions'

export default connect(
    state=>({list:state.BlogList}),
    {
        startAxios
    }
)(BlogList)