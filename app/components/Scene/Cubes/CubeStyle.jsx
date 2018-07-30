/* eslint-disable */

import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Style from '../../Style/Style'
import DynamicStyling from '../../Style/DynamicStyling'

import {
    SLANT_DIRECTIONS,
    FLOOR,
    CEILING,
    FACES
} from '../constants'

import { getCubeCornerPercentages } from '../sceneHelper'
import {
    getPathString,
    getPolygonPoints
} from './Face/helpers/polygonHelper'
import { getSideDirection } from './cubeHelper'

import {
    getParentClassNameForSceneLogic,
    getClassNameForSlantDirection
} from '../sceneDataHelper'
import { getChildClassNameForFaceLogic } from './Face/helpers/faceHelper'

import { CUBE_Z_INDICES } from '../../../constants/stage'

const propTypes = {
    isFloor: PropTypes.bool,
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
},

/**
 * In order from brightest to darkest.
 */
// .Face__shade__floorTile {

//     // Default.
//     fill: transparent;

//     .Cube__z7
//     &,
//     .Cube__z6
//     & {
//         fill: rgba(25, 25, 25, 0.025);
//     }

//     .Cube__z5
//     &,
//     .Cube__z4
//     & {
//         fill: rgba(25, 25, 25, 0.05);
//     }

//     .Cube__z3
//     &,
//     .Cube__z2
//     & {
//         fill: rgba(25, 25, 25, 0.075);
//     }

//     .Cube__z1
//     &,
//     .Cube__z0
//     & {
//         fill: rgba(25, 25, 25, 0.1);
//     }
// }

CubeStyle = ({

    isFloor,
    xIndex,
    yIndex

}) => {

    return (
        <Style
            className={cx(
                'CubeStyle'
            )}
        >
            {SLANT_DIRECTIONS.map(slantDirection => {

                const
                    sideDirection = getSideDirection({
                        xIndex,
                        slantDirection
                    }),
                    slantDirectionClassName = getClassNameForSlantDirection(
                        slantDirection
                    )

                return CUBE_Z_INDICES.map(zIndex => {

                    const
                        cubeCorners = getCubeCornerPercentages({
                            xIndex,
                            yIndex,
                            zIndex,
                            isFloor,
                            slantDirection
                        }),
                        parentPrefix = getParentClassNameForSceneLogic({
                            level: isFloor ? FLOOR : CEILING,
                            xIndex,
                            yIndex,
                            zIndex
                        })

                    return FACES.map(face => {

                        const
                            polygonPoints = getPolygonPoints({
                                face,
                                isFloor,
                                sideDirection,
                                slantDirection,
                                cubeCorners
                            }),
                            childPrefix = getChildClassNameForFaceLogic({
                                face,
                                isFloor,
                                xIndex,
                                yIndex
                            }),
                            pathString = getPathString(polygonPoints)

                        return (
                            <DynamicStyling
                                key={`${slantDirection}${zIndex}${face}`}
                                {...{
                                    parentPrefixes: [
                                        slantDirectionClassName,
                                        parentPrefix
                                    ],
                                    childPrefix,
                                    style: {
                                        d: `path("${pathString}")`
                                    }
                                }}
                            />
                        )
                    })
                })
            })}
        </Style>
    )
}

CubeStyle.propTypes = propTypes

export default CubeStyle
