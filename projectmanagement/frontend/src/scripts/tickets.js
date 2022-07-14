//const uri = "http://localhost:3001/api"

// const trigger = async () => {
//     alert("Hello World")
//     const response = await fetch("http://localhost:3001/api",{
//         method:"POST",
//         credentials: 'same-origin',
//         headers:{
//                 'Content-Type': 'application/json'
//         }
//     })
// }


export const getTickets = async (done) => {
    // console.log("In hereee")
    const response = await fetch("http://localhost:3001/api/tickets",{
        method:"GET",
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    try 
    {
        const data = await response.json()
        done(null,data)
    }
    catch(err)
    {
        done(err)
    }
}


export const getTicket = async (id,done) => {
    const response = await fetch(`http://localhost:3001/api/ticket/${id}`)
    
    try{
        const data = await response.json()
        console.log(data)
        done(null,data)
    }
    catch(err)
    {
        done(err)
    }   
}


export const postReply = async (data) => {
    data = {
        ...data,
        date: new Date().toUTCString(),
        loves: 5,
        comments: 10
    }
    console.log(data)
    const response = await fetch("http://localhost:3001/api/postReply",{
        method:"POST",
        credentials:"same-origin",
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    try{
        const res = await response.json()
        console.log(res)
    }
    catch(err)
    {
        console.log(err)
    }
}