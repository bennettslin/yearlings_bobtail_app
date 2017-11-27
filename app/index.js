/* global process */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './redux/reducers'

import './less/app.less'
import RoutingContainer from './components/routing-container'

// Why did you update?
const turnOnWDYULogging = false
if (process.env.NODE_ENV !== 'production' && turnOnWDYULogging) {
    const { whyDidYouUpdate } = require('why-did-you-update')
    whyDidYouUpdate(React)
}

// From Udemy tutorial. This will allow for asynchronous Redux actions.
// const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Router>
            <Switch>
                <Route exact path="/" component={RoutingContainer} />
                <Route exact path="/:routingParamString/" component={RoutingContainer} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
)
