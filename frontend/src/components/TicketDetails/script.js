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



export const getTicket = async (id) => {
    const response = await fetch(`http://localhost:3001/tickets/${id}`)
    
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
        loves: 0,
        comments: 0
    }
    const response = await fetch("http://localhost:3001/tickets/reply",{
        method:"POST",
        credentials:"same-origin",
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    try{
        const res = await response.json()
        return res
    }
    catch(err)
    {
        console.log(err)
        return err
    }
}


export const updateTicket = async (id,data) => {
    console.log("Update data ",data);
    const response = await fetch(`http://localhost:3001/tickets/update/${id}`,{
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
    const response = await fetch(`http://localhost:3001/tickets/reply/${id}`)
    try{
        const doc = await response.json()
        return doc
    }
    catch(err)
    {
        console.log(err)
        return err
    }
    
}