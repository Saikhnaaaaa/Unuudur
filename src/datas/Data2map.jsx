import React, { useState } from 'react'

const Data2map = ({item}) => {
    const [show, setShow] = useState(false)
  return (
    <div className="h-24 bg-white my-2 flex justify-between items-center ">
        <img className="w-28 h-20 rounded-lg" src={item.image} alt="" />
        <div className="px-2 ">
            <p className="text-sm font-semibold">{show ? item.desc : item.desc.substr(0,62)}</p>
            <p className="text-sm text-gray-500">{item.min}</p>
        </div>
    </div>
  )
}

export default Data2map