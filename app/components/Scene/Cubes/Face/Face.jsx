import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

// import Pixels from './Pixel/Pixels'
import Pixel from './Pixel/Pixel'

// import {
//     getPolygonPoints,
//     getPathString
// } from './helpers/polygonHelper'

import {
    getChildClassNameForFaceLogic
} from './helpers/faceHelper'

// import {
//     getRelativeZHeight,
//     getFrontCubeZIndex,
//     getSideCubeZIndex
// } from '../cubeHelper'

import {
    // FRONT,
    // SIDE,
    TILE
} from '../../constants'

// const
//     pointPropType =
//         PropTypes.shape({
//             x: PropTypes.number.isRequired,
//             y: PropTypes.number.isRequired
//         }).isRequired,

//     edgePropType =
//         PropTypes.shape({
//             front: pointPropType,
//             back: pointPropType
//         }).isRequired,

//     facePropType =
//         PropTypes.shape({
//             left: edgePropType,
//             right: edgePropType
//         }).isRequired

const propTypes = {
    // From parent.
    face: PropTypes.string.isRequired,
    // bitmapKey: PropTypes.string.isRequired,

    isFloor: PropTypes.bool,
    // slantDirection: PropTypes.string,
    // sideDirection: PropTypes.string,

    // canUpdateRenderableYIndex: PropTypes.bool,
    yIndex: PropTypes.number.isRequired,
    // zIndex: PropTypes.number.isRequired,

    // cubeCorners: PropTypes.shape({
    //     tile: facePropType,
    //     base: facePropType
    // }).isRequired,

    // These are only needed by front and side.
    xIndex: PropTypes.number,
    // zIndices: PropTypes.array
}

const Face = ({

    face,
    isFloor,
    // slantDirection,
    // sideDirection,
    xIndex,
    yIndex,
    // zIndex,
    // cubeCorners,
    // bitmapKey

}) => {

    const
        // facePathString = getPathString(polygonPoints),

        faceClassName = getChildClassNameForFaceLogic({
            face,
            isFloor,
            xIndex,
            yIndex
        })

    let faceString = face
        // relativeZHeight

    if (face === TILE) {
        faceString = isFloor ? 'floorTile' : 'ceilingTile'

    // } else if (face === FRONT || face === SIDE) {
    //     const {
    //         zIndices
    //     } = this.props

    //     if (face === FRONT) {
    //         const subtractedZIndex = getFrontCubeZIndex({
    //             isFloor,
    //             zIndices,
    //             slantDirection,
    //             xIndex,
    //             yIndex
    //         })

    //         relativeZHeight = getRelativeZHeight({
    //             isFloor,
    //             zIndex,
    //             subtractedZIndex,
    //             doLog: isFloor && xIndex === 0 && yIndex === 1
    //         })

    //     } else if (face === SIDE) {
    //         const subtractedZIndex = getSideCubeZIndex({
    //             isFloor,
    //             zIndices,
    //             slantDirection,
    //             xIndex,
    //             yIndex
    //         })

    //         relativeZHeight = getRelativeZHeight({
    //             isFloor,
    //             zIndex,
    //             subtractedZIndex,
    //             doLog: isFloor && xIndex === 0 && yIndex === 1
    //         })
    //     }
    }

    // This component never updates because its parent never updates.
    return (
        <g className={cx(
            'Face',

            // This is just used to make it easier to find in the DOM.
            `Face__${faceString}`
        )}>

            {/* TODO: Do I really need both undercoat and shade? */}
            {/* Faces without pixels are white by default. */}
            <Pixel
                uniqueId="undercoat"
                className={cx(
                    faceClassName
                )}
                customFill="rgba(255, 255, 255, 0.5)"
            />

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
                    facePathString
                }}
            /> */}

            {/* Single polygon for the overlying shade. */}
            <path
                className={cx(
                    faceClassName,

                    'Face__shade',
                    `Face__shade__${faceString}`
                )}
            />
        </g>
    )
}

Face.propTypes = propTypes

export default Face
