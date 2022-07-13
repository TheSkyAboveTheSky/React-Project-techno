import axios from 'axios';
import React, { Component } from 'react';
import './Admin.css';
import img from './img_avatar.png';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }


    getUsers = () => {
        axios.get('http://localhost:3000/users', { headers: { "Authorization": `Bearer ${localStorage.getItem('accessToken')}` } }).then(res => {
            this.setState({
                users: res.data
            });
        }
        ).catch(err => {
            alert("An error occured");
        }
        );
    }

    AssignRole = (userid, roleName, roleId) => {
        if(roleId != '')
        {
            axios.put(`http://localhost:3000/updateuser/${userid}`, {
                roles: { [roleName]: roleId }
            }, { headers: { "Authorization": `Bearer ${localStorage.getItem('accessToken')}` } }).then(res => {
                alert("Role assigned successfully");
                this.getUsers();
            }
            ).catch(err => {
                console.log(err);
                alert("An error occured");
            }
            );
        }
        else{
            alert("You must choose a role");
        }

    }



    render() {


        const renderUsers = this.state.users.map((user) =>
            <div class="main-container">
                <div class="cards">
                    <div class="card card-1">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Name : {user.username}</h2>
                        <h2 class="card__title">Email : {user.email}</h2>
                        <h2 class="card__title">role : {Object.keys(user.roles)}</h2>
                        <p class="card__apply">
                            <select name="roles" id={user._id}>
                                <option value="" selected disabled hidden>Choose a role</option>
                                <option value="1010">Admin</option>
                                <option value="2020">ProjectManager</option>
                                <option value="3030">TeamLeader</option>
                                <option value="4040">Employee</option>
                            </select>
                            <a class="card__link" onClick={() => this.AssignRole(user._id, document.getElementById(user._id).options[document.getElementById(user._id).selectedIndex].text, document.getElementById(user._id).options[document.getElementById(user._id).selectedIndex].value)}>Assign Role <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        );

        return (
            <>
                <div className="w3-light-grey w3-padding-32 w3-center">
                    <h1 className="w3-jumbo">Admin Page</h1>
                </div>
                <button type="button" class="btn btn-primary" onClick={this.getUsers}>Get Users</button>
                <div>
                    <p>
                        {renderUsers}
                    </p>
                </div>
            </>
        );
    }
}

export default Admin;