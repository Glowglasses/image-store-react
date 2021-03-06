import React from 'react';
import './media.css'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom'
import 'antd/dist/antd.css';
ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
