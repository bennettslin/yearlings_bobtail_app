// Section to show a single slice of the scene.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Cubes from '../Cubes/Cubes'
import Presences from '../Presences/Presences'

class Layer extends Component {

    static defaultProps = {
        presences: {}
    }

    static propTypes = {
        presences: PropTypes.object
    }

    render() {

        const {
            presences,
            ...other
        } = this.props

        return (
            <Fragment>
                <Cubes {...other} />
                <Cubes {...other}
                    isFloor
                />
                <Presences {...other}
                    {...{
                        presences
                    }}
                />
            </Fragment>
        )
    }
}

export default Layer
