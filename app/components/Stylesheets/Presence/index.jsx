import React, { memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'

import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Y_INDICES
} from '../../../constants/cubeIndex'

const PresenceStylesheet = () => (
    <Stylesheet
        {...{
            className: 'PresenceStylesheet',
            indices: CUBE_Y_INDICES,
            childPrefix: 'Presences.y',
            getStyle: yIndex => ({
                // Render presences above all cubes in the row for this yIndex.
                'z-index': (yIndex + 1) * CUBE_X_AXIS_LENGTH
            })
        }}
    />
)

export default memo(PresenceStylesheet)