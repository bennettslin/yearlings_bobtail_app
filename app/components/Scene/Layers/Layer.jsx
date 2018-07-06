// Section to show a single slice of the scene.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Cubes from '../Cubes/Cubes'
import Presences from '../Presences/Presences'

import {
    DEFAULT_STAGE_CUBES,
    CUBES
} from '../../../constants/cubes/cubes'

class Layers extends Component {

    static defaultProps = {
        presences: [],
        ceilingZIndices: CUBES[DEFAULT_STAGE_CUBES].ceiling.zIndices,
        ceilingBitmapKeys: CUBES[DEFAULT_STAGE_CUBES].ceiling.bitmapKeys,
        floorZIndices: CUBES[DEFAULT_STAGE_CUBES].floor.zIndices,
        floorBitmapKeys: CUBES[DEFAULT_STAGE_CUBES].floor.bitmapKeys
    }

    static propTypes = {
        presences: PropTypes.array,
        ceilingZIndices: PropTypes.array.isRequired,
        ceilingBitmapKeys: PropTypes.array.isRequired,
        floorZIndices: PropTypes.array.isRequired,
        floorBitmapKeys: PropTypes.array.isRequired
    }

    render() {

        const {
            presences,
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
                        presences,
                        zIndices: floorZIndices
                    }}
                />
            </Fragment>
        )
    }
}

export default Layers
