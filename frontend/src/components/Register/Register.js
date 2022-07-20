import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';
import logo from './img-01.png';

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
        axios.post('http://localhost:3001/register', this.state, { withCredentials: true }).then(res => {
            this.props.history.replace('/login');
            alert("User created successfully");
        }
        ).catch(err => {
            console.log(err)
            alert("An error occured");
        }
        );
        axios.post('http://localhost:3001/send-email', {
            to: this.state.email,
            subject: "Welcome Mail",
            text: "Welcome to the application"
        }, { withCredentials: true });
        this.setState({
            username: '',
            password: '',
            email: ''
        });
        event.preventDefault();
    }


    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={logo} alt="IMG" />
                        </div>

                        <form onSubmit={this.handleSubmit} className="login100-form validate-form">
                            <span className="login100-form-title">
                                Sign up
                            </span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="username" placeholder="Name" value={this.state.username} onChange={this.handleChange} required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button type="submit" className="login100-form-btn">
                                    Sign up
                                </button>
                            </div>

                            <div className="text-center p-t-136">
                                <a className="txt2" href="login">
                                    Already have account? Sign in
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default Register;