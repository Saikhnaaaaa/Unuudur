import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Data1 } from '../datas/Data';
import Datamap from '../datas/Datamap';
import { Data2 } from '../datas/Data2';
import Data2map from '../datas/Data2map';
import { Link } from 'react-router-dom';

const Body1 = () => {
  return (
    <div className="mr-20 h-[500px] bg-white ml-20 flex mb-4">
    <div className="w-3/4 h-full bg-white pb-5 overflow-hidden">
        <Carousel >
            {
                Data1.map((item, index) => {
                    return (
                        <Datamap className="flex fle justify-center items-center" key={index} item={item}/>
                    )
                })
            }
        </Carousel>
    </div>
    <div className="w-1/4 h-full bg-white pb-5 border-t-2 border-blue-600 ml-2">
        <div className="px-4 bg-white w-full h-10 flex justify-between items-center">
            <Link  to="/"><h2 className="font-semibold p-2">Шинэ мэдээ</h2></Link>
        </div>
        <div className="w-full  h-full overflow-hidden border-t-2">
            {
                Data2 && Data2.map((item, index) => {
                    return (
                        <Data2map key={index} item={item}/>
                    )
                })
            }
        </div>
    </div>
</div>
  )
}

export default Body1