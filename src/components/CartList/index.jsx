import React,{Component} from 'react'
import PropTypes from 'prop-types';
export default class CartList extends Component {
    static propTypes = {
        list:PropTypes.array.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired
    }
    render(){
        const {list,increment,decrement} = this.props;
        return(
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(item=>{
                            return(
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <th>{item.title}</th>
                                    <th>{item.price}</th>
                                    <th>
                                        <button
                                            onClick={()=>increment(item.id)}
                                        >+</button>
                                        <span>{item.amount}</span>
                                        <button
                                             onClick={()=>decrement(item.id)}
                                        >-</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}