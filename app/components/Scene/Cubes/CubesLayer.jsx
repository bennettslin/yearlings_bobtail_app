// Section to show a single slice of the scene.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Cubes from '../Cubes/Cubes'

// TODO
const mapStateToProps = ({
    canSceneRender
}) => ({
    canSceneRender
})

class CubesLayer extends Component {

    static propTypes = {
        ceilingZIndices: PropTypes.array.isRequired,
        ceilingBitmapKeys: PropTypes.array.isRequired,
        floorZIndices: PropTypes.array.isRequired,
        floorBitmapKeys: PropTypes.array.isRequired
    }

    render() {

        const {
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
                    oppositeZIndices={floorZIndices}
                />
                <Cubes {...other}
                    isFloor
                    bitmapKeys={floorBitmapKeys}
                    zIndices={floorZIndices}
                    oppositeZIndices={ceilingZIndices}
                />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(CubesLayer)
