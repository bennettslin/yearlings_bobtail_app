// Section to show a single slice of the scene.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CubesLayer from '../Cubes/CubesLayer'
import Presence from '../Presences/Presence'

// TODO
const mapStateToProps = ({
    canSceneRender
}) => ({
    canSceneRender
})

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
                <CubesLayer {...other}
                    {...{
                        ceilingZIndices,
                        ceilingBitmapKeys,
                        floorZIndices,
                        floorBitmapKeys
                    }}
                />
                <Presence {...other}
                    {...{
                        presence,
                        zIndices: floorZIndices
                    }}
                />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(Layers)
