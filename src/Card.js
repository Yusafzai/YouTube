import React from 'react'
import { GoVerified } from 'react-icons/go';

function Card({img1,imgs1,h1,hs1,v1,img2,imgs2,h2,hs2,v2,img3,imgs3,h3,hs3,v3,img4,imgs4,h4,hs4,v4}) {
    return (
        <div className="w-full h-64 flex mb-8">
            <div className="relative w-3/12 ml-8 mt-8 h-64">
                <a href="https://www.youtube.com/watch?v=TSUv8ZxhjYw"><img src={img1} alt=""/></a>
                <div className="flex">
                <div className="bg-red-400 rounded-full w-9 h-9 mt-2">
                <a href="/"><img className="rounded-full w-9 h-9" src={imgs1} alt=""/></a>
                </div>
                <a href="/"><h1 className="ml-2 mt-2 text-sm">{h1}</h1></a>
                </div>
                <div><h1 className="ml-11 -mt-4 text-gray-600">{hs1}</h1><GoVerified className="text-gray-400 ml-28 -mt-5" /></div>
                <div><h1 className="ml-11 mt-1 text-gray-600">{v1}</h1></div>
           </div>

           <div className="relative w-3/12 ml-4 mt-8 h-64">
                <a href="https://www.youtube.com/watch?v=TSUv8ZxhjYw"><img src={img2} alt=""/></a>
                <div className="flex">
                <div className="bg-red-400 rounded-full w-9 h-9 mt-2">
                <a href="/"><img className="rounded-full w-9 h-9" src={imgs2} alt=""/></a>
                </div>
                <a href="/"><h1 className="ml-2 mt-2 text-sm">{h2}</h1></a>
                </div>
                <div><h1 className="ml-11 -mt-4 text-gray-600">{hs2}</h1><GoVerified className="text-gray-400 ml-28 -mt-5" /></div>
                <div><h1 className="ml-11 mt-1 text-gray-600">{v2}</h1></div>
           </div>

           <div className="relative w-3/12 ml-4 mt-8 h-64">
           <a href="https://www.youtube.com/watch?v=TSUv8ZxhjYw"><img src={img3} alt=""/></a>
                <div className="flex">
                <div className="bg-red-400 rounded-full w-9 h-9 mt-2">
                <a href="/"><img className="rounded-full w-9 h-9" src={imgs3} alt=""/></a>
                </div>
                <a href="/"><h1 className="ml-2 mt-2 text-sm">{h3}</h1></a>
                </div>
                <div><h1 className="ml-11 -mt-4 text-gray-600">{hs3}</h1><GoVerified className="text-gray-400 ml-28 -mt-5" /></div>
                <div><h1 className="ml-11 mt-1 text-gray-600">{v3}</h1></div>
           </div>

           <div className="relative w-3/12 ml-4 mt-8 h-64 mr-24">
           <a href="https://www.youtube.com/watch?v=TSUv8ZxhjYw"><img src={img4} alt=""/></a>
                <div className="flex">
                <div className="bg-red-400 rounded-full w-9 h-9 mt-2">
                <a href="/"><img className="rounded-full w-9 h-9" src={imgs4} alt=""/></a>
                </div>
                <a href="/"><h1 className="ml-2 mt-2 text-sm">{h4}</h1></a>
                </div>
                <div><h1 className="ml-11 -mt-4 text-gray-600">{hs4}</h1><GoVerified className="text-gray-400 ml-28 -mt-5" /></div>
                <div><h1 className="ml-11 mt-1 text-gray-600">{v4}</h1></div>
           </div>
        </div>
    )
}

export default Card
