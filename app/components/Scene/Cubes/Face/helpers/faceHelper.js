import { FRONT,
         SIDE,
         TILE } from '../../../constants'

export const getIsFrontFace = (face) => {
    return face === FRONT
}

export const getIsSideFace = (face) => {
    return face === SIDE
}

export const getIsTileFace = (face) => {
    return face === TILE
}
