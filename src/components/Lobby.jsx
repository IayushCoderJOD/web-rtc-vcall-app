import React from 'react'
import AppOptions from './AppOptions'
import Carousel  from './Carousel'
// import Carousel from './Carousel'

const Lobby = () => {
  return (
    <div className='flex justify-between p-10' >
        <AppOptions/>
        <Carousel />
    </div>
  )
}

export default Lobby