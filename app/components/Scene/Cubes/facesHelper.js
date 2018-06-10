import { getArrayOfLength } from '../../../helpers/generalHelper'

const MATRIX_LENGTH = 8,
    MATRIX_INDICES_ARRAY = getArrayOfLength({ length: MATRIX_LENGTH }),
    COORDINATES_ARRAY = getArrayOfLength({ length: MATRIX_LENGTH + 1 })

/************
 * POLYGONS *
 ************/

export const getPolygonPointsString = (polygonPointsArray) => {
    return polygonPointsArray.map(({ x, y }) => {
        return `${x},${y}`
    }).join(' ')
}

const _getPolygonPoint = ({ x, y }, stageWidth, stageHeight) => {
    const xPoint = x * stageWidth * 0.01,
        yPoint = y * stageHeight * 0.01

    return {
        x: xPoint,
        y: yPoint
    }
}

export const getPolygonPointsForFrontFace = ({
    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight
}) => {
    const { tile, base } = cubeCorners

    if (slantDirection === 'left') {
        return [
            _getPolygonPoint(tile.left.back, stageWidth, stageHeight),
            _getPolygonPoint(tile.right.back, stageWidth, stageHeight),
            _getPolygonPoint(base.right.back, stageWidth, stageHeight),
            _getPolygonPoint(base.left.back, stageWidth, stageHeight)
        ]

    } else if (slantDirection === 'right') {
        return [
            _getPolygonPoint(tile.left.back, stageWidth, stageHeight),
            _getPolygonPoint(tile.left.front, stageWidth, stageHeight),
            _getPolygonPoint(base.left.front, stageWidth, stageHeight),
            _getPolygonPoint(base.left.back, stageWidth, stageHeight)
        ]

    } else {
        return [
            _getPolygonPoint(tile.left.front, stageWidth, stageHeight),
            _getPolygonPoint(tile.right.front, stageWidth, stageHeight),
            _getPolygonPoint(base.right.front, stageWidth, stageHeight),
            _getPolygonPoint(base.left.front, stageWidth, stageHeight)
        ]
    }
}

export const getPolygonPointsForSideFace = ({
    isLeft = true,
    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight
}) => {
    const { tile, base } = cubeCorners

    if (slantDirection === 'left') {
        return [
            _getPolygonPoint(tile.left.back, stageWidth, stageHeight),
            _getPolygonPoint(tile.left.front, stageWidth, stageHeight),
            _getPolygonPoint(base.left.front, stageWidth, stageHeight),
            _getPolygonPoint(base.left.back, stageWidth, stageHeight)
        ]

    } else if (slantDirection === 'right') {
        return [
            _getPolygonPoint(tile.left.back, stageWidth, stageHeight),
            _getPolygonPoint(tile.right.back, stageWidth, stageHeight),
            _getPolygonPoint(base.right.back, stageWidth, stageHeight),
            _getPolygonPoint(base.left.back, stageWidth, stageHeight)
        ]

    } else {
        // If cube is on left, then show right face, and vice versa.
        const xFace = isLeft ? 'right' : 'left'

        return [
            _getPolygonPoint(tile[xFace].back, stageWidth, stageHeight),
            _getPolygonPoint(tile[xFace].front, stageWidth, stageHeight),
            _getPolygonPoint(base[xFace].front, stageWidth, stageHeight),
            _getPolygonPoint(base[xFace].back, stageWidth, stageHeight)
        ]
    }
}

export const getPolygonPointsForTileFace = ({
    cubeCorners,
    stageWidth,
    stageHeight
}) => {
    const { tile } = cubeCorners

    return [
        _getPolygonPoint(tile.left.back, stageWidth, stageHeight), _getPolygonPoint(tile.right.back, stageWidth, stageHeight), _getPolygonPoint(tile.right.front, stageWidth, stageHeight), _getPolygonPoint(tile.left.front, stageWidth, stageHeight),
    ]
}

const _getBitmapMatrixForFace = ({
    bitmap,
    polygonPoints,
    zHeight
}) => {

    const

        // This serves as the origin reference point.
        topLeft = polygonPoints[0],

        // Name other corners as well for clarity.
        topRight = polygonPoints[1],
        bottomRight = polygonPoints[2],
        bottomLeft = polygonPoints[3],

        isStaticHeight = isNaN(zHeight),

        /**
         * Determine the number of pixels that make up the height. If it's a
         * tile face, this value is constant. If it's a front or side face,
         * then this value is determined by the zHeight.
         */
        matrixHeightLength = isStaticHeight ?
            MATRIX_LENGTH :

            /**
             * When zHeight is 3, face is close enough to a square. It's not
             * exact, but this is fine for now.
             */
            MATRIX_LENGTH * (zHeight / 3),

        // Establish values to increment side points.
        leftmostXIncrement = (bottomLeft.x - topLeft.x) / matrixHeightLength,
        leftmostYIncrement = (bottomLeft.y - topLeft.y) / matrixHeightLength,
        rightmostXIncrement = (bottomRight.x - topRight.x) / matrixHeightLength,
        rightmostYIncrement = (bottomRight.y - topRight.y) / matrixHeightLength,

        coordinatesHeightArray = isStaticHeight ?
            COORDINATES_ARRAY :
            getArrayOfLength({ length: matrixHeightLength + 1 }),

        // Establish side points.
        leftmostPoints = coordinatesHeightArray.map(yIndex => ({
            x: topLeft.x + yIndex * leftmostXIncrement,
            y: topLeft.y + yIndex * leftmostYIncrement
        })),
        rightmostPoints = coordinatesHeightArray.map(yIndex => ({
            x: topRight.x + yIndex * rightmostXIncrement,
            y: topRight.y + yIndex * rightmostYIncrement
        })),

        // Create matrix of all points.
        coordinatesMatrix = coordinatesHeightArray.map(yIndex => {

            // Name left point and right points for clarity.
            const
                leftPoint = leftmostPoints[yIndex],
                rightPoint = rightmostPoints[yIndex],

                xIncrement = (rightPoint.x - leftPoint.x) / MATRIX_LENGTH,
                yIncrement = (rightPoint.y - leftPoint.y) / MATRIX_LENGTH

            return COORDINATES_ARRAY.map(xIndex => ({
                /**
                 * Since these values are relative to the origin, we'll add the
                 * origin back here.
                 */
                x: leftPoint.x + xIndex * xIncrement,
                y: leftPoint.y + xIndex * yIncrement
            }))
        }),

        bitmapHeightArray = isStaticHeight ?
            MATRIX_INDICES_ARRAY :
            getArrayOfLength({ length: matrixHeightLength })

    return bitmapHeightArray.map(yIndex => {

        return MATRIX_INDICES_ARRAY.map(xIndex => {

            const fill = bitmap[yIndex % MATRIX_LENGTH][xIndex],

                polygonPoints = [
                    coordinatesMatrix[yIndex][xIndex],
                    coordinatesMatrix[yIndex][xIndex + 1],
                    coordinatesMatrix[yIndex + 1][xIndex + 1],
                    coordinatesMatrix[yIndex + 1][xIndex]
                ]

            return {
                fill,
                polygonPoints
            }
        })
    })
}

export const getBitmapMatrixForTileFace = ({
    bitmap,
    polygonPoints
}) => {
    return _getBitmapMatrixForFace({
        bitmap,
        polygonPoints
    })
}

export const getBitmapMatrixForDynamicFace = ({
    bitmap,
    polygonPoints,
    zHeight
}) => {
    return _getBitmapMatrixForFace({
        bitmap,
        polygonPoints,
        zHeight
    })
}
