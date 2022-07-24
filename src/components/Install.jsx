import React from 'react'
import "./style/Download.css"
import {AiFillApple} from "react-icons/ai"
import {FaGooglePlay} from "react-icons/fa"

const Install = () => {
  return (
    <div className='Download'>
      <img className='d-image' src='https://raw.githubusercontent.com/muhib160/React-Food-Restaurant-Webite/Getting-start/src/assets/images/app.png' alt=''/>
      <div className='download-content'>
        <h3>Download Our App</h3>
        <p className='first'><strong>Never Feel Hungry!<br/>Download Our Mobile App <br/>Order Delicious Food</strong></p>
        <p>          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia deserunt nihil laborum sunt inventore exercitationem adipisci quasi, sint placeat cum voluptatibus accusamus aliquid, praesentium delectus aliquam architecto dolores in laudantium itaque recusandae, a fugiat explicabo? Placeat, assumenda. Quo qui et impedit error minus, dicta ad in soluta, provident blanditiis eaque.
        </p>
        <div className='Buttons-app'>
          <button className='iphone'><AiFillApple/> App Store</button>
          <button className='market'><FaGooglePlay/> Play Market</button>
        </div>
      </div>
    </div>
  )
}

export default Install