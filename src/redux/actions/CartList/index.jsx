import {INCREMENT,DECREMENT} from './actionType'

export const increment=(id)=>({type:INCREMENT,id})
export const decrement=(id)=>({type:DECREMENT,id})