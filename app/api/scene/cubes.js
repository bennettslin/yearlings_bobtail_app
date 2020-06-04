import { scene } from '../imports'
import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'

const {
    cubes: CUBES
} = scene

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
        slantDirection: keyCubes.slantDirection
    }
}
