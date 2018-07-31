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

import { CUBE_X_INDICES } from '../../../constants/stage'

const CubesStyle = () => {

    let columnIndicesArray = DEFAULT_X_AXIS_Z_INDICES

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
                    columnIndicesArray = SLANTED_LEFT_X_AXIS_Z_INDICES;

                } else if (slantDirection === RIGHT) {
                    columnIndicesArray = SLANTED_RIGHT_X_AXIS_Z_INDICES
                }

                return CUBE_X_INDICES.map(xIndex => {

                    return (
                        <DynamicStyling
                            key={xIndex}
                            {...{
                                parentPrefixes: [
                                    slantDirectionClassName
                                ],
                                childPrefixes: [
                                    `Cube__x${getCharStringForNumber(xIndex)}`
                                ],
                                style: {
                                    'z-index': columnIndicesArray[xIndex]
                                }
                            }}
                        />
                    )
                })
            })}
        </Style>
    )
}

export default CubesStyle
