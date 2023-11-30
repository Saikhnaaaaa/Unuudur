import React from 'react'
import { Image4 } from '../datas/Image4'
import { Image5 } from '../datas/Image5'
import { Link } from 'react-router-dom'

const Body5 = () => {
  return (
    <div className="mr-20 h-[300px] bg-white ml-20 flex justify-between items-center mb-4">
                    <div style={{backgroundImage:`url(${Image4.img})`, backgroundRepeat:'no-repeat', contain:'content', backgroundSize:'cover'}} className="w-1/2 mr-4 bg-red-500 h-full rounded-lg relative">
                        <Link to="/">
                            <h1 className="absolute bottom-10 left-8 text-2xl font-semibold text-white">ХААН Дэд сайдын сонгуулийн синдром эхэлжээ</h1>
                        </Link>
                    </div>
                    <div style={{backgroundImage:`url(${Image5.img})`, backgroundRepeat:'no-repeat', contain:'content', backgroundSize:'cover'}} className="w-1/2 bg-gray-500 h-full rounded-lg relative">
                        <Link to="/">
                            <h1 className="absolute bottom-10 left-8 text-2xl font-semibold text-white">ХААН У.АНУ: “Зул”-аа Б.Шарав гуайн гэгээн дурсгалд зориулж тоглоно</h1>
                        </Link>
                    </div>
            </div>
  )
}

export default Body5