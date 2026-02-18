import React, {useState, useEffect} from 'react'

function Suggestions() {
    const[profile, setProfile] = useState(null);
    const[suggestions, setSuggestions] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3000/posts').then((data)=>data.json()).then((data)=>{
            setProfile(data[0]);
            setSuggestions(data.slice(1, 6));
        }).catch(err=>console.log(err));
    }, [])
    
    return (
        <div className="p-4">
            {profile ? (
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 rounded-full overflow-hidden">
                            <img src={profile.profilePic} alt={profile.username} className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h2 className="font-semibold text-sm">{profile.username}</h2>
                            <p className="text-xs text-gray-500">{profile.location}</p>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between mb-3">
                            <h3 className="text-sm font-semibold text-gray-600">Suggestions For You</h3>
                            <button className="text-xs font-semibold">See All</button>
                        </div>
                        {suggestions.map((suggestion) => (
                            <div key={suggestion.id} className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img src={suggestion.profilePic} alt={suggestion.username} className="w-full h-full object-cover"/>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">{suggestion.username}</p>
                                        <p className="text-xs text-gray-500">Suggested for you</p>
                                    </div>
                                </div>
                                <button className="text-xs font-semibold text-blue-500">Follow</button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Suggestions