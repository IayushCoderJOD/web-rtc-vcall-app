import React from 'react'
import Button from '../constants/Button'
import { Link } from 'react-router-dom'

const AppOptions = () => {
  return (
    <div className='pt-12 pl-7' >
        <h1 className='font-normal text-gray-800 text-5xl' >Premium video meetings.</h1>
        <h1 className='font-normal text-gray-800 pt-2 text-4xl'> Now free for everyone.</h1>
        <p className='font-serif  text-gray-500 text-xl pt-6' >
        We re-engineered the service that we built for secure <br></br>  business meetings, Google Meet, to make it free and <br></br>  available for all.
        </p>
        <div className='flex'>
        <Link to="/call" >
        <Button  text="Join Meeting"/>
        </Link>
        <input  className='h-15  ml-12 text-xl border border-black rounded-lg shadow-lg p-1 mt-12' type="text" placeholder='Not working rn..😟' />
        </div>
        <br /><br />
        <hr />
    </div>
  )
}

export default AppOptions