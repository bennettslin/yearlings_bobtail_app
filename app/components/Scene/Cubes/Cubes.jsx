// A single row of cubes.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'

import {
    setRenderableCubesYIndex
} from '../../../redux/actions/render'


import DynamicSvg from '../../DynamicSvg/DynamicSvg'
import Cube from './Cube'

import { DEFAULT_X_AXIS_INDICES,
         SLANTED_LEFT_X_AXIS_INDICES,
         SLANTED_RIGHT_X_AXIS_INDICES } from '../constants'

import { CUBE_Y_AXIS_LENGTH } from '../../../constants/stage'

import { getValueInAbridgedMatrix } from '../../../helpers/generalHelper'
import {
    getFrontCubeZIndex,
    getSideCubeZIndex
} from './cubeHelper'

const zIndicesPropTypes =
    PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    ).isRequired

const mapStateToProps = ({
    renderableCubesYIndex,
    canSceneRender,
    canTheatreRender,
    stageCoordinates
}) => ({
    renderableCubesYIndex,
    canSceneRender,
    canTheatreRender,
    stageCoordinates
})

class Cubes extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        canTheatreRender: PropTypes.bool.isRequired,
        renderableCubesYIndex: PropTypes.number.isRequired,
        setRenderableCubesYIndex: PropTypes.func.isRequired,

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

        this._setRenderableCubesYIndex =
            this._setRenderableCubesYIndex.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const {
                yIndex,
                renderableCubesYIndex
            } = nextProps,

            isRenderableYIndex = yIndex <= renderableCubesYIndex,

            canParentRender = this.state.hasMounted ?
                nextProps.canSceneRender :
                nextProps.canTheatreRender

        return isRenderableYIndex && canParentRender
    }

    componentDidUpdate(prevProps) {
        const {
                yIndex,
                canSceneRender,
                canTheatreRender,
                renderableCubesYIndex
            } = this.props,

            {
                canSceneRender: couldSceneRender,
                canTheatreRender: couldTheatreRender,
                renderableCubesYIndex: previousRenderableCubesYIndex
            } = prevProps,

            { hasMounted } = this.state

        // Update if...
        if (
            // ... component has mounted and scene is just now renderable...
            (hasMounted && canSceneRender && !couldSceneRender) ||

            /**
             * ... or component has not yet mounted and theatre is just now
             * renderable...
             */
            (!hasMounted && canTheatreRender && !couldTheatreRender) ||

            // ... or this is the most recent yIndex to be rendered.
            (
                yIndex === renderableCubesYIndex &&
                yIndex > previousRenderableCubesYIndex
            )
        ) {
            console.warn('Cubes rendered for yIndex: ', yIndex)

            this.setNextYIndex()
        }

        if (!hasMounted) {
            if (canSceneRender && !couldSceneRender) {

                /**
                 * Once component has mounted, it will subsequently render with
                 * Scene, not Theatre.
                 */
                this.setState({
                    hasMounted: true
                })
            }
        }
    }

    setNextYIndex() {
        /**
         * If there is a next yIndex to be set, only do so from the most recent
         * yIndex of one of the Cubes components. We'll choose the floor.
         */
        if (
            this.props.isFloor &&
            this.props.yIndex === this.props.renderableCubesYIndex
        ) {
            setTimeout(
                this._setRenderableCubesYIndex,
                0
            )
        }
    }

    _setRenderableCubesYIndex() {
        this.props.setRenderableCubesYIndex(
            this.props.yIndex + 1
        )
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

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setRenderableCubesYIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Cubes)
