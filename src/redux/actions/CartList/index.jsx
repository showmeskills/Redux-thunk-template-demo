import {INCREMENT_ACTION,DECREMENT_ACTION} from './actionType'

export const increment=(id)=>({type:INCREMENT_ACTION,data:id})
export const decrement=(id)=>({type:DECREMENT_ACTION,data:id})