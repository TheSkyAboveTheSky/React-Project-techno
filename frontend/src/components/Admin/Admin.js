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
            for (let index = 0; index < res.data.length; index++) {
                console.log(res.data[index].roles);
                
            }
        }
        ).catch(err => {
            alert("An error occured");
        }
        );
    }
    
    AssignRole = (userid) => {
        axios.post(`http://localhost:3000/updateuser/${userid}`, {
            roles: [1010]
        }, { headers: { "Authorization": `Bearer ${localStorage.getItem('accessToken')}` } }).then(res => {
            this.getUsers();
        }
        ).catch(err => {
            console.log(err);
            alert("An error occured");
        }
        );

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
                        <p class="card__apply">
                            <a class="card__link" href="#">Assign Role <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        );

        const renderUsers2 = this.state.users.map((user) =>
            <div className="card">
                <img className='pixy' src={img} alt="Avatar" />
                <div class="container">
                    <h4><b>{user.username}</b></h4>
                    <p>{user.email}</p>
                </div>
            </div>
        );
        console.log(renderUsers);




        return (
            <>
                <div className="w3-light-grey w3-padding-32 w3-center">
                    <h1 className="w3-jumbo">Admin Page</h1>
                </div>
                <button onClick={this.getUsers}>Get Users</button>
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