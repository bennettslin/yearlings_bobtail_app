import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Stylesheet from '../../../../Stylesheet'
import DynamicStylesheet from '../../../../Stylesheet/Dynamic'

import { getFacePath } from '../../../../../faces'

import {
    getParentClassNameForScene,
    getClassNameForSlantDirection
} from 'helpers/className'

import { getChildClassNameForFace } from '../../helper'

import {
    SLANT_DIRECTIONS,
    LEVELS,
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
                        slantDirectionClassName = getClassNameForSlantDirection(
                            slantDirection
                        )

                    return LEVELS.map(level => {

                        return CUBE_Z_INDICES.map(zIndex => {
                            const
                                parentPrefix = getParentClassNameForScene({
                                    matrixName: Z_INDICES_MATRIX_NAME,
                                    level,
                                    xIndex,
                                    yIndex,
                                    value: zIndex
                                })

                            return FACES.map(face => {
                                const
                                    childPrefix = getChildClassNameForFace({
                                        face,
                                        level,
                                        xIndex,
                                        yIndex
                                    }),
                                    pathString = getFacePath({
                                        slantDirection,
                                        level,
                                        yIndex,
                                        xIndex,
                                        zIndex,
                                        face
                                    })

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
