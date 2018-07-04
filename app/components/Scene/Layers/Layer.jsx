// Section to show a single slice of the scene.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Cubes from '../Cubes/Cubes'
import Presence from '../Presences/Presence'

const mapStateToProps = () => ({})

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
                    oppositeZIndices={floorZIndices}
                />
                <Cubes {...other}
                    isFloor
                    bitmapKeys={floorBitmapKeys}
                    zIndices={floorZIndices}
                    oppositeZIndices={ceilingZIndices}
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
