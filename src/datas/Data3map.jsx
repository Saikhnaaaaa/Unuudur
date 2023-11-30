import React, { useState } from 'react'

const Data3map = ({item}) => {
    const [show, setShow] = useState(false)
  return (
    <div className="relative bg-gray-800">
        <img className="h-56 w-[326px] rounded-md opacity-60" src={item.image} alt="" />
        <h1 className="absolute bottom-4 left-4 text-xl font-bold text-white p-4">{show? item.title: item.title.substr(0,40)}..</h1>
    </div>
  )
}

export default Data3map