const
    _000 = '000',
    _fff = 'fff',
    _f00 = 'f00',
    _0d0 = '0d0',
    _44f = '44f',
    _f0f = 'f0f',

    TEST_PATTERN_BITMAP = 'TEST_PATTERN_BITMAP'

module.exports = {

    TEST_PATTERN_BITMAP,

    BITMAPS: {
        [TEST_PATTERN_BITMAP]: {
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
        }
    }
}
