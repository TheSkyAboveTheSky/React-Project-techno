import TodoList from "./TodoList"
import useFetch from "./useFetch"
const FetchTasks = () => {
  const [error, isPending , data] = useFetch("http://localhost:5000/api/todo/all")
  return (
    <div>
       { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <TodoList blogs={data} /> }
      {data && console.log(data)}
    </div>
  ) 
}

export default FetchTasks