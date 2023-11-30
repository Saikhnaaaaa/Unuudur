import React, { useState } from 'react'
import { HomeIcon, MagnifyingGlassIcon, Bars3Icon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { CloudIcon, CurrencyDollarIcon, XMarkIcon} from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { DropData } from '../datas/DropData'
import DropDatamap from '../datas/DropDatamap'

const Header = () => {
    const [isOpen,setIsOpen] = useState(false)


  return (
    <div className="w-full h-56  bg-white">
            <div className="flex h-1/3 justify-center items-center bg-white">
                <h3 className="text-black p-8 italic font-normal text-[15px]">Өчигдрөөс илүү маргаашийг</h3>
                <Link to="/">
                    <img src={logo} alt="" className="h-10"/>
                </Link>
                <h3 className="text-black p-8 italic font-normal text-[15px]">бүтээхийн төлөө</h3>
            </div>
            <div className="w-full h-1/3 bg-white flex justify-center items-center border-t-2 border-b-2 border-gray-400 border-opacity-40">
                <div className="w-2/3 ml-20 h-full bg-white flex justify-start items-center">
                    <div className="w-16 h-full border-l-2 flex items-center justify-center border-gray-400 border-opacity-40">
                        <HomeIcon className="h-6 w-6 text-blue-700"/>
                    </div>
                    <div className="w-16 h-full border-l-2 flex items-center justify-center border-gray-400 border-opacity-40">
                        <MagnifyingGlassIcon className="h-6 w-6 text-blue-700"/>
                    </div>
                    <div className="h-full border-l-2 border-gray-400 border-opacity-40 items-center justify-center flex ">
                        <ul className="flex justify-center items-center">
                            <li className="p-4"><p className="text-[16px]">Нийтлэл</p></li>
                            <li className="p-4"><p className="text-[16px]">Улс төр</p></li>
                            <li className="p-4"><p className="text-[16px]">Эдийн засаг</p></li>
                            <li className="p-4"><p className="text-[16px]">Нийгэм</p></li>
                            <li className="p-4"><p className="text-[16px]">Соёл Урлаг</p></li>
                            
                        </ul>
                    </div>
                    <div onClick={()=>setIsOpen((prev)=>!prev)} className=" relative w-16 h-full border-l-2 flex items-center justify-center border-gray-400 border-opacity-40 cursor-pointer duration-300">
                        {!isOpen ? <Bars3Icon className="h-8 w-8 text-blue-700"/> : <XMarkIcon className="h-8 w-8 text-blue-700"/>}
                        {isOpen && 
                        <div className="absolute top-20 left-[-700px] w-[1330px] h-[550px] bg-white z-20 flex justify-evenly items-center duration-500">
                            {
                                DropData && DropData.map((item, index) => {
                                    return ( 
                                            <DropDatamap key={index} item={item}/>
                                        
                                    )
                                })
                            }
                        </div>}
                    </div>
                </div>
                <div className="w-1/3 mr-20 h-full bg-white flex justify-center items-center">
                    <CalendarDaysIcon className="h-6 w-6 text-blue-700"/>
                    <h1 className="font-semibold text-lg p-6">11/29</h1>
                    <CloudIcon className="h-6 w-6 text-blue-700"/>
                    <h1 className="font-semibold text-lg p-6">-16</h1>
                    <CurrencyDollarIcon className="h-6 w-6 text-blue-700"/>
                    <h1 className="font-semibold text-lg p-6">3496.9$</h1>
                </div>
            </div>
            <div>

            </div>
        </div>
  )
}

export default Header