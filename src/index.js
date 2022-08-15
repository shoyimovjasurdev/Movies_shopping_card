import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Sections/App/App';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter,Route} from "react-router-dom"
import Home from './Sections/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </React.StrictMode>
);
