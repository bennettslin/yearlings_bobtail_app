// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'

import {
    setCanRenderCubes
} from '../../../redux/actions/render'

import Face from './Face/Face'

import { getCharStringForNumber } from '../../../helpers/formatHelper'
import { getStageCubeCornerPercentages } from '../sceneHelper'

import {
    getRelativeZHeight,
    getSideDirection,
    doRenderFrontOrSideFace,
    doRenderTileFace,
    getNextStateForRender,
    getNextEntityToRender
} from './cubeHelper'

import {
    FRONT,
    SIDE,
    TILE
} from '../constants'

const mapStateToProps = ({
    canCubesRender,
    canSceneRender
}) => ({
    canCubesRender,
    canSceneRender
})

class Cube extends Component {

    static propTypes = {
        // Through Redux.
        canCubesRender: PropTypes.object.isRequired,
        canSceneRender: PropTypes.bool.isRequired,
        setCanRenderCubes: PropTypes.func.isRequired,

        // From parent.
        isFloor: PropTypes.bool,
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        zIndex: PropTypes.number.isRequired,

        frontCubeZIndex: PropTypes.number.isRequired,
        sideCubeZIndex: PropTypes.number.isRequired,
        oppositeTilesMeet: PropTypes.bool.isRequired,

        bitmapKey: PropTypes.string.isRequired,
        slantDirection: PropTypes.string.isRequired
    }

    canUpdate(props) {
        const {
            canSceneRender,
            canCubesRender,
            xIndex,
            yIndex
        } = props

        return canSceneRender && canCubesRender[yIndex][xIndex]
    }

    shouldComponentUpdate(nextProps) {
        // const {
        //     canCubesRender,
        //     xIndex,
        //     yIndex,
        //     isFloor
        // } = nextProps

        // if (isFloor && xIndex === 1 && yIndex === 0) {
        //     console.error(this.canUpdate(nextProps), 'can update', xIndex, yIndex, this.canUpdate(nextProps), canCubesRender, canCubesRender[yIndex])
        // }

        return this.canUpdate(nextProps)
    }

    componentDidUpdate(prevProps) {
        const {
            canCubesRender,
            xIndex,
            yIndex
        } = this.props

        if (
            (
                this.props.canSceneRender &&
                !prevProps.canSceneRender
            ) || (
                canCubesRender[yIndex][xIndex] &&
                !getNextEntityToRender({
                    xIndex,
                    yIndex,
                    renderState: canCubesRender
                })
            )
        ) {
            console.warn('Cube rendered.', xIndex, yIndex,                 getNextStateForRender({
                xIndex,
                yIndex,
                renderState: canCubesRender
            }))

            this.props.setCanRenderCubes(
                getNextStateForRender({
                    xIndex,
                    yIndex,
                    renderState: canCubesRender
                })
            )
        }
    }

    render() {
        const {
                xIndex,
                yIndex,
                frontCubeZIndex,
                sideCubeZIndex,
                oppositeTilesMeet,
                ...other
            } = this.props,

            { isFloor,
              zIndex,
              slantDirection } = other,

            sideDirection = getSideDirection({
                xIndex,
                slantDirection
            }),

            /**
             * TODO: For now, we are putting logic to render face here, because,
             * if none of the faces are rendered, then we won't render the cube
             * at all. I may revisit this decision, as it might make the
             * animation ugly.
             */

            frontRelativeZHeight = getRelativeZHeight({
                isFloor,
                zIndex,
                subtractedZIndex: frontCubeZIndex,
                doLog: isFloor && xIndex === 0 && yIndex === 1
            }),

            doRenderFront = doRenderFrontOrSideFace({
                relativeZHeight: frontRelativeZHeight
            }),

            sideRelativeZHeight = getRelativeZHeight({
                isFloor,
                zIndex,
                subtractedZIndex: sideCubeZIndex,
                doLog: isFloor && xIndex === 0 && yIndex === 1
            }),

            doRenderSide = doRenderFrontOrSideFace({
                xIndex,
                sideDirection,
                relativeZHeight: sideRelativeZHeight
            }),

            doRenderTile = doRenderTileFace({
                isFloor,
                zIndex,
                oppositeTilesMeet
            })

        // if (!doRenderTile && !doRenderFront && !doRenderSide) {
        //     return null
        // }

        const cubeCorners = getStageCubeCornerPercentages({
            xIndex,
            yIndex,
            zIndex,
            isFloor,
            slantDirection
        })

        return (
            <g
                className={cx(
                    `Cube__x${getCharStringForNumber(xIndex)}`,

                    // Determines shading of floor tile.
                    `Cube__z${getCharStringForNumber(parseInt(zIndex))}`
                )}
            >
                {(true || doRenderTile) && (
                    <Face {...other}
                        face={TILE}
                        cubeCorners={cubeCorners}
                    />
                )}

                {(true || doRenderSide) && (
                    <Face {...other}
                        face={SIDE}
                        sideDirection={sideDirection}
                        relativeZHeight={sideRelativeZHeight}
                        cubeCorners={cubeCorners}
                    />
                )}

                {(true || doRenderFront) && (
                    <Face {...other}
                        face={FRONT}
                        relativeZHeight={frontRelativeZHeight}
                        cubeCorners={cubeCorners}
                    />
                )}
            </g>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCanRenderCubes
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Cube)
