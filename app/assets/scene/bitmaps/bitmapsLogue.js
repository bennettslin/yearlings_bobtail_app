import {
    LOGUE_PLATFORM_KEY,
    LOGUE_FLOOR_KEY
} from './bitmapsKeys'

import {
} from './bitmapsConstants'

const

    LOGUE_PLATFORM_BITMAP = {
        base: '642',
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

    LOGUE_FLOOR_BITMAP = {
        base: '654',
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

    BITMAPS_LOGUE = {
        [LOGUE_PLATFORM_KEY]: LOGUE_PLATFORM_BITMAP,
        [LOGUE_FLOOR_KEY]: LOGUE_FLOOR_BITMAP,
    }

export {
    BITMAPS_LOGUE
}
