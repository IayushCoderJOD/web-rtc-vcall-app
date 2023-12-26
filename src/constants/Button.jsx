import React from 'react'

const Button = ({text}) => {
  return (
    <div className=" hover:shadow-2xl mt-12 p-2 text-xl bg-blue-600 w-40 rounded-md shadow-sm hover:bg-blue-700 cursor-pointer " >
        <h1 className='p-2 text-white' >{text}</h1>
    </div>
  )
}

export default Button