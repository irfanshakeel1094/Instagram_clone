import React from 'react'
import {
  Home, Search, Heart, User,
  Compass, MessageCircle,
  Clapperboard, AtSign, Menu
} from "lucide-react";
import textLogo from './assets/text.png';

function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-between p-4 border-r border-gray-300">

      
      <div>
        <img src={textLogo} className="w-32 mb-6" alt="Instagram" />

        <div className="flex flex-col gap-1">

          <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer font-medium hover:font-bold">
            <Home size={28}/>
            <span>Home</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer font-medium hover:font-bold">
            <Search size={28}/>
            <span>Search</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer font-medium hover:font-bold">
            <Compass size={28}/>
            <span>Explore</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer font-medium hover:font-bold">
            <Clapperboard size={28}/>
            <span>Reels</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer font-medium hover:font-bold">
            <MessageCircle size={28}/>
            <span>Messages</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer font-medium hover:font-bold">
            <Heart size={28}/>
            <span>Notifications</span>
          </div>

          <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer font-medium hover:font-bold">
            <User size={28}/>
            <span>Profile</span>
          </div>

        </div>
      </div>

      
      <div className="flex flex-col pb-2 gap-1">

        <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer font-medium hover:font-bold">
          <AtSign size={28}/>
          <span>Threads</span>
        </div>

        <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer font-medium hover:font-bold">
          <Menu size={28}/>
          <span>More</span>
        </div>

      </div>

    </div>
  )
}

export default Sidebar