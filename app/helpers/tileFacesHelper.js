
const _getPolygonPoint = (coordinates, stageWidth, stageHeight) => {
    const xPoint = coordinates.x * stageWidth * 0.01,
        yPoint = coordinates.y * stageHeight * 0.01

    return `${xPoint},${yPoint}`
}

export const getPolygonPointsForTileCube = ({
    cubeCorners,
    stageWidth,
    stageHeight
}) => {
    const { tile } = cubeCorners

    return (
        `${_getPolygonPoint(tile.left.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.right.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.right.front, stageWidth, stageHeight)} ${_getPolygonPoint(tile.left.front, stageWidth, stageHeight)}`
    )
}

export const getPolygonPointsForFrontCube = ({
    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight
}) => {
    const { tile, wood } = cubeCorners

    if (slantDirection === 'left') {
        return (
            `${_getPolygonPoint(tile.left.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.right.back, stageWidth, stageHeight)} ${_getPolygonPoint(wood.right.back, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.back, stageWidth, stageHeight)}`
        )
    } else if (slantDirection === 'right') {
        return (
            `${_getPolygonPoint(tile.left.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.left.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.back, stageWidth, stageHeight)}`
        )
    } else {
        return (
            `${_getPolygonPoint(tile.left.front, stageWidth, stageHeight)} ${_getPolygonPoint(tile.right.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.right.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.front, stageWidth, stageHeight)}`
        )
    }
}

export const getPolygonPointsForSideCube = ({
    isLeft = true,
    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight
}) => {
    const { tile, wood } = cubeCorners

    if (slantDirection === 'left') {
        return (
            `${_getPolygonPoint(tile.left.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.left.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.back, stageWidth, stageHeight)}`
        )
    } else if (slantDirection === 'right') {
        return (
            `${_getPolygonPoint(tile.left.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.right.back, stageWidth, stageHeight)} ${_getPolygonPoint(wood.right.back, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.back, stageWidth, stageHeight)}`
        )
    } else {
        // If cube is on left, then show right face, and vice versa.
        const xFace = isLeft ? 'right' : 'left'

        return (
            `${_getPolygonPoint(tile[xFace].back, stageWidth, stageHeight)} ${_getPolygonPoint(tile[xFace].front, stageWidth, stageHeight)} ${_getPolygonPoint(wood[xFace].front, stageWidth, stageHeight)} ${_getPolygonPoint(wood[xFace].back, stageWidth, stageHeight)}`
        )
    }
}
