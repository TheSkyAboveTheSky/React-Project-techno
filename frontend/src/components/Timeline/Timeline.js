import React , {useEffect , useState} from 'react'
import axios from '../Axios/axios'
import './Timeline.css'

function Timeline() {
  const [timelines,setTimelines] = useState([]);
  const [id,setId] = useState(window.localStorage.getItem('id'));
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/timeline/${id}`,{ new: true });
      setTimelines(response.data);
      console.log(response.data);
      return response;
  }
  fetchData();
  }
  ,[])
  return (
    <div>
      <table className="table spacing8 text-nowrap">
        <thead className="thead-light">
          <tr>
            <th>#</th>
            <th>Activity</th>
            <th>Time</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {
            timelines.map((timeline,index) => {
              return (
                        <tr>
                            <td>{++index}</td>
                            <td>
                              <h6 className="mb-0">{timeline.body}</h6>
                            </td>
                            <td>
                              <div className="text-info">Due Date : {timeline.createdAt}</div>
                            </td>
                            <td>
                              <span className={"tag "}>{timeline.user}</span>
                            </td>
                        </tr>
                    )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Timeline