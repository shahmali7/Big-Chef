import React from 'react'
import Slider from "react-slick";
import SliderData from '../../FakeApi/SliderData';
import "../style/slider.css"


const PageSlide = () => {
  return (
    <div className='slider'>
       <Slider>
          {
            SliderData.map((item)=>(
            <div className='slider-map' key={item.id}>
                  <div className='car-left'>
                    <h2>{item.title}</h2>
                    <p style={{color:"white"}}>{item.info}</p>
                    <button>Explore Food</button>
                 </div> 
                 <div className='car-right'>
                  <img src={item.image} alt='' className='car-image'/>
                 </div>
            </div>
          ))
          }
        </Slider>
    </div>
  )
}

export default PageSlide