import React, { memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'

import {
    CUBE_Y_INDICES,
    CUBE_X_INDICES,
} from '../../../constants/cubeIndex'

const CubeTransitionStylesheets = () => (
    CUBE_Y_INDICES.map(yIndex => (
        <Stylesheet
            {...{
                key: yIndex,
                className: `CubeTransitionStylesheet__y${yIndex}`,
                indices: CUBE_X_INDICES,
                showHexIndices: true,
                childPrefix: `TrW__canCubesTransition .Face.y${yIndex}.x`,
                getStyle: () => ({
                    'transition': `fill 1s, d 1s`,
                }),
            }}
        />
    ))
)

export default memo(CubeTransitionStylesheets)
