import { CUBES } from '../../assets/scene/cubes/cubes'
import { DEFAULT_STAGE_KEY } from '../../assets/scene/cubes/cubesKeys'

export const getCubesForKey = (cubesKey) => {

    return {
        // If ceiling or floor is absent, use the default values.
        ...CUBES[DEFAULT_STAGE_KEY],

        ...CUBES[cubesKey]
    }
}
