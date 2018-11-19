import React from 'react'
import cx from 'classnames'

import Stylesheet from '../../Stylesheet'
import DynamicStylesheet from '../../Stylesheet/Dynamic'

import { getCharStringForNumber } from 'helpers/formatHelper'
import { getClassNameForSlantDirection } from '../sceneHelper'

import {
    LEFT,
    RIGHT,
    SLANT_DIRECTIONS
} from 'constants/scene'

import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES,
    CUBE_X_AXIS_LENGTH,
    DEFAULT_X_AXIS_Z_INDICES,
    SLANTED_LEFT_X_AXIS_Z_INDICES,
    SLANTED_RIGHT_X_AXIS_Z_INDICES
} from './cubeIndexConstants'

const CubesZIndexStyle = () => {

    let xAxisZIndices = DEFAULT_X_AXIS_Z_INDICES

    return (
        <Stylesheet
            className={cx(
                'CubesZIndexStyle'
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
                            <DynamicStylesheet
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
        </Stylesheet>
    )
}

export default CubesZIndexStyle
