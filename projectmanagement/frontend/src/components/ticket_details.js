import { useEffect, useState } from "react"
import { getTicket, postReply, updateTicket, getReply } from "../scripts/tickets"
import {useParams} from 'react-router-dom'

const TicketDetails = () => {
    const [id,setId] = useState(useParams().id)
    const [ticketData,setTicketData] = useState({})
    const [replyData,setReply] = useState({
        userName:"Mahmoud Hassan",
        location:"Alexandria, Egypt",
    })

    const [replies,setReplies] = useState([])
    const handleChange = (e) => {
        setReply({
          ...replyData,
         [e.target.name]: e.target.value
        })
    }


    //Handle post reply click
    const handleClick = (e) => {
        e.preventDefault();
        //promise chaining
        //post reply to database
        postReply(replyData).then((reply) => {
            const obj = {}
            if(ticketData.numberOfReplies)
            {
                //console.log(ticketData.numberOfReplies)
                obj["numberOfReplies"] = ticketData.numberOfReplies + 1
            }
            if(ticketData.replyIdList)
            {
                obj["replyIdList"] = [...ticketData.replyIdList, reply._id]
            }
            else
            {
                console.log("Inheeere")
                obj["replyIdList"] = [reply._id]
            }
            setReplies(arr => [...arr,reply])
            return updateTicket(id,obj)
        }).then((doc) => { //update ticket with data about replies
            setTicketData(doc)
        }).catch((err) => {
            console.log("Err updating ticket from client ",err)
        }) 
    }

    const fetchData = () => {
        getTicket(id).then((data) => {  
            setTicketData(data)
            return data
        }).then((data) => {
            //const Replies = []
            data.replyIdList.forEach((replyId) => {
                console.log(replyId)
                getReply(replyId).then((doc) => {
                    //Replies.push(doc)
                    setReplies(arr => [...arr,doc])
                    console.log(replies)
                }).catch(err => console.log(err))
            })
            //return Replies
        }).catch(err => console.log(err))

    }

    useEffect(() => {
        fetchData()
    },[])


    return (
        <div id="ticket-details" className="row-section">
            <div className="column-section" id="details">
                <div className="column-section" id="user-data">
                    <div id="user-profile"></div>
                    <p id="user-name">{ticketData.userName}</p>
                    <p id="user-email">[Emailuser@gmail.com]</p>
                    <div className="row-section" id="buttons">
                        <button>Follow</button>
                        <button>Message</button>
                    </div>
                </div>
                <hr></hr>
                <div id="dash"></div>
                <div className="column-section" id="details-section">
                    <div id="details-title">
                        Ticket Details
                    </div>
                    <div id="description">
                        {ticketData.details}
                    </div>
                </div>
                <hr></hr>
                <div id="dash"></div>
                <div className="column-section" id="tickets-info">
                    <div id="ticket-info-title">
                        Ticket Info
                    </div>
                    <div className="column-section" id="tickets-info-content">
                    <div className="column-section" id="no-border">
                    <label for="priority">Priority</label>
                    <input id="priority" type="text" value={ticketData.Priority} readonly></input>
                    </div>
                    <div className="column-section" id="no-border">
                    <label for="department">Department</label>
                    <input id="department" type="text" value={ticketData.department} readonly></input>
                    </div>
                    <div className="column-section" id="no-border">
                    <label for="product">Product</label>
                    <input id="product" type="text" value={ticketData.Product} readonly></input>
                    </div>
                    <div className="column-section" id="no-border">
                    <label for="Date">Date</label>
                    <input id="Date" type="text" value={ticketData.date} readonly></input>
                    </div>
                    </div>
                </div>
            </div>
            <div className="column-section" id="reply-section">
                <div className="column-section" id="post-reply">
                    <form className="column-section">
                        <input placeholder="title" id="title"  name="title" onChange={handleChange}></input>
                        <textarea placeholder="Reply detail" id="content"  name="content" onChange={handleChange} ></textarea>
                        <button id="post-btn" onClick={handleClick}>Post</button>
                    </form>
                </div>
                <div id="dash"></div>
                <div id="replies-title">Replies</div>
                <div id="dash"></div>
                <hr></hr>
                <div className="column-section" id="replies">
                    {
                    replies.map((reply) => (
                    <>
                    <div key={reply._id} id="reply">
                        <div className="row-section" id="user-info">
                            <div className="row-section">
                            <div id="reply-logo"></div>
                            <div id="reply-user-name">{reply.userName}</div>
                            </div>
                            <div id="reply-user-location">{reply.location}</div>
                            <div id="reply-user-date">{new Date(reply.date).toUTCString()}</div>
                        </div>
                        <div className="column-section" id="reply-body">
                            <div id="reply-title">
                                {reply.title}
                            </div>
                            <div id="reply-details">
                                {reply.content}
                            </div>
                            <div className="row-section" id="reactions">
                                <div className="column-section" id="react">
                                    <div id="react-btn">
                                        
                                    </div>
                                    <div id="react-count">
                                        {reply.loves}
                                    </div>
                                    <div id="react-type">
                                        Loves
                                    </div>
                                </div>
                                <div className="column-section" id="react">
                                    <div id="react-btn">

                                    </div>
                                    <div id="react-count">
                                        {reply.comments}
                                    </div>
                                    <div id="react-type">
                                        Comments
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="dash"></div>
                    </>
                    
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TicketDetails