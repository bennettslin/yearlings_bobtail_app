// A single row of cubes.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'

import {
    setCanRenderCubes
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
    getSideCubeZIndex,
    getNextYIndex
} from './cubeHelper'

const zIndicesPropTypes =
    PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    ).isRequired

const mapStateToProps = ({
    canCubesRender,
    canSceneRender,
    canTheatreRender,
    stageCoordinates
}) => ({
    canCubesRender,
    canSceneRender,
    canTheatreRender,
    stageCoordinates
})

class Cubes extends Component {

    static propTypes = {
        // Through Redux.
        canCubesRender: PropTypes.number.isRequired,
        canSceneRender: PropTypes.bool.isRequired,
        canTheatreRender: PropTypes.bool.isRequired,
        setCanRenderCubes: PropTypes.func.isRequired,

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

        this._setCanRenderCubes = this._setCanRenderCubes.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const {
                yIndex,
                canCubesRender
            } = nextProps,

            isRenderableYIndex = yIndex <= canCubesRender,

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
                canCubesRender
            } = this.props,

            {
                canSceneRender: couldSceneRender,
                canTheatreRender: couldTheatreRender,
                canCubesRender: couldCubesRender
            } = prevProps,

            { hasMounted } = this.state

        if (
            (hasMounted && canSceneRender && !couldSceneRender) ||
            (!hasMounted && canTheatreRender && !couldTheatreRender) ||
            (
                yIndex === canCubesRender &&
                prevProps.yIndex > couldCubesRender
            )
        ) {
            console.warn('Cubes rendered for yIndex: ', yIndex)
            this.setNextYIndex()
        }

        if (!this.state.hasMounted) {
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

    _setCanRenderCubes() {
        this.props.setCanRenderCubes(
            getNextYIndex(this.props.yIndex)
        )
    }

    setNextYIndex() {
        /**
         * If there is a next yIndex to be set, only do so from one of the
         * Cubes components.
         */
        if (this.props.isFloor) {
            const
                {
                    yIndex,
                    canCubesRender
                } = this.props,

                nextYIndex = getNextYIndex(yIndex)

                if (yIndex === canCubesRender && yIndex < nextYIndex) {

                    setTimeout(
                    this._setCanRenderCubes,
                    0
                )
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

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCanRenderCubes
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Cubes)
