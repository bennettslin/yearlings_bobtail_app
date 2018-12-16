import { getParentClassNameForScene } from 'helpers/className'
import { getValueInAbridgedMatrix } from 'helpers/general'

import { LEVELS } from 'constants/scene'

import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES
} from 'constants/cubeIndex'

export const getParentClassNamesForSceneLogic = (
    cubes,
    matrixName
) => {

    // Get ceiling and floor cubes.
    return LEVELS.map(level => {

        const { [matrixName]: matrix } = cubes[level]

        return CUBE_Y_INDICES.map(yIndex => {

            return CUBE_X_INDICES.map(xIndex => {

                const value = getValueInAbridgedMatrix(
                    matrix,
                    xIndex,
                    yIndex
                )

                return getParentClassNameForScene({
                    matrixName,
                    level,
                    xIndex,
                    yIndex,
                    value
                })
            })
        })
    })
}
