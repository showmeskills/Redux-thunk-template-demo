import {INCREMENT_ACTION,DECREMENT_ACTION} from '../../actions/CartList/actionType'


const initState = [
    {
        id:1,
        title:'apples',
        price:10,
        amount:10
    },
    {
        id:2,
        title:'oranges',
        price:10,
        amount:10
    }
]

export const cart = (state=initState,action)=>{
        switch(action.type){
            case INCREMENT_ACTION:
                return state.map(item=>{
                    if(item.id === action.data){
                        item.amount+=1
                    }
                    return item;
                })
            case DECREMENT_ACTION:
                return state.map(item=>{
                    if(item.id === action.data){
                        item.amount-=1
                    }
                    return item;
                })
            default:
                return state
        }

}