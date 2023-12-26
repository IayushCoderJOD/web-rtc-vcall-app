import React, { useCallback, useState } from 'react'
import Button from '../constants/Button'
import { Link } from 'react-router-dom'


const VideoCallLobby = () => {

  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');

  const handleSubmitForm=useCallback((e)=>{
    e.preventDefault();
    console.log({
      email,room
    })
  },[])


  return (
    <div>
      <Link to="/" >
        <button className='m-2 p-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-xl' > Go back</button>
      </Link>
      <div className=' pl-12 ml-[600px] rounded-lg shadow-2xl w-[20%] bg-opacity-20 p-8  bg-black flex flex-col justify-center' >
        <form onSubmit={handleSubmitForm}  >
          <h1 className='text-3xl pb-3 font-semibold text-blue-900'>Enter The Lobby</h1>
          <label className=' text-xl font-serif' >Email Address: </label>
          <br />
          <input className=' p-1 border border-black' type="email" placeholder='Enter your email' id='email' value={email}
            onChange={e => setEmail(e.target.value)}
            name='email' />
          <br />
          <br />
          <label className=' text-xl font-serif' >Room id: </label>
          <br />
          <input className=' p-1 border border-black'
            value={room}
            onChange={e => setRoom(e.target.value)}
            id='room'
            type="text" placeholder='Enter your room id' name='room' />
            <br />
            <button className='bg-blue-950 mt-6 ml- text-white p-2 text-sm rounded-lg shadow-xl  hover:bg-blue-900 '  type='submit' >Enter the room</button>
        </form>
      </div>
    </div>
  )
}

export default VideoCallLobby