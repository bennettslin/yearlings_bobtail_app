// A single row of cubes.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DynamicSvg from '../../DynamicSvg/DynamicSvg'
import Cube from './Cube'

import { DEFAULT_X_AXIS_INDICES,
         SLANTED_LEFT_X_AXIS_INDICES,
         SLANTED_RIGHT_X_AXIS_INDICES } from '../constants'

import { CUBE_Y_AXIS_LENGTH } from '../../../constants/stage'

import { getValueInAbridgedMatrix } from '../../../helpers/generalHelper'
import { getFrontCubeZIndex,
         getSideCubeZIndex } from './cubeHelper'

const zIndicesPropTypes =
    PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    ).isRequired

const mapStateToProps = ({
    canSceneRender,
    canTheatreRender,
    stageCoordinates
}) => ({
    canSceneRender,
    canTheatreRender,
    stageCoordinates
})

class Cubes extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        canTheatreRender: PropTypes.bool.isRequired,

        // From parent.
        yIndex: PropTypes.number.isRequired,
        isFloor: PropTypes.bool,
        zIndices: zIndicesPropTypes,
        oppositeZIndices: zIndicesPropTypes,
        bitmapKeys: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.string.isRequired
            ).isRequired
        ).isRequired,
        slantDirection: PropTypes.string.isRequired,
        stageCoordinates: PropTypes.shape({
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        }).isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            hasMounted: false
        }
    }

    shouldComponentUpdate(nextProps) {
        // TODO: Maybe this logic should live further up?
        return this.state.hasMounted ?
            nextProps.canSceneRender :
            nextProps.canTheatreRender
    }

    componentDidUpdate(prevProps) {
        if (this.state.hasMounted) {
            if (this.props.canSceneRender && !prevProps.canSceneRender) {
                console.warn('Cubes subsequently rendered.')
            }

        } else {
            if (this.props.canTheatreRender && !prevProps.canTheatreRender) {
                console.warn('Cubes initially rendered.')
            }
        }

        if (!this.state.hasMounted) {
            if (this.props.canSceneRender && !prevProps.canSceneRender) {
                // Allow to subsequently render with Scene, not Theatre.
                this.setState({
                    hasMounted: true
                })
            }
        }
    }

    render() {

        const {
                yIndex,
                zIndices,
                oppositeZIndices,
                bitmapKeys,
                isFloor,
                slantDirection,
                stageCoordinates
            } = this.props,

            {
                width: stageWidth,
                height: stageHeight
            } = stageCoordinates,

            /**
             * Invert the rows, since top row in array should be top row shown
             * in floor field.
             */
            invertedYIndex = CUBE_Y_AXIS_LENGTH - yIndex - 1

        let columnIndicesArray = DEFAULT_X_AXIS_INDICES

        if (slantDirection === 'left') {
            columnIndicesArray = SLANTED_LEFT_X_AXIS_INDICES;

        } else if (slantDirection === 'right') {
            columnIndicesArray = SLANTED_RIGHT_X_AXIS_INDICES
        }

        return (
            <DynamicSvg
                className={cx(
                    `Cubes__y${yIndex}${yIndex === 0 ? '__back' : ''}${yIndex === CUBE_Y_AXIS_LENGTH - 1 ? '__front' : ''}`,
                    `Cubes__${isFloor ? 'floor' : 'ceiling'}`,
                    'absoluteFullContainer'
                )}
                viewBoxWidth={stageWidth}
                viewBoxHeight={stageHeight}
            >
                {columnIndicesArray.map(xIndex => {

                    const
                        zIndex = getValueInAbridgedMatrix(
                            zIndices, xIndex, yIndex
                        ),

                        // Determine if ceiling and floor tiles meet.
                        oppositeCubeZIndex = getValueInAbridgedMatrix(
                            oppositeZIndices, xIndex, yIndex
                        ),
                        oppositeTilesMeet = zIndex === oppositeCubeZIndex,

                        // Allow cube to determine max height of front face.
                        frontCubeZIndex = getFrontCubeZIndex({
                            isFloor,
                            zIndices,
                            slantDirection,
                            xIndex,
                            yIndex
                        }),

                        // Allow cube to determine max height of side face.
                        sideCubeZIndex = getSideCubeZIndex({
                            isFloor,
                            zIndices,
                            slantDirection,
                            xIndex,
                            yIndex
                        }),

                        bitmapKey = getValueInAbridgedMatrix(
                            bitmapKeys, xIndex, yIndex
                        )

                    return (
                        <Cube
                            key={`${xIndex}_${yIndex}`}
                            xIndex={xIndex}
                            yIndex={invertedYIndex}
                            zIndex={zIndex}
                            frontCubeZIndex={frontCubeZIndex}
                            sideCubeZIndex={sideCubeZIndex}
                            oppositeTilesMeet={oppositeTilesMeet}
                            bitmapKey={bitmapKey}
                            isFloor={isFloor}
                            slantDirection={slantDirection}
                        />
                    )
                })}
            </DynamicSvg>
        )
    }
}

export default connect(mapStateToProps)(Cubes)
