import { CUBES } from 'scene/cubes'
import { DEFAULT_STAGE_KEY } from 'scene/cubesKeys'

export const getCubesForKey = (cubesKey) => {

    const defaultStageCubes = CUBES[DEFAULT_STAGE_KEY],
        keyCubes = CUBES[cubesKey]

    return {
        ceiling: {
            ...defaultStageCubes.ceiling,
            ...keyCubes.ceiling
        },
        floor: {
            ...defaultStageCubes.floor,
            ...keyCubes.floor
        },
        slantDirection: keyCubes.slantDirection || ''
    }
}
