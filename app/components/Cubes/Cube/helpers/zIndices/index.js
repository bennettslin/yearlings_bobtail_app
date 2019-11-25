import {
    LEFT,
    RIGHT
} from 'constants/lyrics'
import { SLANT_DIRECTIONS } from 'constants/scene/cubes'

import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES,
    CUBE_X_AXIS_LENGTH,
    DEFAULT_X_AXIS_Z_INDICES,
    SLANTED_LEFT_X_AXIS_Z_INDICES,
    SLANTED_RIGHT_X_AXIS_Z_INDICES
} from 'constants/cubeIndex'

const CUBE_Z_INDEX_STYLES = {}
let xAxisZIndices = DEFAULT_X_AXIS_Z_INDICES

SLANT_DIRECTIONS.forEach(slantDirection => {
    const slantDirectionKey = slantDirection || 'default'

    if (slantDirection === LEFT) {
        xAxisZIndices = SLANTED_LEFT_X_AXIS_Z_INDICES

    } else if (slantDirection === RIGHT) {
        xAxisZIndices = SLANTED_RIGHT_X_AXIS_Z_INDICES
    }

    CUBE_Z_INDEX_STYLES[slantDirectionKey] = {}
    const yIndexRoot = CUBE_Z_INDEX_STYLES[slantDirectionKey]

    CUBE_Y_INDICES.forEach(yIndex => {
        yIndexRoot[yIndex] = {}
        const xIndexRoot = yIndexRoot[yIndex]

        CUBE_X_INDICES.forEach(xIndex => {
            const
                // This is the CSS z-index value, not zIndex!
                zIndexValue =
                    CUBE_X_AXIS_LENGTH * yIndex
                    + xAxisZIndices[xIndex]

            xIndexRoot[xIndex] = zIndexValue
        })
    })
})

export const getCubeZIndexStyle = ({
    slantDirection,
    yIndex,
    xIndex
}) => {
    const slantDirectionKey = slantDirection || 'default'
    return CUBE_Z_INDEX_STYLES[slantDirectionKey][yIndex][xIndex]
}
