import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Pixel from './Pixel/Pixel'

import { getPolygonPoints,
         getPolygonPointsString } from './helpers/polygonHelper'

import { getBitmapMatrix } from './helpers/bitmapHelper'

import { TILE } from '../../constants'

import { BITMAPS } from '../../../../constants/bitmaps'

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
    stageCoordinates
}) => ({
    canSceneRender,
    stageCoordinates
})

class Face extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,

        // From parent.
        face: PropTypes.string.isRequired,
        bitmapKey: PropTypes.string.isRequired,

        isFloor: PropTypes.bool,
        slantDirection: PropTypes.string,
        sideDirection: PropTypes.string,

        relativeZHeight: PropTypes.number,
        zIndex: PropTypes.number,

        cubeCorners: PropTypes.shape({
            tile: facePropType,
            base: facePropType
        }).isRequired,

        stageCoordinates: PropTypes.shape({
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        }).isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender
    }

    componentDidUpdate(prevProps) {
        if (this.props.canSceneRender && !prevProps.canSceneRender) {
            console.warn('Face rendered.')
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
                zIndex,
                cubeCorners,
                stageCoordinates
            } = this.props,
            {
                width: stageWidth,
                height: stageHeight
            } = stageCoordinates,
            polygonPoints = getPolygonPoints({
                face,
                isFloor,
                sideDirection,
                slantDirection,
                cubeCorners,
                stageWidth,
                stageHeight
            }),

            // Get base colour and pixel map.
            { base, pixels } = BITMAPS[bitmapKey],

            bitmapMatrix = getBitmapMatrix({
                pixels,
                polygonPoints,
                relativeZHeight,
                zIndex,
                isFloor
            })

        let faceString = face

        if (face === TILE) {
            faceString = isFloor ? 'floorTile' : 'ceilingTile'
        }

        const polygonPointsString = getPolygonPointsString(polygonPoints)

        return (
            <g className={cx(
                'Face',

                // This is just used to make it easier to find in the DOM.
                `Face__${faceString}`
            )}>
                {/* Single polygon for the base colour. */}
                <Pixel
                    uniqueId="base"
                    fill={base}
                    polygonPointsString={polygonPointsString}
                />

                {bitmapMatrix.map((matrixRow, yIndex) => {

                    return matrixRow.map((matrixObject, xIndex) => {

                        if (matrixObject === null) {
                            // This pixel location will just show the base colour.
                            return null
                        }

                        const uniqueId = `y${yIndex}x${xIndex}`

                        return (
                            <Pixel {...matrixObject}
                                key={uniqueId}
                                uniqueId={uniqueId}
                            />
                        )
                    })
                })}

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
