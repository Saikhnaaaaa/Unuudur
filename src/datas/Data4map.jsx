import React, { useState } from 'react'

const Data4map = ({item}) => {
    const [show, setShow] = useState(false)
  return (
    <div  className="relative w-1/2 h-full p-2 rounded-lg ">
        <img  className="w-full aspect-auto rounded-lg " src={item.image} alt="" />
        <h1 className="absolute bottom-6 left-4 text-xl font-bold text-gray-600 p-4">{show? item.title: item.title.substr(0,80)}..</h1>
    </div>
  )
}

export default Data4map