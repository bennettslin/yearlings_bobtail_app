import { CUBES } from '../../assets/scene/cubes/cubes'
import { DEFAULT_STAGE_KEY } from '../../assets/scene/cubes/cubesKeys'

import { getCharStringForNumber } from '../../helpers/formatHelper'

import {
    getValueInAbridgedMatrix
} from '../../helpers/generalHelper'

import {
    LEVELS
} from './sceneConstants'

import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES
} from './Cubes/cubeIndexConstants'

export const getCubesForKey = (cubesKey) => {

    return {
        // If ceiling or floor is absent, use the default values.
        ...CUBES[DEFAULT_STAGE_KEY],
        ...CUBES[cubesKey]
    }
}

export const getParentClassNameForSceneLogic = ({

    level,
    xIndex,
    yIndex,
    zIndex

}) => {

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
        // Allow zIndex to be appended dynamically by CubeFacesStyle.
        !isNaN(zIndex) ? getCharStringForNumber(zIndex) : ''
    }`
}

export const getZIndexClassNamesForCubes = (cubes) => {

    // Get ceiling and floor cubes.
    return LEVELS.map(level => {

        const { zIndices } = cubes[level]

        return CUBE_Y_INDICES.map(yIndex => {

            return CUBE_X_INDICES.map(xIndex => {

                const zIndex = getValueInAbridgedMatrix(
                    zIndices,
                    xIndex,
                    yIndex
                )

                return getParentClassNameForSceneLogic({
                    level,
                    xIndex,
                    yIndex,
                    zIndex
                })
            })
        })
    })
}

export const getClassNameForSlantDirection = (slantDirection) => {

    return slantDirection ?
        `Scene__slantDirection__${slantDirection}` :
        ''
}
