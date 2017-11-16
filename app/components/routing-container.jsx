import React, { Component } from 'react'
import App from './App'

import { getRoutingIndicesObject, getIsValidSongIndex } from '../helpers/routing-helper'

class RoutingContainer extends Component {

    constructor(props) {
        super(props)

        const state = {},

            { routingParamString } = props.match.params,

            // Get whatever params the route gives us.
            routingIndicesObject =
                getRoutingIndicesObject(routingParamString),

            { routingSongIndex } = routingIndicesObject

        // If the route gives us a song index, validate and save it.
        if (getIsValidSongIndex(routingSongIndex)) {
            state.routingSongIndex = routingSongIndex
        }

        this.state = state
    }

    componentDidMount() {
        // TODO: Store the routing params in Redux.
    }

    /**
     * TODO: If the routing params change the song index, then we need to reset
     * the rest of the indices. Have a method for this. This will need to
     * repurpose the storage helper validation methods. Then, app should not
     * get those props from Redux, but from here, and componentShouldUpdate
     * should make sure these changes do not cause a re-render.
     */

    render() {
        const { selectedSongIndex,
                ...other } = this.props,

            { routingSongIndex } = this.state,

            // If route gave us a valid song index, choose it.
            chosenSongIndex = !isNaN(routingSongIndex) ?
                routingSongIndex : selectedSongIndex

        return (
            <App {...other}
                selectedSongIndex={chosenSongIndex}
            />
        )
    }
}

export default RoutingContainer
