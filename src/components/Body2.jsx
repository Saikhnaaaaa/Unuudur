import React from 'react'
import { Data3 } from '../datas/Data3'
import image2 from '../assets/2.png'
import Data3map from '../datas/Data3map'

const Body2 = () => {
  return (
    <div className="mr-20 h-[500px] ml-20 flex">
                <div className="w-5/6  flex-row ">
                        <div className="h-1/2 w-full bg-white flex justify-between items-center">
                            <div className="h-full   flex-row justify-evenly items-center">
                                <h1 className=" text-3xl font-bold px-6 pt-10">Ж.Ганбат дахин Эрдэнэс тавантолгойг удирдана</h1>
                                <p className="text-sm px-6 pt-5">Засгийн газрын ээлжит хуралдаан Төрийн ордонд боллоо. Энэ хуралдааны үеэр Эрдэнэс Тавантолгой ХК-д тогтоосон Онцгой дэглэмийг дахин зургаан сараар сунгаж, Бүрэн эрх төлөөлөгчөөр Сангийн яамны..</p>
                            </div>
                            
                                <img className="h-full bg-cover" src={image2} alt="" />
                            
                            
                        </div>
                        <div className="h-1/2 w-full bg-white flex justify-between items-center">
                            {Data3 && Data3.map((item,index) => {
                                return (
                                    <Data3map key={index} item={item}/>
                                )
                            })}
                        </div>
                </div>
                <div className="w-1/6 bg-yellow-700">
                    
                </div>
            </div>
  )
}

export default Body2