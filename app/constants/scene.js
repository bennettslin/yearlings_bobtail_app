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
    BACKDROPS = 'backdrops',
    BUBBLES = 'bubbles',
    CUTOUTS = 'cutouts',
    DOORS = 'doors',
    FIXTURES = 'fixtures',
    FLATS = 'flats',
    FURNITURES = 'furnitures',
    PANELS = 'panels',
    PUPPETS = 'puppets'

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
    BACKDROPS,
    BUBBLES,
    CUTOUTS,
    DOORS,
    FIXTURES,
    FLATS,
    FURNITURES,
    PANELS,
    PUPPETS,
    PRESENCE_TYPES: [
        ACTORS,
        BACKDROPS,
        BUBBLES,
        CUTOUTS,
        DOORS,
        FIXTURES,
        FLATS,
        FURNITURES,
        PANELS,
        PUPPETS
    ],

    Z_INDICES_MATRIX_NAME,
    HSLA_MATRIX_NAME
}
