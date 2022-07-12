import axios from 'axios';
import React, { Component } from 'react';
import './Employee.css';


class Employee extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="w3-light-grey w3-padding-32 w3-center">
                    <h1 className="w3-jumbo">Employee Page</h1>
                </div>
            </>
        );
    }
}

export default Employee;