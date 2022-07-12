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

