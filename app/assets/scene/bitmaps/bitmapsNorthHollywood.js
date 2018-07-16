import {
    NORTH_HOLLYWOOD_LAWN_KEY,
    SIDEWALK_KEY
} from './bitmapsKeys'

import {
} from './bitmapsConstants'

const

    NORTH_HOLLYWOOD_LAWN_BITMAP = {
        base: '8d8',
        pixels: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
        ]
    },

    SIDEWALK_BITMAP = {
        base: '888',
        pixels: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
        ]
    },

    BITMAPS_NORTH_HOLLYWOOD = {
        [NORTH_HOLLYWOOD_LAWN_KEY]: NORTH_HOLLYWOOD_LAWN_BITMAP,
        [SIDEWALK_KEY]: SIDEWALK_BITMAP,
    }

export {
    BITMAPS_NORTH_HOLLYWOOD
}
