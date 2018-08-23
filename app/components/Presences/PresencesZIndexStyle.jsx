import React from 'react'
import cx from 'classnames'

import Style from 'components/Style/Style'
import DynamicStyling from 'components/Style/DynamicStyling'

import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Y_INDICES
} from 'components/Scene/Cubes/cubeIndexConstants'

const PresencesZIndexStyle = () => {

    return (
        <Style
            className={cx(
                'PresencesZIndexStyle'
            )}
        >
            {CUBE_Y_INDICES.map(yIndex => {
                return (
                    <DynamicStyling
                        key={yIndex}
                        {...{
                            childPrefixes: [
                                `Presences__y${
                                    yIndex
                                }`
                            ],
                            style: {
                                /**
                                 * Presences are rendered above every cube in
                                 * the row for this yIndex.
                                 */
                                'z-index': (yIndex + 1) * CUBE_X_AXIS_LENGTH
                            }
                        }}
                    />
                )
            })}
        </Style>
    )
}

export default PresencesZIndexStyle
