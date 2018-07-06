// Section to show a single slice of the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Layer from './Layer'

import {
    DEFAULT_STAGE_CUBES,
    CUBES
} from '../../../constants/cubes/cubes'

import { Y_INDICES_ARRAY } from '../constants'

const mapStateToProps = ({
    canSceneRender
}) => ({
    canSceneRender
})

class Layers extends Component {

    static defaultProps = {
        presences: {}
    }

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,

        // From parent.
        presences: PropTypes.object.isRequired,
        cubes: PropTypes.shape({
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
                cubes,
                ...other
            } = this.props,

            {
                hasMounted
            } = this.state,

            // Until the component is mounted, use the default stage cubes.
            renderedCubes = hasMounted ?
                cubes :
                CUBES[DEFAULT_STAGE_CUBES],

            {
                ceiling = {},
                floor = {},
                slantDirection = ''
            } = renderedCubes

        return (
            <div
                className={cx(
                    'Layers',
                    'absoluteFullContainer'
                )}
            >
                {Y_INDICES_ARRAY.map(yIndex => {

                    return (
                        <Layer {...other}
                            key={yIndex}
                            {...{
                                yIndex,
                                slantDirection,
                                ceilingZIndices: ceiling.zIndices,
                                ceilingBitmapKeys: ceiling.bitmapKeys,
                                floorZIndices: floor.zIndices,
                                floorBitmapKeys: floor.bitmapKeys,

                                /**
                                 * Not ideal, but for the Layers component,
                                 * "presences" refers to the single object of
                                 * arrays for each yIndex. Once passed to the
                                 * Layer component, it refers to just the
                                 * single array for the given yIndex.
                                 */
                                presences: presences[yIndex]
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Layers)
