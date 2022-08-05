import './ContactAdd.css';
import img from '../Login/login.png';
import axios from 'axios';
import React, { Component } from 'react';


class ContactAdd extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobile: '',
            email: '',
            address: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, mobile, email, address } = this.state;
        axios.post('http://localhost:3000/api/contact', { name, mobile, email, address }, { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } })
            .then(res => {
                console.log(res.data);
                this.setState({
                    name: '',
                    mobile: '',
                    email: '',
                    address: ''
                })
            }).catch(err => {
                console.log(err);
            }
            )
    }

    render() {
        return (
            <>
                <div >
                    <ul className="nav nav-tabs page-header-tab ">
                        <li className="nav-item" ><a
                            style={window.location.pathname === '/contact' ? { borderTop: "3px solid red" } : { color: "grey" }}
                            className={window.location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
                            data-toggle="tab" href="/contact">Contact List</a></li>
                        <li className="nav-item"><a
                            className={window.location.pathname === '/contact-add' ? 'nav-link active' : 'nav-link'}
                            style={window.location.pathname === '/contact-add' ? { borderTop: "3px solid red" } : { color: "grey" }}
                            data-toggle="tab" href="/contact-add">Add Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card-header">
                        Add Contact
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group row mb-4">
                                <label htmlFor="name" className="col-sm-2 col-form-label">Name <span style={{ "color": "red" }}> *</span></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="name"
                                        placeholder="Enter your name" value={this.state.name} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row mb-4">
                                <label htmlFor="priority" className="col-sm-2 col-form-label">Mobile  <span style={{ "color": "red" }}> *</span> </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="mobile"
                                        placeholder="Enter your mobile number" value={this.state.mobile} onChange={this.handleChange} />
                                </div>
                                <div className="invalid-feedback">Example invalid custom select feedback</div>

                            </div>
                            <div className="form-group row mb-4">
                                <label htmlFor="priority" className="col-sm-2 col-form-label">Email   <span style={{ "color": "red" }}> *</span> </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="email"
                                        placeholder="Enter your email" value={this.state.email} onChange={this.handleChange} />
                                </div>
                                <div className="invalid-feedback">Example invalid custom select feedback</div>

                            </div>


                            <div className="form-group row mb-4">
                                <label htmlFor="Descrption" className="col-sm-2 col-form-label">Address  <span style={{ "color": "red" }}> *</span></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="address"
                                        placeholder="Enter your address" value={this.state.address} onChange={this.handleChange} />
                                </div>
                            </div>
                            <button type="submit"
                                className=" button button-block"
                            >Add Contact</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactAdd;