import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { reducer } from './store/reducers'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'



const store = createStore(
    reducer, applyMiddleware(thunk, logger)
  );

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

