import React, { Fragment } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Style from '../../../Style/Style'
import DynamicStyling from '../../../Style/DynamicStyling'

import { getCubeCornerPercentages } from '../cubeRenderHelper'

import {
    getPathString,
    getPolygonPoints
} from './helpers/pathHelper'

import {
    getParentClassNameForSceneLogic,
    getClassNameForSlantDirection
} from '../../sceneHelper'

import {
    getChildClassNameForFaceLogic,
    getSideDirection
} from './helpers/faceHelper'

import {
    SLANT_DIRECTIONS,
    LEVELS,
    FLOOR,
    FACES,
    Z_INDICES_MATRIX_NAME
} from '../../sceneConstants'

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
                                <Fragment
                                    key={`${slantDirection}${zIndex}${face}`}
                                >
                                    {/* Closed path. */}
                                    <DynamicStyling
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
                                </Fragment>
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
