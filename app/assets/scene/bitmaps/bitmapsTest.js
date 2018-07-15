import {
    NULL_KEY,
    TEST_KEY
} from './bitmapsKeys'

import {
    _000,
    _fff,
    _f00,
    _0d0,
    _44f,
    _f0f,
} from './bitmapsConstants'

const

    NULL_BITMAP = {
        base: null,
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

    TEST_BITMAP = {
        base: _fff,
        pixels: [
            [_f00, _f00, null, _000, null, _000, _0d0, _0d0],
            [_f00, _f00, _000, null, _000, null, _0d0, _0d0],
            [null, _000, null, _000, null, _000, null, _000],
            [_000, null, _000, null, _000, null, _000, null],
            [null, _000, null, _000, null, _000, null, _000],
            [_000, null, _000, null, _000, null, _000, null],
            [_44f, _44f, null, _000, null, _000, _f0f, _f0f],
            [_44f, _44f, _000, null, _000, null, _f0f, _f0f]
        ]
    },

    BITMAPS_TEST = {
        [NULL_KEY]: NULL_BITMAP,
        [TEST_KEY]: TEST_BITMAP
    }

export {
    BITMAPS_TEST
}
