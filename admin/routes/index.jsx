import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AppContainer from '../../app/containers/App'
import Actors from '../containers/Actors'
import Annotations from '../containers/Annotations'
import LegacyPreviewer from '../containers/LegacyPreviewer'
import Progress from '../containers/Progress'
import Skies from '../containers/Skies'
import Things from '../containers/Things'

const DeliveryRoutes = () => (
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
                path: '/Actors',
                component: Actors
            }}
        />
        <Route
            exact
            {...{
                path: '/Annotations',
                component: Annotations
            }}
        />
        <Route
            exact
            {...{
                path: '/Previewer',
                component: LegacyPreviewer
            }}
        />
        <Route
            exact
            {...{
                path: '/Things',
                component: Things
            }}
        />
        <Route
            exact
            {...{
                path: '/Skies',
                component: Skies
            }}
        />
        <Route
            exact
            {...{
                path: '/Progress',
                component: Progress
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

export default DeliveryRoutes
