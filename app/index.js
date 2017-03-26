import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,
         applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import { Router, browserHistory } from 'react-router'

import reducers from './redux/reducers'
// import routes from './routes'
import Wrapper from './routes'

// From Udemy tutorial. This will allow for asynchronous Redux actions.
const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        {/* <Router history={browserHistory} routes={routes} /> */}
        <Wrapper />
    </Provider>,
    document.getElementById('app')
)
