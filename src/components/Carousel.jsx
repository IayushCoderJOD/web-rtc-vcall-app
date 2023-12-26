import React, { useState } from 'react'
import { carousel_img } from '../constants/CarouselImageLinks'

const Carousel = () => {
  const [index,setIndex]=useState(0)
  return (
    <div className=' p-12 flex'>
      <h1 onClick={()=>{
        if(index===0){
          setIndex(carousel_img.length-1);
          return;
        }
        setIndex(prev=>prev-1)
      }}  className='mt-32 text-3xl cursor-pointer  mr-12 '>⬅</h1>
      <img className='h-72' src={carousel_img[index]} alt="" />
      <h1 onClick={()=>{
        if(index===2){
          setIndex(0);
          return;
        }
        setIndex(prev=>prev+1)
      }} className='mt-32  text-3xl  cursor-pointer ml-12  ' >➡️</h1>
    </div>
  )
}

export default Carousel