import { useState , useRef} from "react"

const Form = () => {
const [name, setName] = useState("");
const priorityRef = useRef();
const teamRef = useRef();
const [description, setDescription] = useState("");
const [due, setDueDate] = useState("");


const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, priorityRef.current.value, teamRef.current.value, description, dueDate);
   const task = { 
    name,
    priority: priorityRef.current.value,
    team: teamRef.current.value,
    description,
    due
   }
   
    console.log(task);
   try{
    JSON.parse(JSON.stringify(task));
   }
   catch(err){
       console.log(err);
   }

    fetch("http://localhost:5000/api/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)  
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}


  return (
    <div>
    <div className="card">
  <div className="card-header">
  Add Todo
  </div>
  <div className="card-body">
  <form onSubmit={handleSubmit}>
  <div className="form-group row mb-4">
    <label for="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="name" 
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter task's name" />
    </div>
    </div>
    <div className="form-group row mb-4">
    <label for="priority" className="col-sm-2 col-form-label">Priority</label>
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
    <label for="priority" className="col-sm-2 col-form-label">Priority</label>
    <div className="col-sm-10">
    <select ref= {teamRef} className="custom-select form-control"  required>
      <option value="null" id='op'>Select Team</option>
      <option value="Team One">Team One</option>
      <option value="Team Two">Team Two</option>
      <option value="Team Three">Team Three</option>
    </select>
    </div>
    <div class="invalid-feedback">Example invalid custom select feedback</div>
    
    </div>

    <div className="form-group row mb-4">
    <label for="Descrption" className="col-sm-2 col-form-label">Descrption</label>
    <div className="col-sm-10">
      <textarea type="text" className="form-control" 
      id="Descrption" placeholder="Enter task' Descrption"
      onChange={(e) => setDescription(e.target.value)}
       rows='3' />
    </div>
    </div>
    <label for="start"  className="col-sm-2 col-form-label">Due date:</label>
    
    <input className='datePicker' type="date" id="start" name="trip-start"
       min="2022-01-01" max="2030-12-31"></input>
    <label for="end" className='endDate'>To:</label>
    <input className='datePicker' type="date" 
    id="end"
     name="trip-start"
     onChange={(e) => setDueDate(e.target.value)}
        min="2022-01-01" max="2030-12-31"></input>
        <button type="button" 
        className="btn btn-success mt-2"
        onClick={handleSubmit}
        >Submit</button>
    </form>
  </div>
</div> 
</div>
  )
}

export default Form