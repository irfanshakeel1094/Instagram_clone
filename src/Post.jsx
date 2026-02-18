import React,{useEffect, useState} from 'react'
import { MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

function Post() {
    const [post, setPost] = useState([]);
    const [likedpost, setlikedpost] = useState({});
    const [commentsMap, setCommentsMap] = useState({});
    const [newComment, setNewComment] = useState({});
    const [showAllComments, setShowAllComments] = useState({});

    useEffect(()=>{
        fetch('http://localhost:3000/posts')
            .then((data)=>data.json())
            .then((data)=>{
                setPost(data);
                const initialcomments = {};
                data.forEach(p=>{
                    initialcomments[p.id] = p.comments || [];
                });
                setCommentsMap(initialcomments);
            })
            .catch(err=>console.log(err));
    },[])

    const toglelike = (id) => {
        setlikedpost((prev)=>({
            ...prev,
            [id]:!prev[id]
        }));
    }

    const handleAddComment = (postId) => {
       if (!newComment[postId] || newComment[postId].trim() === "") return;

        const commentObj = {
            id: Date.now(),
            username: "you",
            text: newComment[postId],
            timeAgo: "now"
        };

        setCommentsMap(prev => ({
            ...prev,
            [postId]: [...(prev[postId] || []), commentObj]
        }));

        setNewComment(prev => ({
            ...prev,
            [postId]: ""
        }));
    };
    
    return (
        <div>
            {post.length>0 ?(
            <div className="flex flex-col gap-4">
                {post.map((post)=>(
                    <div key={post.id} className="bg-white border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-500">
                                    <img src={post.profilePic} alt={post.username} className="w-full h-full object-cover"/> 
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{post.username}</p>
                                    <p className="text-xs text-gray-500">{post.location}</p>
                                </div>
                            </div>
                            <MoreHorizontal className="cursor-pointer"/>
                        </div>
                        <div>
                            <img src={post.image} alt={post.caption} className="w-full rounded-lg"/>
                        </div>
                        <div className="mt-3">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-4">
                                    <Heart 
                                        onClick={()=>toglelike(post.id)} 
                                        className={`cursor-pointer transition ${likedpost[post.id]?"text-red-500 fill-red-500":""}`}
                                    />
                                    <MessageCircle className="cursor-pointer"/>
                                    <Send className="cursor-pointer"/>
                                </div>
                                <Bookmark className="cursor-pointer"/>
                            </div>
                            

                            <p className="font-semibold">{likedpost[post.id] ? post.likes + 1 : post.likes} likes</p>
                            <p className="text-sm"><span className="font-semibold">{post.username}</span> {post.caption}</p>
                            <p className="text-xs text-gray-500 mt-1">{post.timeAgo}</p>

                            <div className="mt-2 text-sm">
                                {commentsMap[post.id] && commentsMap[post.id].length > 2 && (
                                    <p
                                        className="text-gray-500 cursor-pointer mb-2"
                                        onClick={() =>
                                            setShowAllComments(prev => ({
                                                ...prev,
                                                [post.id]: !prev[post.id]
                                            }))
                                        }
                                    >
                                        {showAllComments[post.id]
                                            ? "Hide comments"
                                            : `View all ${commentsMap[post.id].length} comments`}
                                    </p>
                                )}

                                {(showAllComments[post.id]
                                    ? commentsMap[post.id]
                                    : commentsMap[post.id]?.slice(0, 2)
                                )?.map((c) => (
                                    <p key={c.id} className="mb-1">
                                        <span className="font-semibold">{c.username}</span> {c.text}
                                    </p>
                                ))}
                            </div>

                            <div className="flex items-center mt-2 border-t pt-2">
                                <input
                                    type="text"
                                    placeholder="Add a comment..."
                                    value={newComment[post.id] || ""}
                                    onChange={(e) =>
                                        setNewComment(prev => ({
                                            ...prev,
                                            [post.id]: e.target.value
                                        }))
                                    }
                                    className="flex-1 outline-none text-sm"
                                />
                                <button
                                    onClick={() => handleAddComment(post.id)}
                                    className="text-blue-500 font-semibold text-sm"
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        
        ):(
            <div>Loading content</div>
        )
        }</div>
    )
}

export default Post
