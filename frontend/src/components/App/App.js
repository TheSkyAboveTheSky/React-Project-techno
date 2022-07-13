import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import Admin from '../Admin/Admin';
import Employee from '../Employee/Employee';
import Register from '../Register/Register';
import ProjectManager from '../ProjectManager/ProjectManager';
import TeamLeader from '../TeamLeader/TeamLeader';
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';
import UnAuthorized from '../UnAuthorized/UnAuthorized';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/register' component={Register}/>
      <ProtectedRoutes path='/admin' component={Admin}/>
      <ProtectedRoutes path='/employee' component={Employee}/>
      <ProtectedRoutes path='/projectManager' component={ProjectManager}/>
      <ProtectedRoutes path='/teamLeader' component={TeamLeader}/>
      <ProtectedRoutes path='/unAuthorized' component={UnAuthorized}/>
      <Route path='/login' component={Login}/>
      <Redirect exact from='/' to='/login'/>
    </Switch>
    </Router>
  );
}

export default App;
