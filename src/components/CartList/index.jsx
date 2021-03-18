import React,{Component} from 'react';

import store from '../../redux/store'
import {increment,decrement} from '../../redux/actions'


export default class CartList extends Component {
    render() {
        const cartList = store.getState().cart
        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>price</th>
                        <th>amount</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            cartList.map(item=>{
                                return (
                                    <tr key={item.id}>
                                        <th>{item.id}</th>
                                        <th>{item.title}</th>
                                        <th>{item.price}</th>
                                        <th>
                                            <button
                                                onClick={()=>store.dispatch(increment(item.id))}
                                            >+</button>
                                            <span>{item.amount}</span>
                                            <button
                                                 onClick={()=>store.dispatch(decrement(item.id))}
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