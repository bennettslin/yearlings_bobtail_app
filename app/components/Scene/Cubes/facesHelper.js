import { getArrayOfLength } from '../../../helpers/generalHelper'

const MATRIX_LENGTH = 8,
    // MATRIX_INDICES_ARRAY = getArrayOfLength(MATRIX_LENGTH),
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

export const getBitmapMatrixForTileFace = (
    bitmap,
    polygonPoints
) => {

    const

        // This serves as the origin reference point.
        topLeft = polygonPoints[0],

        // Name other corners for clarity.
        topRight = polygonPoints[1],
        bottomRight = polygonPoints[2],
        bottomLeft = polygonPoints[3],

        // Establish values to increment side points.
        leftmostXIncrement = (bottomLeft.x - topLeft.x) / MATRIX_LENGTH,
        leftmostYIncrement = (bottomLeft.y - topLeft.y) / MATRIX_LENGTH,
        rightmostXIncrement = (bottomRight.x - topRight.x) / MATRIX_LENGTH,
        rightmostYIncrement = (bottomRight.y - topRight.y) / MATRIX_LENGTH,

        // Establish side points.
        leftmostPoints = COORDINATES_ARRAY.map(index => ({
            x: topLeft.x + index * leftmostXIncrement,
            y: topLeft.y + index * leftmostYIncrement
        })),
        rightmostPoints = COORDINATES_ARRAY.map(index => ({
            x: topRight.x + index * rightmostXIncrement,
            y: topRight.y + index * rightmostYIncrement
        })),

        // Create matrix of all points.
        coordinatesMatrix = COORDINATES_ARRAY.map(rowIndex => {

            // Name left point and right point.
            const
                leftPoint = leftmostPoints[rowIndex],
                rightPoint = rightmostPoints[rowIndex],

                xIncrement = (rightPoint.x - leftPoint.x) / MATRIX_LENGTH,
                yIncrement = (rightPoint.y - leftPoint.y) / MATRIX_LENGTH

            return COORDINATES_ARRAY.map(columnIndex => ({
                /**
                 * Since these values are relative to the origin, we'll add the
                 * origin back here.
                 */
                x: leftPoint.x + columnIndex * xIncrement,
                y: leftPoint.y + columnIndex * yIncrement
            }))
        })

    /**
     * We want to return a matrix that has the same dimensions as the bitmap.
     * So we will just map over the bitmap.
     */
    return bitmap.map((bitmapRow, rowIndex) => {

        return bitmapRow.map((fill, columnIndex) => {

            const polygonPoints = [
                coordinatesMatrix[rowIndex][columnIndex],
                coordinatesMatrix[rowIndex][columnIndex + 1],
                coordinatesMatrix[rowIndex + 1][columnIndex + 1],
                coordinatesMatrix[rowIndex + 1][columnIndex]
            ]

            return {
                fill,
                polygonPoints
            }
        })
    })
}

export const getBitmapMatrixForFrontFace = (
    bitmap,
    polygonPoints
) => {
    return bitmap.map(bitmapRow => {
        return bitmapRow.map(fill => {
            return {
                fill,
                polygonPoints
            }
        })
    })
}
