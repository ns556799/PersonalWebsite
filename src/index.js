import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import About from './pages/About'
import registerServiceWorker from './registerServiceWorker';

const routing = (
    <Router>
        <div>
            <Route path='/' component={App} />
            <Route path='/about' component={About} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
