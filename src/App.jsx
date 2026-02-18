import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggestions'

function App() {
  return (
    <div className="flex flex-row space-x-2 h-screen p-4">
      <div className="w-[20%] "><Sidebar/></div>
      <div className="w-1/2"><Feed/></div>
      <div className="w-[20%]"><Suggestions/></div>
    </div>
  )
}

export default App