import React, { Component } from 'react';
// import './Navbar.css';


class Navbar extends Component {
    render() {
        return (
            <div >
                <ul className="nav nav-tabs page-header-tab ">
                    <li className="nav-item" ><a
                        style={window.location.pathname === '/todo-list' ? { borderTop: "3px solid red" } : { color: "grey" }}
                        className={window.location.pathname === '/todo-list' ? 'nav-link active' : 'nav-link'}
                        data-toggle="tab" href="/todo-list">Todo List</a></li>
                    <li className="nav-item"><a
                        className={window.location.pathname === '/todo-add' ? 'nav-link active' : 'nav-link'}
                        style={window.location.pathname === '/todo-add' ? { borderTop: "3px solid red" } : { color: "grey" }}
                        data-toggle="tab" href="/todo-add">Add Todo</a>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Navbar;