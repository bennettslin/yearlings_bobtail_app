// Section to show a single slice of the scene.

import React, { Component, Fragment } from 'react'

import Cubes from '../Cubes/Cubes'
import Presences from '../Presences/Presences'

class Layer extends Component {

    render() {

        const {
            ...other
        } = this.props

        return (
            <Fragment>
                <Cubes {...other} />
                <Cubes {...other}
                    isFloor
                />
                <Presences {...other} />
            </Fragment>
        )
    }
}

export default Layer
