import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Style from 'components/Style/Style'
import DynamicStyling from 'components/Style/DynamicStyling'

import { getCubeCornerPercentages } from '../cubeRenderHelper'

import {
    getPathString,
    getPolygonPoints
} from './facePathHelper'

import {
    getParentClassNameForSceneLogic,
    getClassNameForSlantDirection
} from 'components/Scene/sceneHelper'

import {
    getChildClassNameForFaceLogic,
    getSideDirection
} from './faceHelper'

import {
    SLANT_DIRECTIONS,
    LEVELS,
    FLOOR,
    FACES,
    Z_INDICES_MATRIX_NAME
} from 'constants/scene'

import { CUBE_Z_INDICES } from '../cubeIndexConstants'

const propTypes = {
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
},

FacesZIndexStyle = ({

    xIndex,
    yIndex

}) => {

    // This component never updates because its parent never updates.
    return (
        <Style
            className={cx(
                'FacesZIndexStyle',
                `FacesZIndexStyle__${
                    xIndex
                }${
                    yIndex
                }`
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

                return LEVELS.map(level => {

                    const isFloor = level === FLOOR

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
                                matrixName: Z_INDICES_MATRIX_NAME,
                                level,
                                xIndex,
                                yIndex,
                                value: zIndex
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
                                    level,
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
                                        childPrefixes: [
                                            childPrefix
                                        ],
                                        style: {
                                            d: `path("${pathString}")`
                                        }
                                    }}
                                />
                            )
                        })
                    })
                })
            })}
        </Style>
    )
}

FacesZIndexStyle.propTypes = propTypes

export default FacesZIndexStyle
