import {
    getCubeCornerPoints,
    setSvgDataPathForFace,
} from './points'
import {
    SLANT_DIRECTIONS,
    LEVELS,
    FLOOR,
    FACES,
} from '../../../src/constants/scene/cubes'
import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES,
    CUBE_Z_INDICES,
} from '../../../src/constants/cubeIndex'
import { RUNTIME } from '../../../src/constants/server'

const FACE_PATHS = {
    _build: RUNTIME,
}

SLANT_DIRECTIONS.forEach(slantDirection => {
    FACE_PATHS[slantDirection] = {}
    const levelRoot = FACE_PATHS[slantDirection]

    LEVELS.forEach(level => {
        levelRoot[level] = {}
        const
            yIndexRoot = levelRoot[level],
            isFloor = level === FLOOR

        CUBE_Y_INDICES.forEach(yIndex => {
            yIndexRoot[yIndex] = {}
            const xIndexRoot = yIndexRoot[yIndex]

            CUBE_X_INDICES.forEach(xIndex => {
                xIndexRoot[xIndex] = {}
                const zIndexRoot = xIndexRoot[xIndex]

                CUBE_Z_INDICES.forEach(zIndex => {
                    zIndexRoot[zIndex] = {}
                    const
                        faceRoot = zIndexRoot[zIndex],
                        cubeCorners = getCubeCornerPoints({
                            xIndex,
                            yIndex,
                            zIndex,
                            isFloor,
                            slantDirection,
                        })

                    FACES.forEach(face => {
                        faceRoot[face] = setSvgDataPathForFace({
                            face,
                            isFloor,
                            xIndex,
                            slantDirection,
                            cubeCorners,
                        })
                    })
                })
            })
        })
    })
})

export default FACE_PATHS
