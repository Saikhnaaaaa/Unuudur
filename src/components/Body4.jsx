import React from 'react'
import { ImageData } from '../datas/ImageData'
import { Image2 } from '../datas/Image2'
import { Image3 } from '../datas/Image3'
import { Link } from 'react-router-dom'

const Body4 = () => {
  return (
    <div className=" mr-20 h-[500px] bg-white ml-20 flex justify-between items-center">
                    <div style={{backgroundImage:`url(${ImageData.image})`, backgroundRepeat:'no-repeat', contain:'content', backgroundSize:'cover'}} className="w-2/3 h-full bg-white bg-gradient-to-b from-white to-black rounded-lg relative my-2">
                        <Link to="/">
                            <h1 className="absolute bottom-10 left-8 text-2xl font-semibold text-white">ХААН Банкнаас зохион байгуулсан анхны нээлттэй “Хакатон 2023”-ын ялагчид тодорлоо</h1>
                        </Link>
                    </div>
                    <div className="h-full w-1/3 p-2 py-2 flex-col justify-center items-center gap-2">
                        <div style={{backgroundImage:`url(${Image2.image})`, backgroundRepeat:'no-repeat', contain:'content', backgroundSize:'cover'}} className=" pb-2 w-full h-1/2 bg-green-500 relative rounded-lg  ">
                            <Link to="/">
                             <h1 className="absolute bottom-10 left-8 text-lg font-semibold text-white">Цаг агаарын улмаас Мандалговь-Даланзадгад чиглэлийн замын хөдөлгөөнийг хаав</h1>
                            </Link>
                        </div>
                        <div style={{backgroundImage:`url(${Image3.image})`, backgroundRepeat:'no-repeat', contain:'content', backgroundSize:'cover'}} className=" p-2 w-full h-1/2 bg-green-500 relative rounded-lg  ">
                            <Link to="/">
                            <h1 className="absolute bottom-10 left-8 text-lg font-semibold text-white">Соёлын өвөө сохор зоосоор арилжигсдад тооцох хариуцлага жулдаж байна</h1>
                            </Link>
                        </div>
                    </div>
            </div>
  )
}

export default Body4