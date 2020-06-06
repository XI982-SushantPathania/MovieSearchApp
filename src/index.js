import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import loginCredentialsReducer from './store/reducers/login';
import searchReducer from './store/reducers/search';


import './index.css';
import App from './App';

const rootReducer = combineReducers({
    loginCredentialsState:loginCredentialsReducer,
    searchState:searchReducer
  });

const store = createStore(rootReducer,applyMiddleware(thunk));

const app = (
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));