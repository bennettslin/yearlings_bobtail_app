// A single stage tile, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Face from './Face/Face'

import { getCharStringForNumber } from '../../../helpers/formatHelper'
import { getStageCubeCornerPercentages } from '../sceneHelper'

import {
    getRelativeZHeight,
    getSideDirection,
    doRenderFrontOrSideFace,
    doRenderTileFace
} from './cubeHelper'

import {
    FRONT,
    SIDE,
    TILE
} from '../constants'

// FIXME: Does this need to be hooked into Redux anymore?
const mapStateToProps = () => ({
    // canSceneRender
})

class Cube extends Component {

    static propTypes = {
        // Through Redux.
        // canSceneRender: PropTypes.bool.isRequired,

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

    // shouldComponentUpdate(nextProps) {
    //     return nextProps.canSceneRender
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.canSceneRender && !prevProps.canSceneRender) {
    //         console.warn('Cube rendered.')
    //     }
    // }

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
                        {...{
                            face: TILE,
                            cubeCorners,
                            yIndex
                        }}
                        /**
                         * Only one Pixels component will render yIndex for all
                         * of them.
                         */
                        {...isFloor && xIndex === 0 && {
                            canUpdateRenderableYIndex: true
                        }}
                    />
                )}

                {(true || doRenderSide) && (
                    <Face {...other}
                        {...{
                            face: SIDE,
                            cubeCorners,
                            sideDirection,
                            yIndex,
                            relativeZHeight: sideRelativeZHeight
                        }}
                    />
                )}

                {(true || doRenderFront) && (
                    <Face {...other}
                        {...{
                            face: FRONT,
                            cubeCorners,
                            yIndex,
                            relativeZHeight: frontRelativeZHeight
                        }}
                    />
                )}
            </g>
        )
    }
}

export default connect(mapStateToProps)(Cube)
