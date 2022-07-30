import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import Admin from '../Admin/Admin';
import Register from '../Register/Register';
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';
import UnAuthorized from '../UnAuthorized/UnAuthorized';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import TodoList from '../TodoList/TodoList';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Chat from '../Chat/Chat';
import Contact from '../Contact/Contact';
import { Fragment } from 'react';
import ContactAdd from '../ContactAdd/ContactAdd';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        {localStorage.getItem('accessToken') ?  <Redirect exact from='/' to='/home' /> :  <Redirect exact from='/' to='/login' />}
        {/* <Redirect exact from='/' to='/login' /> */}
        {/* <ProtectedRoutes exact path='*' component={NotFound} /> */}
        <Fragment>
          <Header />
          <Sidebar />
          <div className='margin-left' style={{display:'block'}}>
            <ProtectedRoutes path='/home' component={Home} />
            <ProtectedRoutes path='/todo-list' component={TodoList} />
            <ProtectedRoutes path='/todo-add' component={Form} />
            <ProtectedRoutes path='/users' component={Admin} />
            <ProtectedRoutes path='/chat' component={Chat} />
            <ProtectedRoutes path='/contact' component={Contact} />
            <ProtectedRoutes path='/contact-add' component={ContactAdd} />
            <Route path='/unAuthorized' component={UnAuthorized} />
          </div>
        </ Fragment>
      </Switch>
    </Router>
  );
}

export default App;
