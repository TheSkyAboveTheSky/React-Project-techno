import './TicketDetails.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTicket, postReply, updateTicket, getReply } from "./script"
import jwtDecode from 'jwt-decode'

const TicketDetails = () => {
    const [id,setId] = useState(useParams().id)
    const [ticketData,setTicketData] = useState({})
    const [replyData,setReply] = useState({
        userName:jwtDecode(localStorage.getItem('accessToken')).UserInfo.name,
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
            obj["numberOfReplies"] = ticketData.numberOfReplies + 1
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
                getReply(replyId).then((doc) => {
                    //Replies.push(doc)
                    setReplies(arr => [...arr,doc])
                }).catch(err => console.log(err))
            })
            //return Replies
        }).catch(err => console.log(err))

    }

    useEffect(() => {
        fetchData()
    },[])

    return(
        <div className='' style={{}}>
            <div className='row  text-center'>
                <div className='col'>
                    <div className='row  w-50 mx-auto user-card p-0'>
                        <Card className='w-100' style={{marginRight:'0px'}}>
                            <Card.Header>
                            <Card.Img className='w-25 mx-auto avatar' />
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    [Emailtest@technolabs]
                                </Card.Text>
                                <h4>{ticketData.userName}</h4>
                                <Row>
                                    <Col className='flex-row justify-content-between'>
                                        <Button className='align-self'>Follow</Button>
                                        <Button>Message</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='row w-50 mx-auto'>
                         <div className='card'>
                         <div className="card-header">Ticket Details</div>
                         <div className="card-body">
                             <div className="card-text">{ticketData.details}</div>
                         </div>
                         </div>
                    </div>
                    <div className='row  w-50 mx-auto'>
                     <div className="card">
                         <div className="card-header">Ticket Info</div>
                         <div className="card-body">
                             <div className="col" style={{textAlign:"left"}}>
                                 <div className="row">
                                     <h6>Title:</h6>
                                     <h6 className='border'>{ticketData.title}</h6>
                                 </div>
                                 <div className="row">
                                     <h6>Department:</h6>
                                     <h6 className='border'>{ticketData.department}</h6>
                                 </div>
                                 <div className="row">
                                     <h6>Product:</h6>
                                     <h6 className='border'>{ticketData.Product}</h6>
                                 </div>
                                 <div className="row">
                                     <h6>Date:</h6>
                                     <h6 className='border'>{new Date(ticketData.date).toUTCString()}</h6>
                                 </div>
                                 <div className="row">
                                     <h6>In Progress:</h6>
                                     <h6 className='border'>70%</h6>
                                 </div>
                             </div>
                         </div>
                     </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='row w-50 mx-auto'>
                        <div className="form-group mb-3">
                                 <label for="reply-title" className="form-label">Reply title</label>
                                 <input id="reply-title" name="title" className="form-control" onChange={handleChange}></input>
                                 <label for="reply-content" className="form-label">Reply content</label>
                                 <textarea id="reply-content" name="content" className="form-control" onChange={handleChange}></textarea>
                                 <button className="btn btn-primary" type="submit" onClick={handleClick}>Post</button>
                         </div>
                    </div>
                        <div className='row w-75 mx-auto'>
                        <div className="replies card">
                                <div className="card-header">Ticket Replies</div>
                                <div className="cards flex-col">
                                    {
                                        replies.map((reply) => (
                                        <div className="card w-100 justify-content-center">
                                            <div className="card-header">
                                                <div className="col">
                                                    <img alt="User image"></img>
                                                </div>
                                                <div className="col">
                                                    <div>{reply.userName}</div>
                                                </div>
                                                <div className="col">
                                                    <div>{reply.location}</div>
                                                </div>
                                                <div className="col">
                                                    <div>{new Date(reply.date).toUTCString()}</div>
                                                </div>
                                            </div>
                                        <div className="card-body">
                                            <div className="card-text">
                                                <h3>{reply.title}</h3>
                                                <h6>{reply.content}</h6>
                                            </div>
                                            <div className="row flex-row align-content-between">
                                                <div className="col">
                                                    <label>{reply.loves}</label>
                                                    <div>Love</div>
                                                </div>
                                                <div className="col">
                                                    <label>{reply.comments}</label>
                                                    <div>Comment</div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                            
                                        ))
                                    }
                                </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default TicketDetails