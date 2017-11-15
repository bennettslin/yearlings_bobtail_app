import React, { Component } from 'react'
import App from './App'

import { getRoutingIndicesObject } from '../helpers/routing-helper'

class RoutingContainer extends Component {

    constructor(props) {
        super(props)

        const { routingParamString } = props.match.params,

            routingIndicesObject =
                getRoutingIndicesObject(routingParamString)

        this.state = routingIndicesObject
    }

    render() {
        console.error('this.state.params', this.state)

        return (
            <App {...this.props}

            />
        )
    }
}

export default RoutingContainer
