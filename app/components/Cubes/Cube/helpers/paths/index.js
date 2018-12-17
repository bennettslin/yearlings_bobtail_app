import {
    getSideDirection,
    getCubeCornerPercentages,
    getPathString
} from './helper'

import { getPolygonPoints } from './pathHelper'

import {
    SLANT_DIRECTIONS,
    LEVELS,
    FLOOR,
    FACES
} from 'constants/scene'

import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES,
    CUBE_Z_INDICES
} from 'constants/cubeIndex'

const FACE_PATHS = {}

SLANT_DIRECTIONS.forEach(slantDirection => {
    const slantDirectionKey = slantDirection || 'default'

    FACE_PATHS[slantDirectionKey] = {}
    const levelRoot = FACE_PATHS[slantDirectionKey]

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
                const
                    zIndexRoot = xIndexRoot[xIndex],
                    sideDirection = getSideDirection({
                        xIndex,
                        slantDirection
                    })

                CUBE_Z_INDICES.forEach(zIndex => {
                    zIndexRoot[zIndex] = {}
                    const
                        faceRoot = zIndexRoot[zIndex],
                        cubeCorners = getCubeCornerPercentages({
                            xIndex,
                            yIndex,
                            zIndex,
                            isFloor,
                            slantDirection
                        })

                    FACES.forEach(face => {
                        const
                            polygonPoints = getPolygonPoints({
                                face,
                                isFloor,
                                sideDirection,
                                slantDirection,
                                cubeCorners
                            }),
                            pathString = getPathString(polygonPoints)

                        faceRoot[face] = pathString
                    })
                })
            })
        })
    })
})

const getFacePath = ({
    slantDirection,
    level,
    yIndex,
    xIndex,
    zIndex,
    face
}) => {
    const slantDirectionKey = slantDirection || 'default'
    return FACE_PATHS[slantDirectionKey][level][yIndex][xIndex][zIndex][face]
}

export { getFacePath }
