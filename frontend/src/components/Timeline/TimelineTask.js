import React , {useEffect , useState} from 'react'
import axios from '../Axios/axios'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import dateFormat from 'dateformat';
function TimelineTask() {
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
      <div>
        <ul className="nav nav-tabs page-header-tab ">
            <li className="nav-item" ><a
                      style={window.location.pathname === '/timeline' ? { borderTop: "3px solid red" } : { color: "grey" }}
                      className={window.location.pathname === '/timeline' ? 'nav-link active' : 'nav-link'}
                      data-toggle="tab" href="/timeline">Timeline Logs</a></li>
            <li className="nav-item"><a
                      className={window.location.pathname === '/timeline-task' ? 'nav-link active' : 'nav-link'}
                      style={window.location.pathname === '/timeline-task' ? { borderTop: "3px solid red" } : { color: "grey" }}
                      data-toggle="tab" href="/timeline-task">Timeline Tasks</a></li>
        </ul>
      </div>
      <div>

      <table className="table spacing8 text-nowrap">
        <thead className="thead-light">
          <tr>
            <th>#</th>
            <th>Activity</th>
            <th>Time</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {
            timelines.map((timeline,index) => {
              if (timeline.type == 2){
                TimeAgo.addDefaultLocale(en)
                const timeAgo = new TimeAgo('en-US')
                return (
                                <tr>
                                    <td>{++index}</td>
                                    <td>
                                      <h6 className="mb-0">{timeline.body}</h6>
                                    </td>
                                    <td>
                                      <div className="text-info">{timeAgo.format(new Date(timeline.createdAt))}</div>
                                    </td>
                                    <td>
                                      <div className="text-info">Created At: {dateFormat(timeline.createdAt,"dd-mm-yyyy")}</div>
                                    </td>
                                </tr>  
                      )
              }
            })
          }
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default TimelineTask