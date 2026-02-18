import React, {useEffect, useState} from 'react'

function Stories() {
   const [post, setPosts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/posts').then((data)=>data.json()).then((data)=>setPosts(data)).catch(err=> console.log(err));
    },[])
  return (
    <div>
      {post.length>0 ?(
        <div className="flex flex-nowrap gap-4 overflow-x-auto no-scrollbar p-2">
            {post.map((post)=>(
                <div key={post.id} className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-pink-500">
                       <img src={post.profilePic} alt={post.username} className="w-full h-full object-cover"/> 
                    </div>
                    <p className="text-xs mt-1 w-16 text-center truncate text-black">{post.username}</p>
                </div>
            ))}
        </div>
      ):(
        <div>
            Loading Posts
        </div>
      )}
    </div>
  )
}

export default Stories