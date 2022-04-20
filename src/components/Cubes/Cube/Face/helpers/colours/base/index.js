/* eslint-disable object-curly-newline */
import {
    GRASS_COLOUR,
    OCEAN_NIGHT_COLOUR,
    SAND_NIGHT_COLOUR,
    WOOD_FLOOR_COLOUR,
    BENNETT_FLOOR_COLOUR,
    LINOLEUM_FLOOR_COLOUR,
    LINOLEUM_PAST_COLOUR,
    GRASS_AUTUMN_COLOUR,
    GRASS_AUTUMN_NIGHT_COLOUR,
    GRASS_WINTER_COLOUR,
    GRASS_NIGHT_COLOUR,
} from '../../../../../../../constants/scene/cubes/colours'
import HSLA_MAP from '../../../../../../../constants/scene/cubes/hsla'

const BASE_ALPHA = 1,

    // Not actually random, since JavaScript doesn't allow seeding.
    RANDOM_MULTIPLIER_MAP = [0, 5, -2, 2, -1, -3, -5, 1, 4, 0, -4, -1, 3]

const _getRandomValue = ({
    hslaKey,
    yIndex,
    xIndex,
    hueIncrement = 1,
}) => {
    // Magic numbers are just for the sake of being random.
    const { h, s, l, a } = HSLA_MAP[hslaKey],

        hueOffset =
            RANDOM_MULTIPLIER_MAP[(xIndex + (yIndex * 7)) % 13] * hueIncrement,

        defaultOffset =
            // Divide by half to minimise offset.
            RANDOM_MULTIPLIER_MAP[(xIndex + (yIndex * 3)) % 7] * 0.5

    // Randomise hue.
    return { h: h + hueOffset, s: s + defaultOffset, l: l - defaultOffset, a }
}

const _getWideRandomValue = (props) => (
    _getRandomValue({ ...props, hueIncrement: 2 })
)

const _getNarrowRandomValue = (props) => (
    _getRandomValue(props)
)

const _getRandomBrickPatternValue = ({
    hslaKey,
    yIndex,
    xIndex,
}) => {
    const
        yOffset = yIndex % 2,
        xMultiplier = Math.floor((xIndex + yOffset) / 2)

    return _getRandomValue({
        hslaKey,
        yIndex,
        xIndex: xMultiplier,
    })
}

const _getCheckerboardValue = ({
    hslaKey,
    yIndex,
    xIndex,
}) => {
    const { h, s, l, a } = HSLA_MAP[hslaKey],

        // Top left corner tile is dark.
        isDarkTile = (xIndex + yIndex) % 2 === 0

    // Reduce luminosity for dark tile.
    return { h, s, l: l * (isDarkTile ? 0.85 : 1), a }
}

const _getDiagonalValue = ({
    hslaKey,
    yIndex,
    xIndex,
}) => {
    const { h, s, l, a } = HSLA_MAP[hslaKey],

        isLightTile = (xIndex - yIndex + 3) % 3 === 0,
        isDarkTile = (xIndex - yIndex + 3) % 3 === 1

    if (isLightTile) {
        return { h, s: s * 0.96, l: l * 1.04, a }
    } else if (isDarkTile) {
        return { h, s: s * 1.04, l: l * 0.96, a }
    } else {
        return { h, s, l, a }
    }
}

const COLOUR_GETTER_MAP = {
    [BENNETT_FLOOR_COLOUR]: _getDiagonalValue,
    [GRASS_AUTUMN_COLOUR]: _getWideRandomValue,
    [GRASS_AUTUMN_NIGHT_COLOUR]: _getWideRandomValue,
    [GRASS_COLOUR]: _getWideRandomValue,
    [GRASS_NIGHT_COLOUR]: _getWideRandomValue,
    [GRASS_WINTER_COLOUR]: _getWideRandomValue,
    [LINOLEUM_FLOOR_COLOUR]: _getCheckerboardValue,
    [LINOLEUM_PAST_COLOUR]: _getCheckerboardValue,
    [OCEAN_NIGHT_COLOUR]: _getNarrowRandomValue,
    [SAND_NIGHT_COLOUR]: _getWideRandomValue,
    [WOOD_FLOOR_COLOUR]: _getRandomBrickPatternValue,
}

export const getBaseColour = ({
    hslaKey,
    yIndex,
    xIndex,
}) => {
    const customColourGetter = COLOUR_GETTER_MAP[hslaKey],
        { h, s, l, a = BASE_ALPHA } = customColourGetter ?
            customColourGetter({
                hslaKey,
                yIndex,
                xIndex,
            }) : HSLA_MAP[hslaKey]

    return { h, s, l, a }
}
