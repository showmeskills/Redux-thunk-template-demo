import React,{Component} from 'react';
import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

export default class BlogList extends Component{
    static propTypes = {
        list: PropTypes.object.isRequired,
        startAxios:PropTypes.func.isRequired,
    }
    componentDidMount(){
        this.props.startAxios()
    }
    render(){
        const {list,isLoading,errMsg} = this.props.list
        const hasErr = Boolean(errMsg)
        return(
            <>
                {
                    isLoading? <div>loading....</div>:
                        <ul>
                            {
                               hasErr? <div>{errMsg}</div>: list.map(item=><BlogItem key={item.id} {...item}/>)
                            }
                        </ul>
                }

            </>
        )
    }
}