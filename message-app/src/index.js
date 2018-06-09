import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const user = {
  first: 'Robbie',
  last: 'Allen'
};
const greeting = <p>Hello, {user.first} {user.last}</p>;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
