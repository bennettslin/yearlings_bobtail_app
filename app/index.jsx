import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,
         applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './less/main.less';
import Album from './components/helpers/album-helper.js'
import YearlingsBobtail from './album-data/00-yearlings-bobtail.js';

import App from './components/app.jsx';

import reducers from './reducers';

// From Udemy tutorial. This will allow for asynchronous Redux actions.
const createStoreWithMiddleware = applyMiddleware()(createStore);

// Restructure raw data to be usable by app.
Album.prepareAlbumObject(YearlingsBobtail);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App {...YearlingsBobtail} />
    </Provider>,
    document.getElementById('app')
);
