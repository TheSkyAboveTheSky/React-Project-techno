import React, { Component } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: jwtDecode(localStorage.getItem('accessToken')).UserInfo.name,
            email: jwtDecode(localStorage.getItem('accessToken')).UserInfo.email,
            roles: jwtDecode(localStorage.getItem('accessToken')).UserInfo.roles[0],
        }
    }

    logout = () => {
        localStorage.clear();
    }

    render() {
        const SidebarList = () => {
            if ((this.state.roles) === '1010') {

                return (
                    <ul className="metismenu">
                        <li className="g_heading">Project</li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="home"><i className="fa fa-dashboard"></i><span>Dashboard</span></NavLink>
                        </li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="project-list"><i className="fa fa-list-ol"></i><span>Project list</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="taskboard"><i
                            className="fa fa-calendar-check-o"></i><span>Taskboard</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="ticket-list"><i className="fa fa-list-ul"></i><span>Ticket List</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="project-ticket-details.html"><i className="icon-tag"></i><span>Ticket Details</span></NavLink>
                        </li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="project-clients.html"><i className="fa fa-user"></i><span>Clients</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="todo-list"><i className="fa fa-check-square-o"></i><span>Todo List</span></NavLink></li>
                        <li className="g_heading">App</li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="app-calendar.html"><i className="fa fa-calendar"></i><span>Calendar</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="chat"><i className="fa fa-comments"></i><span>Chat</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="contact"><i className="fa fa-address-book"></i><span>Contact</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="app-filemanager.html"><i className="fa fa-folder"></i><span>FileManager</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="app-setting.html"><i className="fa fa-gear"></i><span>Setting</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="page-gallery.html"><i className="fa fa-photo"></i><span>Gallery</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="users"><i className="fa fa-lock"></i><span>Authorization</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="authentication" className="has-arrow arrow-c"><i className="fa fa-lock"></i><span>Authentication</span></NavLink>
                            <ul>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="login">Login</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="register">Register</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} onClick={this.logout} to="/login">Logout</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="forgot-password.html">Forgot password</NavLink></li>
                            </ul>
                        </li>
                        <li className="g_heading">Support</li>
                        <li><NavLink to="authentication" activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }}><i className="fa fa-support"></i><span>Need Help?</span></NavLink></li>
                        <li><NavLink to="authentication" activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }}><i className="fa fa-tag"></i><span>ContactUs</span></NavLink></li>
                    </ul>
                )
            }
            else if ((this.state.roles) === '2020') {
                return (
                    <ul className="metismenu">
                        <li className="g_heading">Project</li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="home"><i className="fa fa-dashboard"></i><span>Dashboard</span></NavLink>
                        </li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="project-list"><i className="fa fa-list-ol"></i><span>Project list</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="taskboard"><i
                            className="fa fa-calendar-check-o"></i><span>Taskboard</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="project-clients.html"><i className="fa fa-user"></i><span>Clients</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="todo-list"><i className="fa fa-check-square-o"></i><span>Todo List</span></NavLink></li>
                        <li className="g_heading">App</li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="app-filemanager.html"><i className="fa fa-folder"></i><span>FileManager</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="authentication" className="has-arrow arrow-c"><i className="fa fa-lock"></i><span>Authentication</span></NavLink>
                            <ul>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="login">Login</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="register">Register</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} onClick={this.logout} to="login">Logout</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="forgot-password.html">Forgot password</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                )
            }
            else if ((this.state.roles) === '3030') {
                return (
                    <ul className="metismenu">
                        <li className="g_heading">Project</li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="home"><i className="fa fa-dashboard"></i><span>Dashboard</span></NavLink>
                        </li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="project-list"><i className="fa fa-list-ol"></i><span>Project list</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="taskboard"><i
                            className="fa fa-calendar-check-o"></i><span>Taskboard</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="ticket-list"><i className="fa fa-list-ul"></i><span>Ticket List</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="project-ticket-details.html"><i className="icon-tag"></i><span>Ticket Details</span></NavLink>
                        </li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="project-clients.html"><i className="fa fa-user"></i><span>Clients</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="todo-list"><i className="fa fa-check-square-o"></i><span>Todo List</span></NavLink></li>
                        <li className="g_heading">App</li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="app-calendar.html"><i className="fa fa-calendar"></i><span>Calendar</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="chat"><i className="fa fa-comments"></i><span>Chat</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="app-contact.html"><i className="fa fa-address-book"></i><span>Contact</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="app-filemanager.html"><i className="fa fa-folder"></i><span>FileManager</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="app-setting.html"><i className="fa fa-gear"></i><span>Setting</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="page-gallery.html"><i className="fa fa-photo"></i><span>Gallery</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="authentication" className="has-arrow arrow-c"><i className="fa fa-lock"></i><span>Authentication</span></NavLink>
                            <ul>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="login">Login</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="register">Register</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} onClick={this.logout} to="login">Logout</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="forgot-password.html">Forgot password</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                )
            }
            else if ((this.state.roles) === '4040') {
                return (
                    <ul className="metismenu">
                        <li className="g_heading">Project</li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="home"><i className="fa fa-dashboard"></i><span>Dashboard</span></NavLink>
                        </li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="ticket-list"><i className="fa fa-list-ul"></i><span>Ticket List</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="project-ticket-details.html"><i className="icon-tag"></i><span>Ticket Details</span></NavLink>
                        </li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="todo-list"><i className="fa fa-check-square-o"></i><span>Todo List</span></NavLink></li>
                        <li className="g_heading">App</li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="app-calendar.html"><i className="fa fa-calendar"></i><span>Calendar</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="chat"><i className="fa fa-comments"></i><span>Chat</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="app-contact.html"><i className="fa fa-address-book"></i><span>Contact</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="authentication" className="has-arrow arrow-c"><i className="fa fa-lock"></i><span>Authentication</span></NavLink>
                            <ul>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="login">Login</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="register">Register</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} onClick={this.logout} to="login">Logout</NavLink></li>
                                <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} to="forgot-password.html">Forgot password</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                )
            }
            else {
                return (
                    <ul className="metismenu">
                        <li className="g_heading">Project</li>
                        <ul>
                            <li><NavLink activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} onClick={this.logout} to="login">Logout</NavLink></li>
                        </ul>
                    </ul>
                )
            }
        }


        return (
            <div id="left-sidebar" className="sidebar ">
                <h5 className="brand-name">Soccer <NavLink to="home" activeStyle={{ color: "red", textDecoration: "none", borderRight: "2px solid black" }} className="menu_option float-right"><i
                    className="icon-grid font-16" data-toggle="tooltip" data-placement="left"
                    title="Grid & List Toggle"></i></NavLink></h5>
                <div className="BR-side-bar__user-info">
                    {/* <div>
                        <img alt="" src="https://cdn-icons-png.flaticon.com/512/15/15081.png" />
                    </div> */}
                    <div className="BR-side-bar__user-info__text">
                        <span title="ABSTest" className="BR-side-bar__user-info__text__name">{this.state.name}</span>
                        <br></br>
                        <span className="br-side-bar__user-info__text__email">{this.state.email}</span>
                    </div>
                </div>
                <nav id="left-sidebar-nav" className="sidebar-nav">
                    {SidebarList()}
                </nav>
            </div>
        );
    }
}

export default Sidebar;