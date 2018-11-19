import React, { Fragment } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Style from '../../../Style/Style'
import DynamicStyling from '../../../Style/DynamicStyling'

import { getCubeCornerPercentages } from '../cubeRenderHelper'

import {
    getPathString,
    getPolygonPoints
} from './facePathHelper'

import {
    getParentClassNameForSceneLogic,
    getClassNameForSlantDirection
} from '../../../Scene/sceneHelper'

import {
    getChildClassNameForFaceLogic,
    getSideDirection
} from './faceHelper'

import {
    SLANT_DIRECTIONS,
    LEVELS,
    FLOOR,
    FACES,
    TILE,
    Z_INDICES_MATRIX_NAME
} from 'constants/scene'

import {
    g,
    k
} from 'scene/zIndexKeys'

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
                            }),
                            isBaseCeiling = zIndex === g,
                            isNegativeCeiling = zIndex === k,

                            /**
                             * Ceiling front and side faces will never descend
                             * beyond base. So if it's the negative zIndex,
                             * only set path styling for tile faces.
                             */
                            facesArray = isNegativeCeiling ?
                                [TILE] : FACES,

                            /**
                             * Then, when it's the base zIndex, include the
                             * negative zIndex parent class for front and side
                             * faces so that they'll share path styling with
                             * their base zIndex counterparts.
                             */
                            negativeParentPrefix = isBaseCeiling ?
                                getParentClassNameForSceneLogic({
                                    matrixName: Z_INDICES_MATRIX_NAME,
                                    level,
                                    xIndex,
                                    yIndex,
                                    value: k
                                }) : null

                        return facesArray.map(face => {

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
                                    {negativeParentPrefix && (
                                        <DynamicStyling
                                            {...{
                                                parentPrefixes: [
                                                    slantDirectionClassName,
                                                    negativeParentPrefix
                                                ],
                                                childPrefixes: [
                                                    childPrefix
                                                ],
                                                style: {
                                                    d: `path("${pathString}")`,
                                                    stroke: 'transparent'
                                                }
                                            }}
                                        />
                                    )}
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
