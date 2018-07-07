import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

/* eslint-disable */

import Pixels from './Pixel/Pixels'
import Pixel from './Pixel/Pixel'

import { getPolygonPoints,
         getPolygonPointsString } from './helpers/polygonHelper'

import { getBitmapMatrix } from './helpers/bitmapHelper'

import { TILE } from '../../constants'

import { BITMAPS } from '../../../../constants/bitmaps/bitmaps'

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
        relativeZHeight: PropTypes.number,
        zIndex: PropTypes.number.isRequired,

        cubeCorners: PropTypes.shape({
            tile: facePropType,
            base: facePropType
        }).isRequired
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
                bitmapKey,
                isFloor,
                slantDirection,
                sideDirection,
                relativeZHeight,
                canUpdateRenderableYIndex,
                yIndex,
                zIndex,
                cubeCorners
            } = this.props,
            polygonPoints = getPolygonPoints({
                face,
                isFloor,
                sideDirection,
                slantDirection,
                cubeCorners
            }),

            // Get base colour and pixel map.
            { base, pixels } = BITMAPS[bitmapKey],

            bitmapMatrix = getBitmapMatrix({
                pixels,
                polygonPoints,
                relativeZHeight,
                zIndex,
                isFloor
            }),

            polygonPointsString = getPolygonPointsString(polygonPoints)

        let faceString = face

        if (face === TILE) {
            faceString = isFloor ? 'floorTile' : 'ceilingTile'
        }

        return (
            <g className={cx(
                'Face',

                // This is just used to make it easier to find in the DOM.
                `Face__${faceString}`
            )}>

                {/* Faces without pixels are white by default. */}
                <Pixel
                    uniqueId="undercoat"
                    customFill="rgba(255, 255, 255, 0.5)"
                    polygonPointsString={polygonPointsString}
                />

                <Pixels
                    {...{
                        base,
                        bitmapMatrix,
                        polygonPointsString,
                        canUpdateRenderableYIndex,
                        yIndex
                    }}
                />

                {/* Single polygon for the overlying shade. */}
                <polygon
                    className={cx(
                        'Face__shade',
                        `Face__shade__${faceString}`
                    )}
                    points={polygonPointsString}
                />
            </g>
        )
    }
}

export default connect(mapStateToProps)(Face)
