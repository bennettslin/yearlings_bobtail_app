import {
    getCubeCornerPoints,
    setSvgDataPathForFace
} from './pathPoints'

import {
    SLANT_DIRECTIONS,
    LEVELS,
    FLOOR,
    FACES
} from 'constants/scene/cubes'

import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES,
    CUBE_Z_INDICES
} from 'constants/cubeIndex'

const FACE_PATHS = {}

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
                            slantDirection
                        })

                    FACES.forEach(face => {
                        faceRoot[face] = setSvgDataPathForFace({
                            face,
                            isFloor,
                            xIndex,
                            slantDirection,
                            cubeCorners
                        })
                    })
                })
            })
        })
    })
})

export const getSvgDataPathForFace = ({
    slantDirection,
    level,
    yIndex,
    xIndex,
    zIndex,
    face
}) => (
    FACE_PATHS[slantDirection][level][yIndex][xIndex][zIndex][face]
)
