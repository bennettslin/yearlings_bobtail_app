const
    _000 = '000',
    _fff = 'fff',
    _f00 = 'f00',
    _0f0 = '0f0',
    _00f = '00f',
    _f0f = 'f0f',

    TEST_PATTERN_BITMAP = 'TEST_PATTERN_BITMAP'

module.exports = {

    TEST_PATTERN_BITMAP,

    BITMAPS: {
        [TEST_PATTERN_BITMAP]: [
            [_f00, _000, _fff, _000, _fff, _000, _fff, _0f0],
            [_000, _fff, _000, _fff, _000, _fff, _000, _fff],
            [_fff, _000, _fff, _000, _fff, _000, _fff, _000],
            [_000, _fff, _000, _fff, _000, _fff, _000, _fff],
            [_fff, _000, _fff, _000, _fff, _000, _fff, _000],
            [_000, _fff, _000, _fff, _000, _fff, _000, _fff],
            [_fff, _000, _fff, _000, _fff, _000, _f0f, _f0f],
            [_00f, _fff, _000, _fff, _000, _fff, _f0f, _f0f]
        ]
    }
}
