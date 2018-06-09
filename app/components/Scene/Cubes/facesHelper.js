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

export const getBitmapMatrixForTileFace = (
    bitmap,
    polygonPoints
) => {

    /**
     * We want to return a matrix that has the same dimensions as the bitmap.
     * So we will just map over the bitmap.
     */
    return bitmap.map(bitmapRow => {
        return bitmapRow.map(fill => {
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
