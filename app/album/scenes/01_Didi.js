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
                    arrangement: {
                        yIndex: 5,
                        xFloat: 4,
                        zOffset: 0,
                        xWidth: 1,
                        zHeight: 3
                    }
                },
                [ESTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, looking at Anita',
                    instance: CURIOUS,
                    arrangement: {
                        yIndex: 4,
                        xFloat: 3,
                        zOffset: 0,
                        xWidth: 1,
                        zHeight: 3
                    }
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, running, panicked',
                    instance: PANICKED,
                    arrangement: {
                        yIndex: 5,
                        xFloat: 8,
                        zOffset: 0,
                        xWidth: 1,
                        zHeight: 3
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
                    instance: 'test',
                    arrangement: {
                        yIndex: 5,
                        xFloat: 5,
                        zOffset: 0,
                        xWidth: 1,
                        zHeight: 3
                    }
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, flustered',
                    instance: 'test',
                    arrangement: {
                        yIndex: 5,
                        xFloat: 5,
                        zOffset: 0,
                        xWidth: 1,
                        zHeight: 3
                    }
                },
                [ESTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, skipping, pointing back and laughing',
                    instance: 'test',
                    arrangement: {
                        yIndex: 5,
                        xFloat: 5,
                        zOffset: 0,
                        xWidth: 1,
                        zHeight: 3
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
                    instance: 'test',
                    arrangement: {
                        yIndex: 5,
                        xFloat: 5,
                        zOffset: 0,
                        xWidth: 1,
                        zHeight: 3
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
                    instance: 'test',
                    arrangement: {
                        yIndex: 5,
                        xFloat: 5,
                        zOffset: 0,
                        xWidth: 1,
                        zHeight: 3
                    }
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, facing front, singing, smiling',
                    instance: 'test',
                    arrangement: {
                        yIndex: 5,
                        xFloat: 5,
                        zOffset: 0,
                        xWidth: 1,
                        zHeight: 3
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
