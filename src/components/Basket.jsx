import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {AiOutlineStar} from "react-icons/ai"
import "./style/basket.css"
import { removeBasketItem } from '../redux/Actions/ItemActions';
const BasketList=()=>{
  const state =useSelector((state)=>state.basketItems)
  const dispatch = useDispatch()
  const removeItem =(name)=>{
    console.log(name);
    dispatch(removeBasketItem(name))
  }
  console.log(state);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div className='basket-list'>
     <h1>Your Basket Items</h1>
    <div className='card-list'>
      {state.map((item,index)=>(
        <div key={index} className='Card'>
          <h2>{item.name}</h2>
          <img src={item.image} className="item-image" alt=''/>
          <div className='rate'>
            <span className='stars'><AiOutlineStar/></span>
            <span className='stars'><AiOutlineStar/></span>
            <span className='stars'><AiOutlineStar/></span>
            <span className='stars'><AiOutlineStar/></span>
            <span className='stars'><AiOutlineStar/></span>
          </div>
          <p>{truncate(item?.info, 80)}</p>
          <h3>${item.cost}</h3>
          <div className='buttons'>
              <button className='Order' onClick={()=>removeItem(item.name)}>Remove Item</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
const emptyCard = ()=>{
  return(
    <div className='basket-list'>
      <h1>You Have not got any Order</h1>
    </div>
  )
}

const Basket = () => {
  const state =useSelector((state)=>state.basketItems)
  const total = state.map((item)=>{
    return item.cost
  })
  const totalMoney=total.reduce((x,y)=>(x+y),0)
  console.log(totalMoney);
  return(
    <>
      {state.length===0 && emptyCard() }
      {state.length!==0 && BasketList() }
    </>
  )
}

export default Basket