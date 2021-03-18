import React,{Component} from 'react'

import {CartList} from './components'

export default class App extends Component{
    render() {
    
        return(
            <>
                <h1>this is redux demo</h1>
                <CartList/>
            </>
        )
    }
}