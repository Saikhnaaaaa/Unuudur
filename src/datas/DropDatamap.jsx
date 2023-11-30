import React from 'react'

const DropDatamap = ({item}) => {
  return (
    <div className=" w-[300px] h-[400px] flex-col justify-evenly items-center">

        <div className="px-10 pb-2 font-semibold text-blue-600 text-[24px]">{item.name}</div>
        {
            item.title && item.title.map((item, index) =>{
                return (
                    <div className="px-10 py-[2px] text-md" key={index}>{item.desc}</div>
                )
            })
        }
    </div>
  )
}

export default DropDatamap