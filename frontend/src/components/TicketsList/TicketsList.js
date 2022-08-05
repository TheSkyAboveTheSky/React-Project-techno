import {useState,useEffect} from "react";
import './TicketsList.css'
import axios from '../Axios/axios';
import { Link } from "react-router-dom";
import moment from "moment";

const TicketsList = () => {

    const [tickets,setTickets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/tickets").then((data) => {
            //console.log(data.data)
            setTickets(data.data)
        }).catch((err) => {
            console.log(err)
        })
    })

    return(
        <div className="flex-col">            
    <header>
        <nav>
            <div className="container">
                <div className="text-center">
                    <a href="/" className="nav-brand text-dark">Tickets Management</a>
                </div>
            </div>
        </nav>
    </header>
        <div className="">
        <div className="box-nav d-flex justify-between">
            
        </div>
        <form action="/" method="POST">
            <div className="form-group">
                <table>
                    <tr>
                        <div className="input-group">
                            <td><input type="text" id="myInputId" className="form-control" placeholder="id" />                        </td>
                            <td><input type="text" id="myInputPriority" className="form-control" placeholder="Priority" /></td>
                            <td><input type="text" id="myInputDepartment" className="form-control" placeholder="Department" /></td>
                            <td><input type="text" id="myInputAgent" className="form-control" placeholder="Agent" /></td>
                            <td><input type="text" id="myInputDate" className="form-control" data-provide="datepicker" placeholder="Date" /></td>
                            <td><a href="/api/search" type="submit" className="btn btn-primary btn-block" title="">Search</a></td>
                        </div>
                    </tr>
            </table>
            </div>
        </form>
        <form action="/" method="POST">
            <table className="table" >
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Department</th>
                        <th>Agent</th>
                        <th>Date</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody id="myTable">
                {
                        tickets.map((ticket,i) => (
                            <tr>
                                    <td><Link to={`/ticket/${ticket._id}`}>ASD-{i+1}</Link></td>
                                    <td>{ticket.title}</td>
                                    <td>{ticket.Priority}</td>
                                    <td>{ticket.department}</td>
                                    <td>{ticket.agent}</td>
                                    <td>{moment(ticket.date, "YYYY-MM-DD HH:mm:ss").fromNow()}</td>
                                    <td>
                                        {ticket.numberOfReplies > 1 ? <div>{ticket.numberOfReplies} replies</div>: <div>{ticket.numberOfReplies} reply</div> }                                        
                                    </td>
                                </tr>
                        ))
                    }

                </tbody>
            </table>
        </form>
    </div>
        </div>
    )
}

export default TicketsList