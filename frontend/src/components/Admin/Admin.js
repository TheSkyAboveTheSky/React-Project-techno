import axios from 'axios';
import React, { Component } from 'react';
import './Admin.css';
import * as ReactBootstrap from 'react-bootstrap';   

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false
        }
        this.getUsers();
    }


    getUsers = () => {
        axios.get('http://localhost:3000/users', { headers: { "Authorization": `Bearer ${localStorage.getItem('accessToken')}` } }).then(res => {
            this.setState({
                users: res.data,
                loading: true
            });
        }
        ).catch(err => {
            alert("An error occured");
        }
        );
    }

    AssignRole = (userid, roleName, roleId) => {
        if (roleId !== '') {
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
        else {
            alert("You must choose a role");
        }

    }



    render() {


        // const renderUsers2 = this.state.users.map((user) =>
        //     <div classNameName="main-container">
        //         <div classNameName="cards">
        //             <div classNameName="card card-1">
        //                 <h2 classNameName="card__title">Name : {user.username}</h2>
        //                 <h2 classNameName="card__title">Email : {user.email}</h2>
        //                 <h2 classNameName="card__title">role : {Object.keys(user.roles)}</h2>
        //                 <p classNameName="card__apply">
        //                     <select name="roles" id={user._id}>
        //                         <option value="" selected disabled hidden>Choose a role</option>
        //                         <option value="1010">Admin</option>
        //                         <option value="2020">ProjectManager</option>
        //                         <option value="3030">TeamLeader</option>
        //                         <option value="4040">Employee</option>
        //                     </select>
        //                     <button classNameName="card__link" onClick={() => this.AssignRole(user._id, document.getElementById(user._id).options[document.getElementById(user._id).selectedIndex].text, document.getElementById(user._id).options[document.getElementById(user._id).selectedIndex].value)}>Assign Role</button>
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // );



        const renderUsers = this.state.users.map((user) =>
            <div className="card text-center">
                <div className="card-header">User id : {user._id}</div>
                <div className="card-body">
                    <h5 className="card-title">{user.username}</h5>
                    <p className="card-text">{user.email}</p>
                    <select name="roles" id={user._id}>
                        <option value="" selected disabled hidden>Choose a role</option>
                        <option value="1010">Admin</option>
                        <option value="2020">ProjectManager</option>
                        <option value="3030">TeamLeader</option>
                        <option value="4040">Employee</option>
                    </select>
                    <br></br>
                    <br></br>
                    <button className="btn btn-primary" onClick={() => this.AssignRole(user._id, document.getElementById(user._id).options[document.getElementById(user._id).selectedIndex].text, document.getElementById(user._id).options[document.getElementById(user._id).selectedIndex].value)}>Assign</button>
                </div>
                <div className="card-footer text-muted">{Object.keys(user.roles)}</div>
            </div>)

        return (
            <>
                {/* <div classNameName="w3-light-grey w3-padding-32 w3-center margened">
                    <h1 classNameName="w3-jumbo">Admin Page</h1>
                </div>
                <button type="button" classNameName="btn btn-primary" onClick={this.getUsers}>Get Users</button> */}
                <div>
                        {this.state.loading ? renderUsers : <ReactBootstrap.Spinner classNameName='loading-center' animation="border" />}

                        {/* <ReactBootstrap.Spinner animation="border" /> */}
                        {/* {renderUsers} */}
                </div>
            </>
        );
    }
}

export default Admin;