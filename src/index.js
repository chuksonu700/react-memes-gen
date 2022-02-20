import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import { fetchMemes } from './actions';
// for working ascynChronously
import thunk from 'redux-thunk';

//so we can get data async
const store = createStore(rootReducer,applyMiddleware(thunk));

store.subscribe(()=>console.log('Store: ', store.getState()))
store.dispatch(fetchMemes())

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));