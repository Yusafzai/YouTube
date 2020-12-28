import React from 'react';
import Logo from './images/brand.png';
import { BsFillBellFill } from 'react-icons/bs';
import { MdVideoCall } from 'react-icons/md';
import { MdApps } from 'react-icons/md';
import { VscMenu } from 'react-icons/vsc';

function Navbar() {
    return (
        <div className="nav w-full h-16 flex px-4 bg-gray-50 fixed z-40">
        
        <div className="ml-2 relative top-4">
         <a href="/"><VscMenu className="text-xl" /></a>
         </div>

        <div className="relative w-24 h-8 ml-6">
            <a href="/"><img className="relative top-4" src={Logo} alt="logo"/></a>
       </div>

         <div className="ml-48 top-0 w-1/2 left-8 relative">
              <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full relative top-2 focus:outline-none" type="text" placeholder="Search" />
         </div>
               
          <div className="flex absolute right-28 top-5">
            <a href="/"><MdVideoCall className="w-8 h-6 text-gray-600" /></a>
            <a href="/"><MdApps className="w-8 h-6 ml-6 text-gray-600" /></a>
            <a href="/"><BsFillBellFill className="w-8 h-5 relative top-0.5 ml-6 text-gray-600" /></a>
            </div>


          <div className="right-6 top-2 m-1 mr-2 w-10 h-10 absolute rounded-full bg-gray-500 text-xl text-white">
          <a href="/"><img src="http://source.unsplash.com/100x100/?face" alt="image" className="rounded-full" /></a>
          </div>
        
    

        </div>
    )
}

export default Navbar
