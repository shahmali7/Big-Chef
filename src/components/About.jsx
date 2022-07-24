import React from 'react'
import  './style/About.css'

const About = () => {
  return (
    <div className='About'>
      <div className='About-us'>
        <div className='About-info'>
           <h2>What Our Customers are saying</h2>
           <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia deserunt nihil laborum sunt inventore exercitationem adipisci quasi,   sint placeat cum voluptatibus accusamus aliquid, praesentium delectus aliquam architecto dolores in laudantium itaque recusandae, a   fugiat explicabo? Placeat, assumenda. Quo qui et impedit error minus, dicta ad in soluta, provident blanditiis eaque.
           </p>
        </div>
        <div>
          <img className='about-image' src='https://raw.githubusercontent.com/muhib160/React-Food-Restaurant-Webite/Getting-start/src/assets/images/review1.png' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default About