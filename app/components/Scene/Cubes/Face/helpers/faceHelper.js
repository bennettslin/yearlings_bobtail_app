import { CUBE_Z_AXIS_LENGTH } from '../../../../../constants/stage'

export const getIsTileFace = (face) => {
    return face === 'tile'
}

export const getIsFrontFace = (face) => {
    return face === 'front'
}

export const getIsSideFace = (face) => {
    return face === 'side'
}

export const getMaxFaceHeight = ({
    isFloor,
    zIndex
}) => {
    /**
     * Get the maximum height of the face, based on the cube's zIndex. If
     * negative, make it zero.
     */
    return Math.max(
        isFloor ? zIndex : (CUBE_Z_AXIS_LENGTH - zIndex),
        0
    )
}

export const doRenderFace = ({
    face,
    maxFaceHeight
}) => {
    /**
     * Only render if it's a tile face below the halfway zIndex, or a face with height.
     */
    return getIsTileFace(face) ?
        maxFaceHeight < (CUBE_Z_AXIS_LENGTH / 2) :
        maxFaceHeight
}
