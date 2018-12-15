import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Stylesheet from '../../../../Stylesheet'
import DynamicStylesheet from '../../../../Stylesheet/Dynamic'

import {
    getCubeCornerPercentages,
    getSideDirection
} from './helper'

import {
    getPathString,
    getPolygonPoints
} from './pathHelper'

import {
    getParentClassNameForSceneLogic,
    getClassNameForSlantDirection,
    getChildClassNameForFaceLogic
} from 'helpers/className'

import {
    SLANT_DIRECTIONS,
    LEVELS,
    FLOOR,
    FACES,
    Z_INDICES_MATRIX_NAME
} from 'constants/scene'

import { CUBE_Z_INDICES } from 'constants/cubeIndex'

const propTypes = {
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired
    },

    FacePathsStylesheet = ({
        xIndex,
        yIndex

    }) => {

        // This component never updates because its parent never updates.
        return (
            <Stylesheet
                className={cx(
                    'FacePathsStylesheet',

                    // Just for dev clarity.
                    `y${yIndex}`,
                    `x${xIndex}`
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
                                    <DynamicStylesheet
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
            </Stylesheet>
        )
    }

FacePathsStylesheet.propTypes = propTypes

export default FacePathsStylesheet
