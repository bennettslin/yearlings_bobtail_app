import {
    DEFAULT,
    FRONT,
    SIDE,
    TILE,
    BASE
} from '../../../../../../../constants/scene/cubes'
import {
    LEFT,
    RIGHT
} from '../../../../../../../constants/lyrics'
import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Z_AXIS_LENGTH
} from '../../../../../../../constants/cubeIndex'

import { getHorizontalPlaneFractions } from '../../../../../../../helpers/cube'

const MID_X_INDEX = CUBE_X_AXIS_LENGTH / 2

const HORIZONTAL_FACES = [
    // This is the face that is attached to the level.
    BASE,

    // This is the top face if floor, bottom face if ceiling.
    TILE
]

export const getCubeCornerPoints = ({
    xIndex,
    yIndex,
    zIndex,
    isFloor,
    slantDirection

}) => {
    /**
     * This returns a three-dimensional matrix with the { x, y } coordinates of
     * all eight corners of the cube. Top level is base and tile, next level is
     * left and right, final level is front and back.
     */
    const baseZIndex = isFloor ? 0 : CUBE_Z_AXIS_LENGTH

    return HORIZONTAL_FACES.reduce((cubeCornerPercentages, face) => {
        cubeCornerPercentages[face] = getHorizontalPlaneFractions({
            xIndex,
            yIndex,
            zIndex: face === TILE ? zIndex : baseZIndex,
            slantDirection
        })

        return cubeCornerPercentages
    }, {})
}

const _getOrderedPointsForFrontFace = ({
    cubeCorners: {
        tile: tl,
        base: bs
    },
    isFloor
}) => (
    isFloor ?
        [tl.left.front, tl.right.front, bs.right.front, bs.left.front] :
        [bs.left.front, bs.right.front, tl.right.front, tl.left.front]
)

const _getOrderedPointsForTileFace = ({
    cubeCorners: { tile: tl },
    isFloor
}) => (
    isFloor ?
        [tl.left.back, tl.right.back, tl.right.front, tl.left.front] :
        [tl.left.front, tl.right.front, tl.right.back, tl.left.back]
)

const _getOrderedPointsForSideFace = ({
    xIndex,
    slantDirection,
    cubeCorners: {
        tile: tl,
        base: bs
    },
    isFloor
}) => {
    // If slanted, rendered side is just the slant direction.
    let renderedSide = slantDirection

    if (renderedSide === DEFAULT) {
        const sideDirection = xIndex < MID_X_INDEX ? LEFT : RIGHT
        // Render right face if cube is on left side of stage, and vice versa.
        renderedSide = sideDirection === LEFT ? RIGHT : LEFT
    }

    if (renderedSide === LEFT) {
        return isFloor ?
            [tl.left.back, tl.left.front, bs.left.front, bs.left.back] :
            [bs.left.back, bs.left.front, tl.left.front, tl.left.back]

    } else if (renderedSide === RIGHT) {
        return isFloor ?
            [tl.right.front, tl.right.back, bs.right.back, bs.right.front] :
            [bs.right.front, bs.right.back, tl.right.back, tl.right.front]
    }
}

const ORDERED_POINTS_GETTER_MAP = {
    [TILE]: _getOrderedPointsForTileFace,
    [FRONT]: _getOrderedPointsForFrontFace,
    [SIDE]: _getOrderedPointsForSideFace
}

const _getOrderedPoints = ({ face, ...props }) => (
    /**
     * This returns an array of four { x, y } coordinates in the order of a
     * polygon path.
     */
    ORDERED_POINTS_GETTER_MAP[face](props)
)

export const setSvgDataPathForFace = (props) => (
    _getOrderedPoints(props).map(({
        x, y
    }, index) => {

        // First "M"oveTo, then "L"ine.
        const command = index === 0 ? 'M' : 'L'

        return `${command}${x.toFixed(2)},${y.toFixed(2)}`

    })

    // Use the closePath command. "Z" since it's the last letter, I guess.
        .concat('Z')
        .join(' ')
)

