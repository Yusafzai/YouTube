import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { AiFillFire } from 'react-icons/ai';
import { MdSubscriptions } from 'react-icons/md';
import { MdVideoLibrary } from 'react-icons/md';
import {NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <div className="side w-20 h-screen top-16 fixed ml-0 bg-gray-50">
            
            <NavLink to="/">
            <div className="h-16 -top-4 relative hover:bg-gray-200">
            <a href="/"><AiFillHome className="ml-7 mt-8 top-4 relative text-2xl  text-gray-500 hover:text-red-500" /></a>
            <h1 className="relative top-5 text-xs left-6">Home</h1>
            </div>
            </NavLink>

            <NavLink to="/1">
            <div className="h-16 -top-12 relative hover:bg-gray-200">
            <a  href="/" ><AiFillFire className="ml-7 mt-8 top-4 relative text-2xl  text-gray-500 hover:text-red-500" /></a>
            <h1 className="relative top-5 text-xs left-4">Trending</h1>
            </div>
            </NavLink>

            <NavLink to="/2">
            <div className="h-16 -top-20 relative hover:bg-gray-200">
            <a  href="/" ><MdSubscriptions className="ml-7 mt-8 top-4 relative text-2xl text-gray-500 hover:text-red-500" /></a>
            <h1 className="relative top-5 text-xs left-1">Subscriptions</h1>
            </div>
            </NavLink>

            <NavLink to="/3">
            <div className="h-16 -top-28 relative hover:bg-gray-200">
            <a href="/" ><MdVideoLibrary className="ml-7 mt-8 top-4 relative text-2xl text-gray-500 hover:text-red-500" /></a>
            <h1 className="relative top-5 text-xs left-5">Library</h1>
            </div>
            </NavLink>

        </div>
    )
}

export default Sidebar
