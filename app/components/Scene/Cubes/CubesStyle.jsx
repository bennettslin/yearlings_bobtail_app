import React from 'react'
import cx from 'classnames'

import Style from '../../Style/Style'
import DynamicStyling from '../../Style/DynamicStyling'

import { getCharStringForNumber } from '../../../helpers/formatHelper'

import {
    LEFT,
    RIGHT,
    SLANT_DIRECTIONS,
    DEFAULT_X_AXIS_Z_INDICES,
    SLANTED_LEFT_X_AXIS_Z_INDICES,
    SLANTED_RIGHT_X_AXIS_Z_INDICES
} from '../constants'

import {
    getClassNameForSlantDirection
} from '../sceneDataHelper'

import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES,
    CUBE_X_AXIS_LENGTH
} from '../../../constants/stage'

const CubesStyle = () => {

    let xAxisZIndices = DEFAULT_X_AXIS_Z_INDICES

    return (
        <Style
            className={cx(
                'CubesStyle'
            )}
        >
            {SLANT_DIRECTIONS.map(slantDirection => {

                const slantDirectionClassName = getClassNameForSlantDirection(
                            slantDirection
                    )

                if (slantDirection === LEFT) {
                    xAxisZIndices = SLANTED_LEFT_X_AXIS_Z_INDICES;

                } else if (slantDirection === RIGHT) {
                    xAxisZIndices = SLANTED_RIGHT_X_AXIS_Z_INDICES
                }

                return CUBE_Y_INDICES.map(yIndex => {

                    return CUBE_X_INDICES.map(xIndex => {

                        const
                            xCharIndex = getCharStringForNumber(xIndex),

                            // This is the CSS z-index value, not zIndex.
                            zIndexValue =
                                CUBE_X_AXIS_LENGTH * yIndex
                                + xAxisZIndices[xIndex]

                        return (
                            <DynamicStyling
                                key={`${xIndex}_${yIndex}`}
                                {...{
                                    parentPrefixes: [
                                        slantDirectionClassName
                                    ],
                                    childPrefixes: [
                                        `Cube__x${
                                            xCharIndex
                                        }y${
                                            yIndex
                                        }`
                                    ],
                                    style: {
                                        'z-index': zIndexValue
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

export default CubesStyle
