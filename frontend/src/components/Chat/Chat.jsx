import Conversation from '../Conversation/Conversation';
import Message from '../Message/Message';
import ChatOnline from '../ChatOnline/ChatOnline';
import axios from "axios";
import './Chat.css';
import { useEffect, useState, useRef } from 'react';
import jwtDecode from 'jwt-decode';
import { io } from 'socket.io-client';
import Dropzone from 'react-dropzone';

export default function Chat() {

    const userid = jwtDecode(localStorage.getItem('accessToken')).UserInfo.id;
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setarrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [friends, setFriends] = useState([]);
    const socket = useRef(io('ws://localhost:8900'));
    const scrollRef = useRef();


    useEffect(() => {
        socket.current = io('ws://localhost:8900');
        socket?.current.on("getMessage", data => {
            setarrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            });
        })
    }, [])


    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get(`http://localhost:3000/friends/${userid}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } });
            setFriends(res.data);
        }

        getFriends();
    }, [])

    // console.log(friends.filter((f) => friends.some((u) => u._id === f._id )));

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat])


    useEffect(() => {
        socket?.current.emit('addUser', userid);
        socket?.current.on('getUsers', users => {
            setOnlineUsers(friends.filter(f => users.includes(f._id)));
        })
    }, [])

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/conversations/${userid}`);
                setConversations(res.data);
            }
            catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [userid]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/messages/${currentChat?._id}`);
                setMessages(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: userid,
            text: newMessage,
            conversationId: currentChat?._id,
        };

        const receiverId = currentChat?.members.find(member => member !== userid);

        socket?.current.emit('sendMessage', {
            senderId: userid,
            receiverId,
            text: newMessage
        });

        try {
            const res = await axios.post('http://localhost:3000/api/messages', message);
            setMessages([...messages, res.data]);
            setNewMessage('');
            // console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    };




    const onDrop = async (files) => {

        let formData = new FormData();
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        formData.append('file', files[0]);
        await axios.post('http://localhost:3000/api/image/single', formData, config).then(res => {
            if (res.data.success) {
                const message = {
                    sender: userid,
                    text: res.data.url,
                    conversationId: currentChat?._id,
                };

                const receiverId = currentChat?.members.find(member => member !== userid);

                socket?.current.emit('sendMessage', {
                    senderId: userid,
                    receiverId,
                    text: res.data.url
                });

                try {
                    axios.post('http://localhost:3000/api/messages', message).then(res => {
                        setMessages([...messages, res.data]);
                        setNewMessage('');
                    })
                }
                catch (err) {
                    console.log(err);
                }
            }
        })

    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages])

    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {conversations.map(c => (
                        <div onClick={() => setCurrentChat(c)}>
                            <Conversation conversation={c} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat ?
                            <>
                                <div className="chatBoxTop">
                                    {messages.map(m => (
                                        <div ref={scrollRef}>
                                            <Message message={m} own={m.sender === userid} />
                                        </div>
                                    ))}
                                </div>
                                <div className="chatBoxBottom">
                                    <Dropzone onDrop={onDrop}>
                                        {({ getRootProps, getInputProps }) => (
                                            <section>
                                                <div {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    <i class="fa fa-upload" aria-hidden="true"></i>
                                                </div>
                                            </section>
                                        )}
                                    </Dropzone>
                                    <textarea placeholder="Type a message..." className="chatMessageInput" onChange={(e) => setNewMessage(e.target.value)} value={newMessage}></textarea>
                                    <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                                </div></> : <span className='noConversationText'>Open a Conversation to open a chat</span>}
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline onlineUsers={onlineUsers} currentId={userid} setCurrentChat={setCurrentChat} />
                </div>
            </div>
        </div>
    )
}