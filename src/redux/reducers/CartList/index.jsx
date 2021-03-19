import {INCREMENT,DECREMENT} from '../../actions/CartList/actionType'


const initState = [
    {
        id:0,
        title:'apple',
        price:10,
        amount:0,
    },
    {
        id:1,
        title:'orange',
        price:10,
        amount:0,
    }
]


export const CartList = (state=initState,action)=>{
        switch(action.type){
            case INCREMENT:
                return state.map(item=>{
                    if(item.id === action.id){
                        item.amount +=1
                    }
                    return item
                })
            case DECREMENT:
                return state.map(item=>{
                    if(item.id === action.id){
                        item.amount -=1
                    }
                    return item
                })
            default:
                return state;
        }
}