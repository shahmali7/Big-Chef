import React from 'react'
import {MdOutlineAddShoppingCart} from "react-icons/md"
import DataApi from '../../FakeApi/DataApi'
import { useDispatch } from "react-redux";
import { addBasketItem } from '../../redux/Actions/ItemActions'


const RiceMenu = () => {
  const dispatch =useDispatch()
  const addItemBasket =(item)=>{
    dispatch(addBasketItem(item))
  }
  const ricemenu = DataApi.filter((item)=>(
    item.type === "RiceMenu"
  ))
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div className='card-list'>
      {ricemenu.map((item,index)=>(
        <div key={index} className='Card'>
          <h3>{item.name}</h3>
          <img src={item.image} className="item-image" alt=''/>
          <p>{truncate(item?.info, 80)}</p>
          <h3>${item.cost}</h3>
          <div className='buttons'>
              <button className='Order' >Order item</button>
              <button className='adder' onClick={()=>addItemBasket(item)}>
                 <MdOutlineAddShoppingCart/>
              </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RiceMenu