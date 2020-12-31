import {
    CEILING,
    TILE,
    SIDE,
    FRONT,
} from '../../../../../../../constants/scene/cubes'

import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Z_AXIS_LENGTH,
} from '../../../../../../../constants/cubeIndex'

const
    CUBE_X_AXIS_CENTRE_INDEX = CUBE_X_AXIS_LENGTH / 2 - 0.5,
    CUBE_Z_AXIS_HALF_LENGTH = CUBE_Z_AXIS_LENGTH / 2,
    X_INDEX_BASE_DECREASE = 0.95,
    X_INDEX_LUMINOSITY_DECREMENT = 0.05,
    Y_INDEX_BASE_DECREASE = 0.9,
    Y_INDEX_LUMINOSITY_DECREMENT = 0.05,
    Z_INDEX_LUMINOSITY_DECREMENT = 0.05

const _getReducedLuminosityForTileFace = ({
    l,
    level,
    zIndex,
}) => {
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

const _getReducedLuminosityForSideFace = ({ l, xIndex }) => {
    const
        // Indices start at 0 in the centre and end at 5 for the sides.
        sideXIndex = Math.abs(CUBE_X_AXIS_CENTRE_INDEX - xIndex) - 0.5,

        // The farther to the sides, the more luminosity is subtracted.
        subtractedLuminosity = sideXIndex * X_INDEX_LUMINOSITY_DECREMENT

    return l * (1 - subtractedLuminosity)
}

const _getReducedLuminosityForFrontFace = ({ l, yIndex }) => {
    // The closer to the audience, the more luminosity is subtracted.
    const subtractedLuminosity = yIndex * Y_INDEX_LUMINOSITY_DECREMENT

    return l * (1 - subtractedLuminosity) * Y_INDEX_BASE_DECREASE
}

const REDUCED_LUMINOSITY_GETTER_MAP = {
    [TILE]: _getReducedLuminosityForTileFace,
    [SIDE]: _getReducedLuminosityForSideFace,
    [FRONT]: _getReducedLuminosityForFrontFace,
}

export const getReducedLuminosity = ({ face, ...props }) => (
    REDUCED_LUMINOSITY_GETTER_MAP[face](props)
)
