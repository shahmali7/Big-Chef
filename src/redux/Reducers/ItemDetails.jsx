import DataApi from "../../FakeApi/DataApi";
import { ActionTypes } from "../contain/ActionTypes";

export const initialState= {
    items: DataApi,
    basketItems: [],
    searchData : []
}

export const itemReducer =(state=initialState,action)=>{
    
    switch(action.type){
        case ActionTypes.Add_Basket_Item:
            
            return {
                ...state,
                basketItems:[...state.basketItems, action.payload.item]
            }
        
        case ActionTypes.Remove_Basket_Item:
            return{
                ...state,
                basketItems:state.basketItems.filter((item)=>{
                    return item.name !== action.payload.name
                })
            }
        default:
            return state
    }
}