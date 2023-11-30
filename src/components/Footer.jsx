import React from 'react'
import { FooterData } from '../datas/FooterData'

const Footer = () => {
  return (
    <div>
            <div className="w-full h-[400px] bg-yellow-400  flex-col justify-between items-center ">
                <div className="h-3/5 bg-gray-200 w-full flex justify-evenly items-center">
                    {FooterData && FooterData.map((item, index) => {
                      return ( 
                        <div className=" pt-10 w-60 h-full bg-gray-200  " key={index}>
                            <h1 className="w-60 h-10 bg-gray-200 border-b-4 font-normal text-lg  border-blue-600">{item.name}</h1>
                            <p className="py-4">{item.title}</p>
                        </div>
                      )
                    })}
                </div>
                <div className="h-2/5 bg-gray-500 w-full">

                </div>
            </div>
        </div>
  )
}

export default Footer