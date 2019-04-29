/* eslint-disable object-curly-newline */
import HSLA_MAP from '../../../../../scene/cubes/hsla'

import {
    CEILING,
    TILE,
    SIDE,
    FRONT
} from '../../../../../constants/scene'

import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Z_AXIS_LENGTH
} from '../../../../../constants/cubeIndex'

const
    CUBE_X_AXIS_CENTRE_INDEX = CUBE_X_AXIS_LENGTH / 2 - 0.5,
    CUBE_Z_AXIS_HALF_LENGTH = CUBE_Z_AXIS_LENGTH / 2,
    X_INDEX_BASE_DECREASE = 0.95,
    X_INDEX_LUMINOSITY_DECREMENT = 0.05,
    Y_INDEX_BASE_DECREASE = 0.9,
    Y_INDEX_LUMINOSITY_DECREMENT = 0.05,
    Z_INDEX_LUMINOSITY_DECREMENT = 0.05,
    BASE_ALPHA = 0.9

const _getLuminosityForTileFace = ({ l, level, zIndex }) => {
    // All ceiling tiles share the same reduced luminosity.
    if (level === CEILING) {
        return l * 0.5

    // If it's a floor tile above the zIndex midpoint, then it isn't even seen.
    } else if (zIndex < CUBE_Z_AXIS_HALF_LENGTH) {
        return l

    } else {
        const
            // The farther to the floor, the more luminosity is subtracted.
            subtractedLuminosity =
                (CUBE_Z_AXIS_HALF_LENGTH - zIndex)
                * Z_INDEX_LUMINOSITY_DECREMENT

        return l * (1 - subtractedLuminosity) * X_INDEX_BASE_DECREASE
    }
}

const _getLuminosityForSideFace = ({ l, xIndex }) => {
    const
        // Indices start at 0 in the centre and end at 5 for the sides.
        sideXIndex = Math.abs(CUBE_X_AXIS_CENTRE_INDEX - xIndex) - 0.5,

        // The farther to the sides, the more luminosity is subtracted.
        subtractedLuminosity = sideXIndex * X_INDEX_LUMINOSITY_DECREMENT

    return l * (1 - subtractedLuminosity)
}

const _getLuminosityForFrontFace = ({ l, yIndex }) => {
    // The closer to the audience, the more luminosity is subtracted.
    const subtractedLuminosity = yIndex * Y_INDEX_LUMINOSITY_DECREMENT

    return l * (1 - subtractedLuminosity) * Y_INDEX_BASE_DECREASE
}

export const getCubeColour = ({
    hslaKey,
    level,
    yIndex,
    xIndex,
    zIndex,
    face
}) => {
    const { h, s, l, a = BASE_ALPHA } = HSLA_MAP[hslaKey]
    let luminosity

    switch (face) {
        case TILE:
            luminosity = _getLuminosityForTileFace({ l, level, zIndex })
            break
        case SIDE:
            luminosity = _getLuminosityForSideFace({ l, xIndex })
            break
        case FRONT:
            luminosity = _getLuminosityForFrontFace({ l, yIndex })
            break
    }

    return `hsla(${h}, ${s}%, ${luminosity}%, ${a})`
}
