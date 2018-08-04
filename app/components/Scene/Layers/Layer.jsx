// Section to show a single slice of the scene.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Cubes from '../Cubes/Cubes'
import Presences from '../Presences/Presences'

class Layer extends Component {

    static propTypes = {
        yIndex: PropTypes.number.isRequired
    }

    render() {
        const { props } = this

        return (
            <Fragment>
                <Cubes {...props} />

                <Presences {...props} />
            </Fragment>
        )
    }
}

export default Layer
