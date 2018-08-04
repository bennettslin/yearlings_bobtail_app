import {
    DEFAULT_STAGE_KEY,
    LOGUE_KEY
} from './cubesKeys'

import {
    NULL_KEY,
    LOGUE_FLOOR_KEY,
    LOGUE_PLATFORM_KEY
} from '../bitmaps/bitmapsKeys'

import {
    k
} from './cubesConstants'

const

    _NL = NULL_KEY,
    _FL = LOGUE_FLOOR_KEY,
    _PL = LOGUE_PLATFORM_KEY,

    DEFAULT_STAGE_CUBES = {
        ceiling: {
            zIndices: [
                [k]
            ],
            bitmapKeys: [
                [_NL]
            ]
        },
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [_FL]
            ]
        },
        presences: {}
    },

    LOGUE_CUBES = {
        floor: {
            zIndices: [
                [0],
                [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
                [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ],
            bitmapKeys: [
                [_FL],
                [_FL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _FL],
                [_FL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _FL],
                [_FL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _FL],
                [_FL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _PL, _FL],
                [_FL]
            ]
        },
        presences: {
            song0_scene0: {
                cubes3: {
                    actors: {
                        name: 'oldBennett',
                        xFloat: 5.5,
                        xWidth: 1,
                        zHeight: 5
                    }
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
