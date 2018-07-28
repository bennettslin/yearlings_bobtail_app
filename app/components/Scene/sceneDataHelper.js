import { CUBES } from '../../assets/scene/cubes/cubes'
import { DEFAULT_STAGE_KEY } from '../../assets/scene/cubes/cubesKeys'

import { getCharStringForNumber } from '../../helpers/formatHelper'

import {
    getArrayOfLength,
    getValueInAbridgedMatrix
} from '../../helpers/generalHelper'

import {
    CEILING,
    FLOOR
} from './constants'

import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_X_AXIS_LENGTH
} from '../../constants/stage'

// TODO: Make this a general constant?
const
    CUBE_LEVELS_ARRAY = [
        CEILING,
        FLOOR
    ],
    X_INDICES_ARRAY = getArrayOfLength({ length: CUBE_X_AXIS_LENGTH }),
    Y_INDICES_ARRAY = getArrayOfLength({ length: CUBE_Y_AXIS_LENGTH })

export const getCubesForKey = (cubesKey) => {

    return {
        // If ceiling or floor is absent, use the default values.
        ...CUBES[DEFAULT_STAGE_KEY],
        ...CUBES[cubesKey]
    }
}

export const getPresencesForCubes = ({
    cubesKey,
    songIndex,
    sceneIndex,
    yIndex
}) => {
    const cubes = getCubesForKey(cubesKey),
        scenePresences = cubes.presences[`song${songIndex}_scene${sceneIndex}`]

    /**
     * Once complete, there will always be a presences object for the song and
     * scene that expects it. In the meantime, however, it may not exist, so
     * do this safety check.
     */
    return scenePresences ? scenePresences[`cubes${yIndex}`] : null
}

export const getZIndexClassNamesForCubesKey = (cubesKey) => {
    const cubes = getCubesForKey(cubesKey)

    // Get ceiling and floor cubes.
    return CUBE_LEVELS_ARRAY.map(level => {

        const { zIndices } = cubes[level]

        return Y_INDICES_ARRAY.map(yIndex => {

            return X_INDICES_ARRAY.map(xIndex => {

                const zIndex = getValueInAbridgedMatrix(
                    zIndices,
                    xIndex,
                    yIndex
                )

                /**
                 * Use 'Z' for Scene to distinguish it from 'S' for Stanza.
                 * "Scene levelIndex, xIndex, yIndex, zIndex."
                 */
                return `Z${
                    level[0]
                }${
                    getCharStringForNumber(xIndex)
                }${
                    yIndex
                }${
                    getCharStringForNumber(zIndex)
                }`
            })
        })
    })
}
