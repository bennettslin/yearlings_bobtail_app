// Section to show a single slice of the scene.

import React, { Component, Fragment } from 'react'

import Cubes from '../Cubes/Cubes'
import Presences from '../Presences/Presences'

class Layer extends Component {

    render() {

        return (
            <Fragment>
                <Cubes {...this.props} />
                <Cubes {...this.props}
                    isFloor
                />
                <Presences {...this.props} />
            </Fragment>
        )
    }
}

export default Layer
