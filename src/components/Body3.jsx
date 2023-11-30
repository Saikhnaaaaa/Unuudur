import React from 'react'
import { Data4 } from '../datas/Data4'
import Data4map from '../datas/Data4map'

const Body3 = () => {
  return (
    <div className="mr-20 h-[350px] bg-white ml-20 flex justify-between items-center">
        {
            Data4 && Data4.map((item,index )=> {
                return(
                    <Data4map key={index} item={item}/>
                )
            })
        }
    </div>
  )
}

export default Body3