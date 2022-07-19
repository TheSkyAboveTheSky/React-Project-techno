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


export const getTicket = async (id) => {
    const response = await fetch(`http://localhost:3001/api/ticket/${id}`)
    
    try{
        const data = await response.json()
        return data
    }
    catch(err)
    {
        return err
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
        return res
    }
    catch(err)
    {
        console.log(err)
        return err
    }
}


export const updateTicket = async (id,data) => {
    const response = await fetch(`http://localhost:3001/api/update/${id}`,{
        method:"POST",
        credentials: "same-origin",
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify(data)
    })
    try{
        const doc = await response.json()
        return doc
    }catch(err)
    {
        console.log("Error updating ticket: ",err)
        return err
    }
}


export const getReply = async (id) => {
    const response = await fetch(`http://localhost:3001/api/reply/${id}`)
    try{
        const doc = await response.json()
        console.log(doc)
        return doc
    }
    catch(err)
    {
        console.log(err)
        return err
    }
    
}