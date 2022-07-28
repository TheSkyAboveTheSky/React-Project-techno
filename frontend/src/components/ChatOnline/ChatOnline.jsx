import './ChatOnline.css';
import img from '../Login/login.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {

    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get(`http://localhost:3000/friends/${currentId}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } });
            setFriends(res.data);
        }

        getFriends();
    }, [currentId])


    useEffect(() => {
        setOnlineFriends(friends.filter((f) => friends.some((u) => u._id === f._id )));
    }, [friends, onlineUsers])

    const handleClick = async (user) => {
        try{
            const res = await axios.get(`http://localhost:3000/api/conversations/find/${currentId}/${user._id}`);
            if(res.data != null){
                setCurrentChat(res.data);
            }
            else{
                const res = await axios.post(`http://localhost:3000/api/conversations`, { senderId: currentId, receiverId: user._id });
                setCurrentChat(res.data);
            }

        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="chatOnline">
            {onlineFriends.map(o => (


                <div className="chatOnlineFriend" onClick={()=>handleClick(o)}>
                    <div className="chatOnlineImgContainer">
                        <img className='chatOnlineImg' src={img} alt="" />
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <div className="chatOnlineName">{o?.username}</div>
                </div>
            ))}
        </div>
    )
}