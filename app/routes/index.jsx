import React from 'react'
import { Route, Switch } from 'react-router-dom'

import RoutingContainer from '../containers/Routing'

const ProductionRoutes = () => (
    <Switch>
        <Route
            exact
            {...{
                path: '/',
                component: RoutingContainer
            }}
        />
        <Route
            exact
            {...{
                path: '/:routingParamString/',
                component: RoutingContainer
            }}
        />
    </Switch>
)

export default ProductionRoutes
