import { CUBES } from '../../assets/scene/cubes/cubes'
import { DEFAULT_STAGE_KEY } from '../../assets/scene/cubes/cubesKeys'

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
