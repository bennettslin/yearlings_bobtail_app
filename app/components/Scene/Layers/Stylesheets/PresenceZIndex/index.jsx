import React, { memo } from 'react'
import cx from 'classnames'

import Stylesheet from '../../../../Stylesheet'
import DynamicStylesheet from '../../../../Stylesheet/Dynamic'

import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Y_INDICES
} from '../../../../../constants/cubeIndex'

const PresenceZIndexStylesheet = memo(() => {

    return (
        <Stylesheet
            className={cx(
                'PresenceZIndexStylesheet'
            )}
        >
            {CUBE_Y_INDICES.map(yIndex => {
                return (
                    <DynamicStylesheet
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
        </Stylesheet>
    )
})

export default PresenceZIndexStylesheet
