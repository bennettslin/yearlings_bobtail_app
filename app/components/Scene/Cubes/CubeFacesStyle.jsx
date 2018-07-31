import React, { Fragment } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Style from '../../Style/Style'
import DynamicStyling from '../../Style/DynamicStyling'

import {
    SLANT_DIRECTIONS,
    FLOOR,
    CEILING,
    FACES,
    TILE
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

const
    FLOOR_TILE_SHADE_DARKER = 'rgba(25, 25, 25, 0.1)',
    FLOOR_TILE_SHADE_DARK = 'rgba(25, 25, 25, 0.075)',
    FLOOR_TILE_SHADE_LIGHT = 'rgba(25, 25, 25, 0.05)',
    FLOOR_TILE_SHADE_LIGHTER = 'rgba(25, 25, 25, 0.025)',

    FLOOR_TILE_SHADE_Z_INDEX_MAP = [
        FLOOR_TILE_SHADE_DARKER,
        FLOOR_TILE_SHADE_DARKER,
        FLOOR_TILE_SHADE_DARK,
        FLOOR_TILE_SHADE_DARK,
        FLOOR_TILE_SHADE_LIGHT,
        FLOOR_TILE_SHADE_LIGHT,
        FLOOR_TILE_SHADE_LIGHTER,
        FLOOR_TILE_SHADE_LIGHTER
    ]

const propTypes = {
    isFloor: PropTypes.bool,
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
},

CubeFacesStyle = ({

    isFloor,
    xIndex,
    yIndex

}) => {

    // This component never updates because its parent never updates.
    return (
        <Style
            className={cx(
                'CubeFacesStyle',
                `CubeFacesStyle__${
                    isFloor ? FLOOR[0] : CEILING[0]
                }${
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
                            pathString = getPathString(polygonPoints),

                            /**
                             * This styling needs to be set dynamically because
                             * it's dependent on zIndex.
                             */
                            hasFloorTileShading =
                                !slantDirection &&
                                isFloor &&
                                face === TILE &&

                                /**
                                 * Only floor tiles of this zIndex and below
                                 * will be shaded.
                                 */
                                zIndex < FLOOR_TILE_SHADE_Z_INDEX_MAP.length

                        return (
                            <Fragment
                                key={`${slantDirection}${zIndex}${face}`}
                            >
                                {/* Floor tile shading. */}
                                {hasFloorTileShading && (
                                    <DynamicStyling
                                        {...{
                                            parentPrefixes: [
                                                parentPrefix
                                            ],
                                            childPrefixes: [
                                                childPrefix,
                                                'Face__shade__floorTile'
                                            ],
                                            style: {
                                                fill:
                                                FLOOR_TILE_SHADE_Z_INDEX_MAP[
                                                    zIndex
                                                ]
                                            }
                                        }}
                                    />
                                )}
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
            })}
        </Style>
    )
}

CubeFacesStyle.propTypes = propTypes

export default CubeFacesStyle
