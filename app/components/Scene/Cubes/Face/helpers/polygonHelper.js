import { getIsFrontFace,
         getIsSideFace,
         getIsTileFace } from './faceHelper'

export const getPolygonPointsString = (polygonPointsArray) => {
    return polygonPointsArray.map(({ x, y }) => {
        return `${x.toFixed(2)},${y.toFixed(2)}`
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
    stageHeight,
    isFloor

}) => {
    const { tile: tl, base: bs } = cubeCorners
    let cornerOrder

    if (slantDirection === 'left') {
        cornerOrder = isFloor ?
            [tl.left.back, tl.right.back, bs.right.back, bs.left.back] :
            [bs.left.back, bs.right.back, tl.right.back, tl.left.back]

    } else if (slantDirection === 'right') {
        cornerOrder = isFloor ?
            [tl.left.front, tl.left.back, bs.left.back, bs.left.front] :
            [bs.left.front, bs.left.back, tl.left.back, tl.left.front]

    } else {
        cornerOrder = isFloor ?
            [tl.left.front, tl.right.front, bs.right.front, bs.left.front] :
            [bs.left.front, bs.right.front, tl.right.front, tl.left.front]
    }

    return cornerOrder.map(corner => (
        _getPolygonPoint(corner, stageWidth, stageHeight)
    ))
}

export const getPolygonPointsForSideFace = ({

    sideDirection,
    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight,
    isFloor

}) => {
    const { tile: tl, base: bs } = cubeCorners
    let cornerOrder

    if (slantDirection === 'left') {
        cornerOrder = isFloor ?
            [tl.left.front, tl.left.back, bs.left.back, bs.left.front] :
            [bs.left.front, bs.left.back, tl.left.back, tl.left.front]

    } else if (slantDirection === 'right') {
        cornerOrder = isFloor ?
            [tl.left.back, tl.right.back, bs.right.back, bs.left.back] :
            [bs.left.back, bs.right.back, tl.right.back, tl.left.back]

    } else {
        // Render right face if cube is on left side of stage, and vice versa.
        const side = sideDirection === 'left' ?
            'right' : 'left'

        if (side === 'right') {
            cornerOrder = isFloor ?
                [tl[side].front, tl[side].back, bs[side].back, bs[side].front] :
                [bs[side].front, bs[side].back, tl[side].back, tl[side].front]

        } else {
            cornerOrder = isFloor ?
                [tl[side].back, tl[side].front, bs[side].front, bs[side].back] :
                [bs[side].back, bs[side].front, tl[side].front, tl[side].back]
        }
    }

    return cornerOrder.map(corner => (
        _getPolygonPoint(corner, stageWidth, stageHeight)
    ))
}

export const getPolygonPointsForTileFace = ({

    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight,
    isFloor

}) => {

    const { tile: tl } = cubeCorners
    let cornerOrder

    if (slantDirection === 'left') {
        cornerOrder = isFloor ?
            [tl.left.front, tl.right.front, tl.right.back, tl.left.back] :
            [tl.left.back, tl.right.back, tl.right.front, tl.left.front]

    } else if (slantDirection === 'right') {
        cornerOrder = isFloor ?
            [tl.right.front, tl.right.back, tl.left.back, tl.left.front] :
            [tl.left.front, tl.left.back, tl.right.back, tl.right.front]

    } else {
        cornerOrder = isFloor ?
            [tl.left.back, tl.right.back, tl.right.front, tl.left.front] :
            [tl.left.front, tl.right.front, tl.right.back, tl.left.back]
    }

    return cornerOrder.map(corner => (
        _getPolygonPoint(corner, stageWidth, stageHeight)
    ))
}

export const getPolygonPoints = ({
    face,
    isFloor,
    sideDirection,
    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight
}) => {

    if (getIsTileFace(face)) {

        return getPolygonPointsForTileFace({
            isFloor,
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight
        })

    } else if (getIsFrontFace(face)) {

        return getPolygonPointsForFrontFace({
            isFloor,
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight
        })

    } else if (getIsSideFace(face)) {

        return getPolygonPointsForSideFace({
            isFloor,
            sideDirection,
            slantDirection,
            cubeCorners,
            stageWidth,
            stageHeight
        })
    }
}
