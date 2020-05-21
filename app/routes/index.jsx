import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ListenContainer from '../containers/Listen'

const ProductionRoutes = () => (
    <Switch>
        <Route
            exact
            {...{
                path: '/',
                component: ListenContainer
            }}
        />
        <Route
            exact
            {...{
                path: '/:routingParamString/',
                component: ListenContainer
            }}
        />
    </Switch>
)

export default ProductionRoutes
