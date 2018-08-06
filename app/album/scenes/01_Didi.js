import {
    CHILDHOOD_BATHROOM_KEY,
    NORTH_HOLLYWOOD_HOUSES_KEY,
    PLAYGROUND_KEY
} from 'constants/cubesKeys'

import {
    TIME_DAWN,
    TIME_MORNING,
    TIME_NOON,
    TIME_AFTERNOON,
    TIME_EVENING,
    SEASON_SPRING
} from 'constants/sky'

import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from 'constants/actorKeys'

import {
    NORTH_HOLLYWOOD_NEIGHBOURHOOD,
    NORTH_HOLLYWOOD_HOUSE_LEFT,
    NORTH_HOLLYWOOD_HOUSE_RIGHT
} from 'constants/cutoutKeys'

import {
    FIRE_HYDRANT
} from 'constants/fixtureKeys'

import {
    PANICKED
} from 'constants/actors/youngBennett'

import {
    EXASPERATED
} from 'constants/actors/anita'

import {
    CURIOUS
} from 'constants/actors/esther'

module.exports = [
    {
        unitIndex: 1,
        description: `North Hollywood houses.`,
        cubes: NORTH_HOLLYWOOD_HOUSES_KEY,
        sky: {
            time: TIME_DAWN,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 3,
        description: `It's a schoolday morning. Young Anita walks with hurried determination out of the house. Young Bennett rushes after her in panic, his jacket half on and clutching a knapsack.`,
        presences: {
            actors: {
                [ANITA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, rushing, exasperated',
                    instance: EXASPERATED,
                    yIndex: 5,
                    arrangement: {
                        xFloat: 4,
                        xWidth: 1,
                        zHeight: 3
                    }
                },
                [ESTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, looking at Anita',
                    instance: CURIOUS,
                    yIndex: 4,
                    arrangement: {
                        xFloat: 3,
                        xWidth: 1,
                        zHeight: 3
                    }
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, running, panicked',
                    instance: PANICKED,
                    yIndex: 5,
                    arrangement: {
                        xFloat: 8,
                        xWidth: 1,
                        zHeight: 3
                    }
                }
            },
            cutouts: {
                [NORTH_HOLLYWOOD_NEIGHBOURHOOD]: {
                    yIndex: 0,
                    arrangement: {
                        xFloat: 5.5,
                        xWidth: 12,
                        zHeight: 3
                    }
                },
                [NORTH_HOLLYWOOD_HOUSE_LEFT]: {
                    yIndex: 1,
                    arrangement: {
                        xFloat: 3,
                        xWidth: 3,
                        zHeight: 3
                    }
                },
                [NORTH_HOLLYWOOD_HOUSE_RIGHT]: {
                    yIndex: 1,
                    arrangement: {
                        xFloat: 9,
                        xWidth: 3,
                        zHeight: 3
                    }
                },
            },
            fixtures: {
                [FIRE_HYDRANT]: {
                    yIndex: 5,
                    arrangement: {
                        xFloat: 2,
                        xWidth: 1,
                        zHeight: 2
                    }
                }
            }
        },
        cubes: NORTH_HOLLYWOOD_HOUSES_KEY,
        sky: {
            time: TIME_MORNING,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 6,
        description: `Bennett looks sheepish, seated on a bench in the hallway outside the nurse's office, wearing oversized overalls. Beside him is a sealed grocery bag. Outside, a young girl tells the playground about this. Anita overhears and looks upset.`,
        presences: {
            actors: {
                [ANITA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, playing ball, offended',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, flustered',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [ESTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, skipping, pointing back and laughing',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                }
            }
        },
        cubes: PLAYGROUND_KEY,
        sky: {
            time: TIME_NOON,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 8,
        description: `Bennett is soaking in a bathtub at home, looking downcast. A window shows that it is midday outside.`,
        presences: {
            actors: {
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, in bathtub, downcast',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                }
            }
        },
        cubes: CHILDHOOD_BATHROOM_KEY,
        sky: {
            time: TIME_AFTERNOON,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 12,
        description: `The same scene. Anita is now crouched beside the bathtub. She has brought a phonograph and placed it on a chair. Bennett is still in the bathtub, now happily singing along, wearing a cowboy hat.`,
        presences: {
            actors: {
                [ANITA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, squatting, smiling',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, facing front, singing, smiling',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                }
            }
        },
        cubes: CHILDHOOD_BATHROOM_KEY,
        sky: {
            time: TIME_EVENING,
            season: SEASON_SPRING
        }
    }
]
