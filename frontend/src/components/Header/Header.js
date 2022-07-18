import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div className='header-width'>
                <nav className="navbar navbar-dark " style={{ backgroundColor: "rgb(49, 58, 58)" }}>
                    <div className="container-fluid">
                        <div className="navbar-brand" style={{ marginLeft: '7%', "color": "rgb(180, 54, 54)" }}></div>
                        <form className="d-flex" role="search" style={{ marginRight: '5%' }}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: "rgb(76, 85, 85)", border: "rgb(76, 85, 85)" }} />
                            <button className="btn " type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16" style={{ margin: "4px", marginTop: "11px" }}>
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </nav>


            </div>
        );
    }
}

export default Header;