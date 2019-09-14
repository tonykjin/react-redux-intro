import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Provider class provides state information 
import { createStore } from 'redux'; //holds our state?
import rootReducer from './reducers';

import App from './components/app';

const STORE = createStore(rootReducer);

ReactDOM.render(
    <Provider store={STORE}>
        <App />
    </Provider>,
    document.getElementById('root')
);
