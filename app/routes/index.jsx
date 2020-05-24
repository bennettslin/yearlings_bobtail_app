import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AppContainer from '../containers/App'

const ProductionRoutes = () => (
    <Switch>
        <Route
            exact
            {...{
                path: '/',
                component: AppContainer
            }}
        />
        <Route
            exact
            {...{
                path: '/:routingParamString/',
                component: AppContainer
            }}
        />
    </Switch>
)

export default ProductionRoutes
