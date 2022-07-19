import {getTickets} from "../scripts/tickets"
import { useState, useEffect } from "react" //react hooks
import {Link} from "react-router-dom"
import moment from "moment"

const TicketList = () => {
    const [ticketList,setTicketList] = useState([])

    //function must either return a function or nothing inside the useEffect hook 
    useEffect(() => {                    
                getTickets((err,data) => {
                if(err)
                {
                    console.log("Error fetching data")
                }
                else
                {
                    console.log(data)
                    setTicketList(data)
                }
            }) 
    },[])

    

    return (
        <>
        {/* <div>
            {
                //return an array of divs
                idList.map(element =>                    
                    (
                        <div key={element._id}>
                          <Link to={`/ticket/${element._id}`}>
                                <a href="">{element._id}</a>                           
                          </Link>
                        </div>
                    )
                )
            }
        </div> */}
        <header>
        <nav>
            <div class="container">
                <div class="text-center">
                    <a href="/" class="nav-brand text-dark">Tickets Management</a>
                </div>
            </div>
        </nav>
        </header>
        <main>
        <div class="container">
        <div class="box-nav d-flex justify-between">
            
        </div>
        <form action="/" method="POST">
            <div class="form-group">
                <table>
                    <tr>
                        <div class="input-group">
                            <td><input type="text" id="myInputId" class="form-control" placeholder="id" />                        </td>
                            <td><input type="text" id="myInputPriority" class="form-control" placeholder="Priority" /></td>
                            <td><input type="text" id="myInputDepartment" class="form-control" placeholder="Department" /></td>
                            <td><input type="text" id="myInputAgent" class="form-control" placeholder="Agent" /></td>
                            <td><input type="text" id="myInputDate" class="form-control" data-provide="datepicker" placeholder="Date" /></td>
                            <td><a href="/api/search" type="submit" class="btn btn-primary btn-block" title="">Search</a></td>
                        </div>
                    </tr>
            </table>
            </div>
        </form>
        <form action="/" method="POST">
            <table class="table" >
                <thead class="thead-dark">
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
                        ticketList.map((ticket,i) => (
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
    </main>
    </>
    )
}

export default TicketList