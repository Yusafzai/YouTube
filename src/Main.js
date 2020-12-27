import React from 'react';
import Logo from './images/1.jpg';
import Laga from './images/icon.jpg';
import { GoVerified } from 'react-icons/go';


function Main() {
    return (
        <div className="main w-full h-screen top-16 ml-20 fixed flex">
           <div className="relative w-72 ml-8 mt-8 h-64">
                <a href="https://www.youtube.com/watch?v=TSUv8ZxhjYw"><img src={Logo} alt=""/></a>
                <div className="flex">
                <div className="bg-red-400 rounded-full w-9 h-9 mt-2">
                <a href="/"><img className="rounded-full w-9 h-9" src={Laga} alt=""/></a>
                </div>
                <a href="/"><h1 className="ml-2 mt-2 text-sm">xQcOW Stream Highlights #233</h1></a>
                </div>
                <div><h1 className="ml-11 -mt-4 text-gray-600">xQcOW</h1><GoVerified className="text-gray-400 ml-28 -mt-5" /></div>
                <div><h1 className="ml-11 mt-1 text-gray-600">48K views &middot; 2 hours ago</h1></div>
           </div>

           <div className="bg-gray-500 relative w-72 ml-8 mt-8 h-64">
                <img src={Logo} alt=""/>
                <h1>Zwei</h1>
           </div>

           <div className="bg-gray-500 relative w-72 ml-8 mt-8 h-64">
                <img src={Logo} alt=""/>
                <h1>Drei</h1>
           </div>

           <div className="bg-gray-500 relative w-72 ml-8 mt-8 h-64">
                <img src={Logo} alt=""/>
                <h1>Vier</h1>
           </div>

        </div>
    )
}

export default Main

          
