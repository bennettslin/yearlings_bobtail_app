// Remove this eslint disable eventually.
/* eslint-disable no-unused-vars */
import HSLA_MAP, {
    GRASS_COLOUR,
    SAND_COLOUR,
    WOOD_FLOOR_COLOUR,
    BENNETT_FLOOR_COLOUR,
    LINOLEUM_FLOOR_COLOUR
} from '../../../../../../../scene/cubes/colours'

const BASE_ALPHA = 1
const MAX_LIMIT = 30

const _getRandomValue = value => {
    // JavaScript doesn't allow seeding.
    return value + Math.floor(Math.random() * Math.floor(MAX_LIMIT))
}

export const getBaseColour = (hslaKey) => {
    const
        {
            h,
            s,
            l,
            a = BASE_ALPHA
        } = HSLA_MAP[hslaKey]

    // eslint-disable-next-line object-curly-newline
    return { h: _getRandomValue(h), s: _getRandomValue(s), l, a }
}
