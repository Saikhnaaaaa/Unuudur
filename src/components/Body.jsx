import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

import Body2 from './Body2';
import Body1 from './Body1';
import Body3 from './Body3';

import Body4 from './Body4';

import Body5 from './Body5';
import Body6 from './Body6';



const Body = () => {
  return (
    <div className="w-full bg-white">
            <Body1/>
            
            <Body2/>
            
            <div className="mr-20 h-24  bg-white ml-20 flex justify-between items-center">
                <Link to="/">
                    <h2 className=" text-2xl text-blue-700 font-semibold">Видео</h2>
                </Link>
                <Link className="flex justify-center items-center " to="/">
                    <h2 className=" text-lg  pr-2">Дэлгэрэнгүй</h2>
                    <ChevronRightIcon className="w-5 h-5 "/>
                </Link>
            </div>
            <Body3/>
           
            <div className="mr-20 h-16 bg-white ml-20 flex justify-between items-center">
                <Link to="/">
                    <h2 className=" text-2xl text-blue-700 font-semibold">Эрэлттэй мэдээ</h2>
                </Link>
                <Link className="flex justify-center items-center " to="/">
                    <h2 className=" text-lg  pr-2">Дэлгэрэнгүй</h2>
                    <ChevronRightIcon className="w-5 h-5 "/>
                </Link>
            </div>
            <Body4/>
            
            <div className="mr-20 h-16 bg-white ml-20 flex justify-between items-center">
                <Link to="/">
                    <h2 className=" text-2xl text-blue-700 font-semibold">Нийтлэл</h2>
                </Link>
                <Link to="/">
                    <h2 className=" text-2xl text-blue-700 font-semibold mr-[460px]">Ярилцлага</h2>
                </Link>
            </div>
            <Body5/>
            <Body6/>
           
        </div>
  )
}

export default Body