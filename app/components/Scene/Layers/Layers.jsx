// Section to show a single slice of the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Layer from './Layer'

import {
    DEFAULT_STAGE_CUBES,
    CUBES
} from '../../../constants/cubes'

import { Y_INDICES_ARRAY } from '../constants'

const mapStateToProps = ({
    canSceneRender
}) => ({
    canSceneRender
})

class Layers extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,

        // From parent.
        presence: PropTypes.object,
        tiles: PropTypes.shape({
            ceiling: PropTypes.shape({
                zIndices: PropTypes.array.isRequired,
                bitmapKeys: PropTypes.array.isRequired
            }),
            floor: PropTypes.shape({
                zIndices: PropTypes.array.isRequired,
                bitmapKeys: PropTypes.array.isRequired
            }),
            slantDirection: PropTypes.string
        }).isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            hasMounted: false
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender
    }

    componentDidUpdate(prevProps) {
        if (this.props.canSceneRender && !prevProps.canSceneRender) {
            console.warn('Layers rendered.')

            this.setState({
                hasMounted: true
            })
        }
    }

    render() {

        const {
                presences,
                tiles,
                ...other
            } = this.props,

            {
                hasMounted
            } = this.state,

            // Until the component is mounted, use the default stage tiles.
            renderedTiles = hasMounted ?
                tiles :
                CUBES[DEFAULT_STAGE_CUBES],

            /**
             * FIXME: These safety checks should no longer be needed once all
             * tiles and bitmapKeys for all scenes are established.
             */
            {
                ceiling = CUBES[DEFAULT_STAGE_CUBES].ceiling,
                floor = CUBES[DEFAULT_STAGE_CUBES].floor,
                slantDirection = ''
            } = renderedTiles,

            ceilingZIndices = ceiling.zIndices ||
                CUBES[DEFAULT_STAGE_CUBES].ceiling.zIndices,

            ceilingBitmapKeys = ceiling.bitmapKeys ||
                CUBES[DEFAULT_STAGE_CUBES].ceiling.bitmapKeys,

            floorZIndices = floor.zIndices ||
                CUBES[DEFAULT_STAGE_CUBES].floor.zIndices,

            floorBitmapKeys = floor.bitmapKeys ||
                CUBES[DEFAULT_STAGE_CUBES].floor.bitmapKeys

        return (
            <div
                className={cx(
                    'Layers',
                    'absoluteFullContainer'
                )}
            >
                {Y_INDICES_ARRAY.map(yIndex => {

                    const presence = presences && presences[`yIndex${yIndex}`]

                    return (
                        <Layer {...other}
                            key={yIndex}
                            {...{
                                yIndex,
                                slantDirection,
                                presence,
                                ceilingZIndices,
                                ceilingBitmapKeys,
                                floorZIndices,
                                floorBitmapKeys
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Layers)
