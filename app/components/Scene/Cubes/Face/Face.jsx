/* eslint-disable */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

// import Style from '../../../Style/Style'
import Pixels from './Pixel/Pixels'
import Pixel from './Pixel/Pixel'

import {
    getPolygonPoints,
    getPolygonPointsString
} from './helpers/polygonHelper'

import {
    getClassNameForFace
} from './helpers/faceHelper'

import {
    getRelativeZHeight,
    getFrontCubeZIndex,
    getSideCubeZIndex
} from '../cubeHelper'

import {
    FRONT,
    SIDE,
    TILE
} from '../../constants'

const
    pointPropType =
        PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired,

    edgePropType =
        PropTypes.shape({
            front: pointPropType,
            back: pointPropType
        }).isRequired,

    facePropType =
        PropTypes.shape({
            left: edgePropType,
            right: edgePropType
        }).isRequired

const mapStateToProps = ({
    canSceneRender,
    canTheatreRender
}) => ({
    canSceneRender,
    canTheatreRender
})

class Face extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        canTheatreRender: PropTypes.bool.isRequired,

        // From parent.
        face: PropTypes.string.isRequired,
        bitmapKey: PropTypes.string.isRequired,

        isFloor: PropTypes.bool,
        slantDirection: PropTypes.string,
        sideDirection: PropTypes.string,

        canUpdateRenderableYIndex: PropTypes.bool,
        yIndex: PropTypes.number.isRequired,
        zIndex: PropTypes.number.isRequired,

        cubeCorners: PropTypes.shape({
            tile: facePropType,
            base: facePropType
        }).isRequired,

        // These are only needed by front and side.
        xIndex: PropTypes.number,
        zIndices: PropTypes.array
    }

    constructor(props) {
        super(props)

        this.state = {
            hasMounted: false
        }
    }

    shouldComponentUpdate(nextProps) {
        return this.state.hasMounted ?
            nextProps.canSceneRender :
            nextProps.canTheatreRender
    }

    componentDidUpdate(prevProps) {

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
                face,
                isFloor,
                slantDirection,
                sideDirection,
                xIndex,
                yIndex,
                zIndex,
                cubeCorners,
                bitmapKey
            } = this.props,
            polygonPoints = getPolygonPoints({
                face,
                isFloor,
                sideDirection,
                slantDirection,
                cubeCorners
            }),

            facePolygonPointsString = getPolygonPointsString(polygonPoints)

        let faceString = face,
            relativeZHeight

        if (face === TILE) {
            faceString = isFloor ? 'floorTile' : 'ceilingTile'

        } else if (face === FRONT || face === SIDE) {
            const {
                zIndices
            } = this.props

            if (face === FRONT) {
                const subtractedZIndex = getFrontCubeZIndex({
                    isFloor,
                    zIndices,
                    slantDirection,
                    xIndex,
                    yIndex
                })

                relativeZHeight = getRelativeZHeight({
                    isFloor,
                    zIndex,
                    subtractedZIndex,
                    doLog: isFloor && xIndex === 0 && yIndex === 1
                })

            } else if (face === SIDE) {
                const subtractedZIndex = getSideCubeZIndex({
                    isFloor,
                    zIndices,
                    slantDirection,
                    xIndex,
                    yIndex
                })

                relativeZHeight = getRelativeZHeight({
                    isFloor,
                    zIndex,
                    subtractedZIndex,
                    doLog: isFloor && xIndex === 0 && yIndex === 1
                })
            }
        }

        return (
            <g className={cx(
                'Face',

                // This is just used to make it easier to find in the DOM.
                `Face__${faceString}`
            )}>

                {/* Faces without pixels are white by default. */}
                {/* <Pixel
                    uniqueId="undercoat"
                    customFill="rgba(255, 255, 255, 0.5)"
                    polygonPointsString={facePolygonPointsString}
                /> */}

                {/* <Pixels
                    {...{
                        isFloor,
                        xIndex,
                        yIndex,
                        zIndex,
                        slantDirection,
                        bitmapKey,
                        polygonPoints,
                        relativeZHeight,
                        facePolygonPointsString
                    }}
                /> */}

                {/* <Style /> */}

                {/* Single polygon for the overlying shade. */}
                <polygon
                    className={cx(

                        getClassNameForFace({
                            face,
                            isFloor,
                            xIndex,
                            yIndex
                        }),

                        'Face__shade',
                        `Face__shade__${faceString}`
                    )}
                    points={facePolygonPointsString}
                />
            </g>
        )
    }
}

export default connect(mapStateToProps)(Face)
