import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Stylesheet from '../../../../Stylesheet'
import DynamicStylesheet from '../../../../Stylesheet/Dynamic'

import {
    getParentClassNameForSceneLogic,
    getChildClassNameForFaceLogic
} from 'helpers/className'

import { CUBE_Z_INDICES } from 'constants/cubeIndex'

import {
    FLOOR,
    TILE,
    Z_INDICES_MATRIX_NAME
} from 'constants/scene'

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
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired
    },

    FaceFillStylesheet = ({

        xIndex,
        yIndex

    }) => {

        // This component never updates because its parent never updates.
        return (
            <Stylesheet
                className={cx(
                    'FaceFillStylesheet',
                    `FacesShadeFillStyle__${
                        xIndex
                    }${
                        yIndex
                    }`
                )}
            >
                {CUBE_Z_INDICES.map(zIndex => {

                    /**
                 * Only floor tiles below a certain zIndex are shaded.
                 */
                    if (zIndex >= FLOOR_TILE_SHADE_Z_INDEX_MAP.length) {
                        return null
                    }

                    const
                        parentPrefix = getParentClassNameForSceneLogic({
                            matrixName: Z_INDICES_MATRIX_NAME,
                            level: FLOOR,
                            xIndex,
                            yIndex,
                            value: zIndex
                        }),

                        childPrefix = getChildClassNameForFaceLogic({
                            face: TILE,
                            level: FLOOR,
                            xIndex,
                            yIndex
                        }),

                        /**
                     * This styling needs to be set dynamically
                     * because it's dependent on zIndex.
                     */
                        fill = FLOOR_TILE_SHADE_Z_INDEX_MAP[
                            zIndex
                        ]

                    return (
                        <DynamicStylesheet
                            key={zIndex}
                            {...{
                                parentPrefixes: [
                                    parentPrefix
                                ],
                                childPrefixes: [
                                    childPrefix,
                                    'Face__shade__floorTile'
                                ],
                                style: {
                                    fill
                                }
                            }}
                        />
                    )
                })}
            </Stylesheet>
        )
    }

FaceFillStylesheet.propTypes = propTypes

export default FaceFillStylesheet
