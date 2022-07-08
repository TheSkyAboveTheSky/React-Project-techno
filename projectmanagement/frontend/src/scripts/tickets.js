const trigger = async () => {
    alert("Hello World")
    const response = await fetch("http://localhost:3001/api",{
        method:"POST",
        credentials: 'same-origin',
        headers:{
                'Content-Type': 'application/json'
        }
    })
}


export default trigger