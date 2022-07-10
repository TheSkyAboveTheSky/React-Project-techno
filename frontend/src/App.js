
import './App.css';
import Header from './components/Header';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap';
import Form from './components/Form';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" style={{"background-color" : "#f2f2f2"}}>
    
    <Header />
    <Sidebar />
    <Nav />
    <Router>
      
      <Routes>
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/todo-add" element={<Form />} />
      </Routes>
      </Router>

    </div>
  );
}

export default App;
