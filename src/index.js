import React from 'react';
import render from 'react-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Login from './login/login';
import signUp from './signUp/signUp';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
	<BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);
