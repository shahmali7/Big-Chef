import { ActionTypes } from "../contain/ActionTypes";

export const addBasketItem =(item)=>{
    return{
        type : ActionTypes.Add_Basket_Item,
        payload: { item },
        
    }
}
export const removeBasketItem =(name)=>{
    return{
        type: ActionTypes.Remove_Basket_Item,
        payload: { name }
    }
}
