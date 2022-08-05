import './Conversation.css';
import img from '../Login/login.png';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export default function Conversation({conversation}) {

    const userid = jwtDecode(localStorage.getItem('accessToken')).UserInfo.id;

    const [user , setUser] = useState(null);

    useEffect(() => {
        const friendId = conversation.members.find(m=>m !== userid);

        const getUser = async () => {
            try {

                const res = await axios.get(`http://localhost:3000/users/${friendId}`,{ headers: { "Authorization": `Bearer ${localStorage.getItem('accessToken')}` } });
                setUser(res.data);
            }
            catch (err) {
                console.log(err);
            }
        };
        getUser();
    },[conversation]);

    return (
        <div className="conversation">
            <img className="conversationImg" src={img} alt="" />
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}