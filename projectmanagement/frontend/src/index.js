import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App';
import TicketDetails from './components/ticket_details';
import TicketList from './components/ticket_list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/list" element={<TicketList />} />
        <Route path="/ticket/:id" element={<TicketDetails />} />
      </Routes>
    </React.StrictMode>  
  </BrowserRouter>
);

