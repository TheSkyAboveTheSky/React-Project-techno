import React , {useEffect , useState} from 'react'
import axios from '../Axios/axios'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import dateFormat from 'dateformat';
import banner from '../../banner.jpg';
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
        <img alt="banner" src={banner} width="100%" height="100%"/>
      <table className="table spacing8 text-nowrap">
        <thead className="thead-light">
          <tr>
            <th style={{"backgroundColor" : "red","color" : "white"}}>#</th>
            <th style={{"backgroundColor" : "red","color" : "white"}}>Activity</th>
            <th style={{"backgroundColor" : "red","color" : "white"}}>Time</th>
            <th style={{"backgroundColor" : "red","color" : "white"}}>Created At</th>
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
                                      <div className="mb-0">{timeAgo.format(new Date(timeline.createdAt))}</div>
                                    </td>
                                    <td>
                                      <div className="mb-0">Created At: {dateFormat(timeline.createdAt,"dd-mm-yyyy")}</div>
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