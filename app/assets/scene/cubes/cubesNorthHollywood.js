import {
    NORTH_HOLLYWOOD_HOUSES_KEY
} from './cubesKeys'

import {
    NORTH_HOLLYWOOD_LAWN_KEY,
    SIDEWALK_KEY
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
    // k,
    // n,
    // LEFT,
    // RIGHT
} from './cubesConstants'

const

    CHILDHOOD_NEIGHBOURHOOD_CUBES = {
        floor: {
            zIndices: [
                [1],
                [1],
                [1],
                [1],
                [1],
                [1]
            ],
            bitmapKeys: [
                [NORTH_HOLLYWOOD_LAWN_KEY],
                [NORTH_HOLLYWOOD_LAWN_KEY],
                [NORTH_HOLLYWOOD_LAWN_KEY],
                [NORTH_HOLLYWOOD_LAWN_KEY],
                [SIDEWALK_KEY],
                [SIDEWALK_KEY]
            ]
        },
        presences: {
            song1_scene0: {
                cubes0: {
                    cutouts: {
                        name: 'northHollywoodBackddrop',
                        xFloat: 5.5,
                        width: 12,
                        height: 2
                    }
                },
                cubes1: {
                    cutouts: [
                        {
                            name: 'northHollywoodHouse1',
                            xFloat: 2,
                            width: 3,
                            height: 3
                        },
                        {
                            name: 'northHollywoodHouse2',
                            xFloat: 9,
                            width: 2,
                            height: 3
                        }
                    ]
                }
            },
            song1_scene1: {
                cubes0: {
                    cutouts: {
                        name: 'northHollywoodBackddrop',
                        xFloat: 5.5,
                        width: 12,
                        height: 2
                    }
                },
                cubes1: {
                    cutouts: [
                        {
                            name: 'northHollywoodHouse1',
                            xFloat: 2,
                            width: 3,
                            height: 3
                        },
                        {
                            name: 'northHollywoodHouse2',
                            xFloat: 9,
                            width: 2,
                            height: 3
                        }
                    ]
                },
                cubes4: {
                    actors: {
                        name: 'esther',
                        xFloat: 3,
                        width: 1,
                        height: 3
                    }
                },
                cubes5: {
                    actors: [
                        {
                            name: 'anita',
                            xFloat: 4,
                            width: 1,
                            height: 3
                        },
                        {
                            name: 'youngBennett',
                            xFloat: 8,
                            width: 1,
                            height: 3
                        }
                    ]
                }
            }
        }
    },

    CUBES_NORTH_HOLLYWOOD = {
        [NORTH_HOLLYWOOD_HOUSES_KEY]: CHILDHOOD_NEIGHBOURHOOD_CUBES
    }

export {
    CUBES_NORTH_HOLLYWOOD
}
