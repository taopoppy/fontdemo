import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store'

console.log('store',store)
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

