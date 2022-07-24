import {createStore} from "redux"
import reducer from "./Reducers"
import { initialState } from "./Reducers/ItemDetails"

const store=createStore(reducer,initialState)
export default store