import {
    DEFAULT_STAGE_KEY,
    LOGUE_KEY
} from './cubesKeys'

import {
    TEST_PATTERN_KEY
} from '../bitmaps/bitmapsKeys'

import {
    // a,
    // b,
    // c,
    // d,
    // e,
    // f,
    // g,
    // h,
    // i,
    // j,
    k,
    n,
    // LEFT,
    // RIGHT
} from './cubesConstants'

const

    DEFAULT_STAGE_CUBES = {
        ceiling: {
            zIndices: [
                [k]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        },
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        },
        presences: {}
    },

    LOGUE_CUBES = {
        ceiling: {
            zIndices: [
                [n]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        },
        floor: {
            zIndices: [
                [0],
                [0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0],
                [0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0],
                [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        },
        presences: {
            song0_scene0: {
                cubes1: {
                    actors: [
                        {
                            name: 'sample actor 1',
                            xIndex: 4,
                            width: 5,
                            height: 25
                        },
                        {
                            name: 'sample actor 2',
                            xIndex: 8,
                            width: 15,
                            height: 15
                        }
                    ],
                    cutouts: [
                        {
                            name: 'sample cutout 1',
                            xIndex: 2,
                            width: 5,
                            height: 25
                        },
                        {
                            name: 'sample cutout 2',
                            xIndex: 10,
                            width: 15,
                            height: 15
                        }
                    ],
                    fixtures: {
                        name: 'sample fixture 1',
                        xIndex: 6,
                        width: 5,
                        height: 25
                    }
                },
                cubes4: {
                    fixtures: [
                        {
                            name: 'sample fixture 4',
                            xIndex: 3,
                            width: 10,
                            height: 20
                        },
                        {
                            name: 'sample fixture 4',
                            xIndex: 7,
                            width: 20,
                            height: 10
                        },
                        {
                            name: 'sample fixture 4',
                            xOffset: -10,
                            yOffset: -40,
                            xIndex: 11,
                            width: 10,
                            height: 10
                        },
                    ]
                }
            }
        }
    },

    CUBES_STAGE = {
        [DEFAULT_STAGE_KEY]: DEFAULT_STAGE_CUBES,
        [LOGUE_KEY]: LOGUE_CUBES
    }

export {
    CUBES_STAGE
}
