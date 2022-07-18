import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Sidebar from '../Sidebar/Sidebar';

export default class ProtectedRoutes extends Component {
  render() {
    let token = localStorage.getItem('accessToken');
    try {
      jwtDecode(token);
      if (token) {
        if (this.props.path === '/home') {
          return (<Route path={this.props.path} component={this.props.component} />)
        }
         else if (this.props.path === '/todo-list') {
          return (<Route path={this.props.path} component={this.props.component} />)
        } else if (this.props.path === '/todo-add') {
          return (<Route path={this.props.path} component={this.props.component} />)
        } 
        else if (this.props.path === '/users') {
          return (<Route path={this.props.path} component={this.props.component} />)
        }
        //  else if (this.props.path === '/unAuthorized' && jwtDecode(token).UserInfo.roles[0] === '0000') {
        //   return (<Route path={this.props.path} component={this.props.component} />)
        // }

      }
    } catch (error) {
      localStorage.clear();
      window.alert('invalid token');
      return <Redirect to='/login' />
    }
  }
}