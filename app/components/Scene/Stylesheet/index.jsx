import React, { memo } from 'react'
import cx from 'classnames'

import Stylesheet from '../../../modules/Stylesheet'
import DynamicStylesheet from '../../../modules/Stylesheet/Dynamic'

import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Y_INDICES
} from '../../../constants/cubeIndex'

const PresenceZIndexStylesheet = () => {

    return (
        <Stylesheet
            className={cx(
                'PresenceZIndexStylesheet'
            )}
        >
            <DynamicStylesheet
                {...{
                    indices: CUBE_Y_INDICES,
                    childPrefix: 'Presences.y',
                    getStyle: (yIndex) => ({
                        /**
                         * Presences are rendered above every cube in the
                         * row for this yIndex.
                         */
                        'z-index': (yIndex + 1) * CUBE_X_AXIS_LENGTH
                    })
                }}
            />
        </Stylesheet>
    )
}

export default memo(PresenceZIndexStylesheet)
