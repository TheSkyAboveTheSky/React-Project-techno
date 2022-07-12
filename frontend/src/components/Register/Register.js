import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        axios.post('http://localhost:3000/register', this.state , { withCredentials: true }).then(res => {
            alert("User created successfully");
        }
        ).catch(err => {
            alert("An error occured");
        }
        );
        axios.post('http://localhost:3000/send-email', {
            to: this.state.email,
            subject: "Welcome Mail",
            text: "Welcome to the application"
        } , { withCredentials: true });
        this.setState({
            username: '',
            password: '',
            email: ''
        });
        event.preventDefault();
    }


    render() {
        return (
            <div className="auth">
                <div className="auth_left">
                    <div className="card">
                        <div className="text-center mb-5">
                            <a className="header-brand" href="index.html"><i className="fa fa-soccer-ball-o brand-logo"></i></a>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="card-body">
                                <div className="card-title">Create new account</div>
                                <div className="form-group">
                                    <label className="form-label">Username</label>
                                    <input type="text" name='username' value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Enter name" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email address</label>
                                    <input type="email" name='email' value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Enter email" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <input type="password" name='password' value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" required />
                                </div>
                                <div className="form-group">
                                    <label className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" required="required" />
                                        <span className="custom-control-label">Agree the terms and policy</span>
                                    </label>
                                </div>
                                <div className="form-footer">
                                    <button type="submit" className="btn btn-primary btn-block">Create new account</button>
                                </div>
                            </div>
                        </form>
                        <div className="text-center text-muted">
                            Already have account? <a href="login">Sign in</a>
                        </div>
                    </div>
                </div>
                <div className="auth_right full_img"></div>
            </div>
        );
    }
}


export default Register;