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

import { getParentClassNameForSceneLogic } from '../sceneDataHelper'
import { getChildClassNameForFaceLogic } from './Face/helpers/faceHelper'

import { CUBE_Z_INDICES } from '../../../constants/stage'

const propTypes = {
    isFloor: PropTypes.bool,
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
},

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

                const sideDirection = getSideDirection({
                    xIndex,
                    slantDirection
                })

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
                                    parentPrefix,
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
