import TodoList from "../TodoList/TodoList"
import useFetch from "./useFetch"


const FetchTasks = () => {
  const [error, isPending , data] = useFetch("http://localhost:3000/api/todo/tasks")
  return (
    <div>
       { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <TodoList blogs={data} /> }
      {data }
    </div>
  ) 
}

export default FetchTasks