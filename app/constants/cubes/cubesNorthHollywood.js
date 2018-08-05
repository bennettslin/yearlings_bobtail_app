import {
    NORTH_HOLLYWOOD_HOUSES_KEY
} from '../cubesKeys'

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
            ]
        },
        presences: {
            song1_scene0: {
                cubes0: {
                    cutouts: {
                        name: 'northHollywoodBackddrop',
                        xFloat: 5.5,
                        xWidth: 12,
                        zHeight: 2
                    }
                },
                cubes1: {
                    cutouts: [
                        {
                            name: 'northHollywoodHouse1',
                            xFloat: 2,
                            xWidth: 3,
                            zHeight: 3
                        },
                        {
                            name: 'northHollywoodHouse2',
                            xFloat: 9,
                            xWidth: 2,
                            zHeight: 3
                        }
                    ]
                }
            },
            song1_scene1: {
                cubes0: {
                    cutouts: {
                        name: 'northHollywoodBackddrop',
                        xFloat: 5.5,
                        xWidth: 12,
                        zHeight: 2
                    }
                },
                cubes1: {
                    cutouts: [
                        {
                            name: 'northHollywoodHouse1',
                            xFloat: 2,
                            xWidth: 3,
                            zHeight: 3
                        },
                        {
                            name: 'northHollywoodHouse2',
                            xFloat: 9,
                            xWidth: 2,
                            zHeight: 3
                        }
                    ]
                },
                cubes4: {
                    actors: {
                        name: 'esther',
                        xFloat: 3,
                        xWidth: 1,
                        zHeight: 3
                    }
                },
                cubes5: {
                    actors: [
                        {
                            name: 'anita',
                            xFloat: 4,
                            xWidth: 1,
                            zHeight: 3
                        },
                        {
                            name: 'youngBennett',
                            xFloat: 8,
                            xWidth: 1,
                            zHeight: 3
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
