import React from 'react'
import './main.css';
import './bootstrap.min.css';
import './jquery-nestable.css';
import './bootstrap-datepicker.min.css';
import { useEffect, useState } from 'react';
import axios from '../Axios/axios';
import dateFormat from 'dateformat';
export const Task = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
      async function fetchData() {
          const response = await axios.get('api/todo/tasks', { new: true });
          setTasks(response.data);
          return response;
      }
      fetchData();
  }, []);
  return (
    <div>
        <div >
          <ul className="nav nav-tabs page-header-tab ">
              <li className="nav-item" ><a
                        style={window.location.pathname === '/taskboard' ? { borderTop: "3px solid red" } : { color: "grey" }}
                        className={window.location.pathname === '/taskboard' ? 'nav-link active' : 'nav-link'}
                        data-toggle="tab" href="/taskboard">Task List</a></li>
              <li className="nav-item"><a
                        className={window.location.pathname === '/add-task' ? 'nav-link active' : 'nav-link'}
                        style={window.location.pathname === '/add-task' ? { borderTop: "3px solid red" } : { color: "grey" }}
                        data-toggle="tab" href="/add-task">Add Task</a></li>
          </ul>
        </div>
    <div>
    </div>
    <table className="table spacing8 text-nowrap">
                        <thead className="thead-light">
                          <tr>
                            <th>#</th>
                            <th>Task</th>
                            <th>Team</th>
                            <th>Duration</th>
                            <th>priority</th>
                            <th className="w200"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            tasks.map((task,index) => {
                              let  priority = "";
                              let progress = "";
                              if (task.priority === "High")
                              {
                                priority = "tag-red";
                              }
                              else if (task.priority === "Low")
                              {
                                priority = "tag-green";
                              }
                              else {
                                  priority = "tag-orange";
                              }
                              return (
                                    <tr>
                                      <td>{++index}</td>
                                      <td>
                                          <h6 className="mb-0">{task.name}</h6>
                                          <span>{tasks.description}</span>
                                      </td>
                                      <td>
                                        <h6 className="mb-0">{task.team}</h6>
                                      </td>
                                      <td>
                                          <div className="text-info">Due Date : {dateFormat(task.due,"dd-mm-yyyy")}</div>
                                      </td>
                                      <td>
                                          <span className={"tag " + priority}>{task.priority}</span>
                                      </td>
                                      <td>
                                        <div className="clearfix">
                                          <div className="float-left"><strong>{task.progress}%</strong></div>
                                          <div className="float-right"><small className="text-muted">Progress</small></div>
                                        </div>
                                        <div className="progress">
                                          <div className="progress-bar bg-green" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: task.progress+"%"}}></div>
                                        </div>
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
export default Task;