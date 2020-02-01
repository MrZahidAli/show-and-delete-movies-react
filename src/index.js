import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Movies from './movies';
//ReactDOM.render(<Movies />, document.getElementById('root'));

import Counters from './components/counters';
ReactDOM.render(<Movies />, document.getElementById('root'));

