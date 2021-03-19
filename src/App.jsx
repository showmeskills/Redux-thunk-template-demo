import React,{Component} from 'react'
 
import {CartList,BlogList} from './containers'


export default class App extends Component{

    render() {
        return(
            <>
                <h1>Redux demo</h1>
                <div>
                    <h1>demo one - local request</h1>
                    <CartList/>
                </div>
                <div>
                    <h1>demo two - async redux request</h1>
                    <BlogList/>
                </div>
            </>
        )
    }
}