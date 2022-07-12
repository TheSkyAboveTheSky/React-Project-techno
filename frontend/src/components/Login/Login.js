import axios from 'axios';
import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            authorized: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try
        {
            let {data} = await axios.post('http://localhost:3000/auth', {
                email: this.state.email,
                password: this.state.password
            });
            if(data.message === 'success') {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('roles', data.roles);
                if(data.roles.includes(1010)) {
                    this.props.history.replace('/admin');
                }
                else if(data.roles.includes(4040)) {
                    this.props.history.replace('/employee');
                }
                else if(data.roles.includes(2020)) {
                    this.props.history.replace('/projectManager');
                }
                else if(data.roles.includes(3030)) {
                    this.props.history.replace('/teamLeader');
                }
            }else{
                alert('Invalid credentials');
            }
        }
        catch (error)
        {
            console.log(error);
        }

    }

    render() {
        // let page = <>

        // </>;
        // if (this.state.authorized) {
        //     if (this.state.roles.includes(1010)) {
        //         <Redirect to="/admin" />
        //         page = <Admin accessToken={this.state.accessToken} authorized={this.state.authorized} />;
        //     } else if (this.state.roles.includes(4040)) {
        //         <Redirect to="/employee" />
        //         page = <Employee accessToken={this.state.accessToken} authorized={this.state.authorized} />;
        //     } else if (this.state.roles.includes(2020)) {
        //         <Redirect to="/projectmanager" />
        //         page = <ProjectManager accessToken={this.state.accessToken} authorized={this.state.authorized} />;
        //     } else if (this.state.roles.includes(3030)) {
        //         <Redirect to="/teamleader" />
        //         page = <TeamLeader accessToken={this.state.accessToken} authorized={this.state.authorized} />;
        //     }
        //     else {
        //         page = <h1>This user is not assigned to any role yet</h1>
        //     }
        // }

        return (
            <div>
                <div className="auth">
                    <div className="auth_left">
                        <div className="card">
                            <div className="text-center mb-2">
                                <a className="header-brand" href="index.html"><i className="fa fa-soccer-ball-o brand-logo"></i></a>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="card-body">
                                    <div className="card-title">Login to your account</div>
                                    <div className="form-group">
                                        <input type="email" name='email' value={this.state.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Password<a href="forgot-password.html" className="float-right small">I
                                            forgot password</a></label>
                                        <input type="password" name='password' value={this.state.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" />
                                            <span className="custom-control-label">Remember me</span>
                                        </label>
                                    </div>
                                    <div className="form-footer">
                                        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-muted">
                                Don't have account yet? <a href="register">Sign up</a>
                            </div>
                        </div>
                    </div>
                    <div className="auth_right full_img"></div>
                </div>
            </div>
        );
    }
}


export default Login;