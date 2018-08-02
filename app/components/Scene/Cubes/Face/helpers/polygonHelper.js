import {
    FRONT,
    SIDE,
    TILE
} from '../../../sceneConstants'

export const getPathString = (polygonPoints) => {
    return polygonPoints.map(({ x, y }, index) => {

        // First "M"oveTo, then "L"ine.
        const command = index === 0 ? 'M' : 'L'

        return `${command}${x.toFixed(2)},${y.toFixed(2)}`

    })

    // Use the closePath command. "Z" since it's the last letter, I guess.
    .concat('Z')
    .join(' ')
}

const _getPolygonPoint = ({ x, y }) => {
    const xPoint = x,
        yPoint = y

    return {
        x: xPoint,
        y: yPoint
    }
}

const _getPolygonPointsForFrontFace = ({

    cubeCorners,
    isFloor

}) => {
    const { tile: tl, base: bs } = cubeCorners,

        cornerOrder = isFloor ?
            [tl.left.front, tl.right.front, bs.right.front, bs.left.front] :
            [bs.left.front, bs.right.front, tl.right.front, tl.left.front]

    return cornerOrder.map(corner => (
        _getPolygonPoint(corner)
    ))
}

const _getPolygonPointsForTileFace = ({

    cubeCorners,
    isFloor

}) => {

    const { tile: tl } = cubeCorners,

        cornerOrder = isFloor ?
            [tl.left.back, tl.right.back, tl.right.front, tl.left.front] :
            [tl.left.front, tl.right.front, tl.right.back, tl.left.back]

    return cornerOrder.map(corner => (
        _getPolygonPoint(corner)
    ))
}

const _getPolygonPointsForSideFace = ({

    sideDirection,
    slantDirection,
    cubeCorners,
    isFloor

}) => {
    const { tile: tl, base: bs } = cubeCorners

    // Direction is slant direction.
    let direction = slantDirection,
        cornerOrder

    // If default...
    if (!direction) {

        /**
         * ... render right face if cube is on left side of stage, and vice
         * versa.
         */
        direction = sideDirection === 'left' ? 'right' : 'left'
    }

    if (direction === 'left') {
        cornerOrder = isFloor ?
            [tl.left.back, tl.left.front, bs.left.front, bs.left.back] :
            [bs.left.back, bs.left.front, tl.left.front, tl.left.back]

    } else if (direction === 'right') {
        cornerOrder = isFloor ?
            [tl.right.front, tl.right.back, bs.right.back, bs.right.front] :
            [bs.right.front, bs.right.back, tl.right.back, tl.right.front]
    }

    return cornerOrder.map(corner => (
        _getPolygonPoint(corner)
    ))
}

export const getPolygonPoints = ({
    face,
    isFloor,
    sideDirection,
    slantDirection,
    cubeCorners
}) => {

    if (face === TILE) {
        return _getPolygonPointsForTileFace({
            isFloor,
            cubeCorners
        })

    } else if (face === FRONT) {
        return _getPolygonPointsForFrontFace({
            isFloor,
            cubeCorners
        })

    } else if (face === SIDE) {
        return _getPolygonPointsForSideFace({
            isFloor,
            sideDirection,
            slantDirection,
            cubeCorners
        })
    }
}
