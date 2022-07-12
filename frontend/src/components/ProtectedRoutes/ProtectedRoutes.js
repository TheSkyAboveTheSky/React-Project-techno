import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default class ProtectedRoutes extends Component {
  render() {
        let token = localStorage.getItem('accessToken');
        try {
            jwtDecode(token);
            if (token) {
              if (this.props.path === '/admin') {
                return (<Route path={this.props.path} component={this.props.component}/>)
              }else if (this.props.path === '/employee') {
                return (<Route path={this.props.path} component={this.props.component}/>)
              }else if (this.props.path === '/projectManager') {
                return (<Route path={this.props.path} component={this.props.component}/>)
              }else if (this.props.path === '/teamLeader') {
                return (<Route path={this.props.path} component={this.props.component}/>)
              }
            
        }
        } catch (error) {
            localStorage.clear();
            window.alert('invalid token');
            return <Redirect to='/login'/>
        }
  }
}