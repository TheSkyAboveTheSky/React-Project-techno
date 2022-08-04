// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faMobile} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from '../Axios/axios';
import Navbar from '../Navbar/Navbar';


const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('api/todo/tasks', { new: true });
            setTasks(response.data);
            return response;
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('api/todo/teams');
            setTeams(response.data);
            return response;
        }
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <div>
            </div>
            <table>
                <thead><tr>
                    <th></th><th>Due</th>
                    <th>Priority </th>
                    {/* <th><FontAwesomeIcon icon={faMobile}></FontAwesomeIcon></th> */}
                </tr></thead>
                <tbody>
                    {
                        tasks.map(task => {
                            return (
                                <tr>
                                    <td className="box" key={task._id}>
                                        <input type="checkbox" name="example-checkbox1" value="option1" id="chek" />
                                        <span> {task.name}</span></td>
                                    <td className="right">{task.due}</td>
                                    <td>{task.priority}</td>
                                    <td>
                                        {
                                            teams.filter(team => team.team === task.team).map(team => {
                                                return (
                                                    console.log(team.team),
                                                    console.log(team.avatar),
                                                    <img src={team.avatar} alt="avatar" />
                                                )
                                            }
                                            )
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody></table>
        </div>
    )
}

export default TodoList