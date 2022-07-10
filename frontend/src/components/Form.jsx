import { set } from "mongoose";
import { useState , useRef , useEffect} from "react"

const Form = () => {
const [name, setName] = useState("");
const priorityRef = useRef();
const teamRef = useRef();
const [description, setDescription] = useState("");
const [due, setDueDate] = useState(""); 
const [avatar, setAvatar] = useState("");
const [isPending, setIsPending] = useState(false);

useEffect(() => {
  if( teamRef.current.value === "Team One")
   setAvatar("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfZS7sKX1MJ7WClhNt2EwP12GbFzpc-09wYP1_VPknMkG1v3JWS9o_WEBAlj0CrrqIy0&usqp=CAU")
}, [teamRef]);


const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    // console.log(name, priorityRef.current.value, teamRef.current.value, description, dueDate);
   const task = { 
    name,
    priority: priorityRef.current.value,
    team: teamRef.current.value,
    description,
    due,
    avatar
   }
    fetch("http://localhost:5000/api/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)  
    })
    .then(data => {
      console.log(data);
      setIsPending(false);
    })
    .catch(err => console.log(err))

}


  return (
    <div style={{}}>
    <div className="card">
  <div className="card-header">
  Add Todo
  </div>
  <div className="card-body">
  <form onSubmit={handleSubmit}>
  <div className="form-group row mb-4">
    <label for="name" className="col-sm-2 col-form-label">Name <span style={{"color" : "red"}}> *</span></label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="name" 
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter task's name" />
    </div>
    </div>
    <div className="form-group row mb-4">
    <label for="priority" className="col-sm-2 col-form-label">Priority  <span style={{"color" : "red"}}> *</span> </label>
    <div className="col-sm-10">
    <select ref= {priorityRef} className="custom-select form-control" required>
      <option value="" id='op'>Select priority</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
    </div>
    <div class="invalid-feedback">Example invalid custom select feedback</div>

    </div>
     <div className="form-group row mb-4">
    <label for="priority" className="col-sm-2 col-form-label">Team   <span style={{"color" : "red"}}> *</span> </label>
    <div className="col-sm-10">
    <select ref= {teamRef} className="custom-select form-control"  required>
      <option value="null" id='op'>Select Team </option>
      <option value="Team One">Team One
      </option>
      <option value="Team Two">Team Two</option>
      <option value="Team Three">Team Three</option>
    </select>
    </div>
    <div class="invalid-feedback">Example invalid custom select feedback</div>
    
    </div>

    
    <div className="form-group row mb-4">
    <label for="Descrption" className="col-sm-2 col-form-label">Descrption  <span style={{"color" : "red"}}> *</span></label>
    <div className="col-sm-10">
      <textarea type="text" className="form-control" 
      id="Descrption" placeholder="Enter task' Descrption"
      onChange={(e) => setDescription(e.target.value)}
       rows='3' />
    </div>
    </div>
    <label for="start"  className="col-sm-2 col-form-label">Due date:  <span style={{"color" : "red"}}> *</span></label>
    
    <input className='datePicker' type="date" id="start" name="trip-start"
       min="2022-01-01" max="2030-12-31"></input>
    <label for="end" className='endDate'>To:</label>
    <input className='datePicker' type="date" 
    id="end"
     name="trip-start"
     onChange={(e) => setDueDate(e.target.value)}
        min="2022-01-01" max="2030-12-31"></input>

       {!isPending&& <button type="button" 
        className=" button button-block"
        onClick={handleSubmit}
        >Add Task</button>}
        {isPending&& <button type="button" 
        className=" button button-block"
        style={{"backgroundColor" : "grey"}}
        onClick={handleSubmit}
        >Adding....</button>}
    </form>
  </div>
</div> 
</div>
  )
}

export default Form