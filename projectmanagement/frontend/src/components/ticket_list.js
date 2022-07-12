import {getTickets} from "../scripts/tickets"
import { useState, useEffect } from "react"

const TicketList = () => {
    const [idList,setIdList] = useState([])

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
                    setIdList(data)
                }
            }) 
    },[getTickets])

    return (
        <>
        <div>
            {
                //return an array of divs
                idList.map(element =>                    
                    (
                        <div key={element._id}>
                           <a href="">{element._id}</a> 
                        </div>
                    )
                )
            }
        </div>
        </>
    )
}

export default TicketList