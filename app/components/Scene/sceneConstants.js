const
    LEFT = 'left',
    RIGHT = 'right',

    TILE = 'tile',
    SIDE = 'side',
    FRONT = 'front',

    CEILING = 'ceiling',
    FLOOR = 'floor',

    Z_INDICES_MATRIX_NAME = 'zIndices',
    HSLA_MATRIX_NAME = 'hslaColours',

    ACTORS = 'actors',
    CUTOUTS = 'cutouts',
    FIXTURES = 'fixtures'

module.exports = {

    LEFT,
    RIGHT,
    SLANT_DIRECTIONS: [
        '',
        LEFT,
        RIGHT
    ],

    CEILING,
    FLOOR,
    LEVELS: [
        CEILING,
        FLOOR
    ],

    TILE,
    SIDE,
    FRONT,
    FACES: [
        TILE,
        SIDE,
        FRONT
    ],

    ACTORS,
    CUTOUTS,
    FIXTURES,

    PRESENCE_TYPES: [
        ACTORS,
        CUTOUTS,
        FIXTURES
    ],

    Z_INDICES_MATRIX_NAME,
    HSLA_MATRIX_NAME
}
