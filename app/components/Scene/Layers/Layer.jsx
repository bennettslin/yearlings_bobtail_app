// Section to show a single slice of the scene.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Cubes from '../Cubes/Cubes'
import Presences from '../Presences/Presences'

class Layers extends Component {

    static propTypes = {
        presence: PropTypes.array,
        ceilingZIndices: PropTypes.array.isRequired,
        ceilingBitmapKeys: PropTypes.array.isRequired,
        floorZIndices: PropTypes.array.isRequired,
        floorBitmapKeys: PropTypes.array.isRequired
    }

    render() {

        const {
            presence,
            ceilingZIndices,
            ceilingBitmapKeys,
            floorZIndices,
            floorBitmapKeys,
            ...other
        } = this.props

        return (
            <Fragment>
                <Cubes {...other}
                    bitmapKeys={ceilingBitmapKeys}
                    zIndices={ceilingZIndices}
                />
                <Cubes {...other}
                    isFloor
                    bitmapKeys={floorBitmapKeys}
                    zIndices={floorZIndices}
                />
                <Presences {...other}
                    {...{
                        presence,
                        zIndices: floorZIndices
                    }}
                />
            </Fragment>
        )
    }
}

export default Layers
