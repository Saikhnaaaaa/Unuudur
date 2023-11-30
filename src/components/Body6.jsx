import React from 'react'

import { Image6 } from '../datas/Image6'

const Body6 = () => {
  return (
    <div className="mr-20 h-[300px] bg-white ml-20 flex justify-between items-center mb-4">
                    <div  className="w-1/2 mr-4 bg-white h-full rounded-lg relative">
                        <h1 className="text-2xl text-blue-600 font-semibold pb-4">Санал асуулга</h1>
                        <h1 className="text-md font-semibold text-black">Х.НЯМБААТАР: Зүүн дөрвөн замаас Баруун дөрвөн зам, 32-ийн тойргоос Энхтайваны гүүр хүртэлх авто замыг төлбөртэй бүс болгоно... Та дэмжиж байна уу?</h1>
                    </div>
                    <div style={{backgroundImage:`url(${Image6.image})`, backgroundRepeat:'no-repeat', contain:'content', backgroundSize:'cover'}} className="w-1/2 bg-gray-500 h-full rounded-lg relative">
                        
                    </div>
            </div>
  )
}

export default Body6