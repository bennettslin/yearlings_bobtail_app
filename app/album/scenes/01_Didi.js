import {
    NOHO_BATHROOM_KEY,
    NOHO_NEIGHBOURHOOD_KEY,
    NOHO_SCHOOL_KEY
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
    PANICKED,
    FLUSTERED
} from 'constants/actors/youngBennett'

import {
    EXASPERATED,
    CONCERNED
} from 'constants/actors/anita'

import {
    CURIOUS,
    SNICKERING
} from 'constants/actors/esther'

import {
    NOHO_NEIGHBOURHOOD,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOL_NEIGHBOURHOOD,
    NOHO_SCHOOLHOUSE,
    NURSE_OFFICE_BUBBLE
} from 'constants/cutoutKeys'

import {
    FIRE_HYDRANT,
    PLAYGROUND_BALL,
    PLAYGROUND_SLIDE
} from 'constants/fixtureKeys'

const
CUTOUTS_0_AND_1 = {
    [NOHO_NEIGHBOURHOOD]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [NOHO_HOUSE_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
            zHeight: 3
        }
    },
    [NOHO_HOUSE_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 9,
            xWidth: 5,
            zHeight: 3
        }
    },
},
FIXTURES_0_AND_1 = {
    [FIRE_HYDRANT]: {
        yIndex: 5,
        arrangement: {
            xFloat: 1,
            xWidth: 1,
            zHeight: 2
        }
    }
}

module.exports = [
    {
        unitIndex: 1,
        description: `North Hollywood houses.`,
        presences: {
            cutouts: CUTOUTS_0_AND_1,
            fixtures: FIXTURES_0_AND_1
        },
        cubes: NOHO_NEIGHBOURHOOD_KEY,
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
                [ESTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, looking at Anita',
                    instance: CURIOUS,
                    yIndex: 4,
                    arrangement: {
                        xFloat: 3.5,
                        xWidth: 1,
                        zHeight: 3.83
                    }
                },
                [ANITA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, rushing, exasperated',
                    instance: EXASPERATED,
                    yIndex: 5,
                    arrangement: {
                        xFloat: 5,
                        xWidth: 1,
                        zHeight: 3.75
                    }
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, running, panicked',
                    instance: PANICKED,
                    yIndex: 5,
                    arrangement: {
                        xFloat: 9,
                        xWidth: 1,
                        zHeight: 3.5
                    }
                }
            },
            cutouts: CUTOUTS_0_AND_1,
            fixtures: FIXTURES_0_AND_1
        },
        cubes: NOHO_NEIGHBOURHOOD_KEY,
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
                    instance: CONCERNED,
                    yIndex: 3,
                    arrangement: {
                        xFloat: 2,
                        xWidth: 1,
                        zHeight: 3.75
                    }
                },
                [ESTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, skipping, pointing back and laughing',
                    instance: SNICKERING,
                    yIndex: 4,
                    arrangement: {
                        xFloat: 4,
                        xWidth: 1,
                        zHeight: 3.83
                    }
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, flustered',
                    instance: FLUSTERED,
                    yIndex: 4,
                    arrangement: {
                        xFloat: 8.5,
                        xWidth: 1.5,
                        zHeight: 2.5,
                        zOffset: -2
                    }
                }
            },
            cutouts: {
                [NOHO_SCHOOL_NEIGHBOURHOOD]: {
                    yIndex: 0,
                    arrangement: {
                        xFloat: 5.5,
                        xWidth: 12,
                        zHeight: 4
                    }
                },
                [NOHO_SCHOOLHOUSE]: {
                    yIndex: 1,
                    arrangement: {
                        xFloat: 2,
                        xWidth: 5,
                        zHeight: 3
                    }
                },
                [NURSE_OFFICE_BUBBLE]: {
                    yIndex: 2,
                    arrangement: {
                        xFloat: 8,
                        xWidth: 5,
                        zHeight: 4
                    }
                }
            },
            fixtures: {
                [PLAYGROUND_BALL]: {
                    yIndex: 4,
                    arrangement: {
                        xFloat: 2,
                        xWidth: 1,
                        zHeight: 1,
                        zOffset: 2
                    }
                },
                [PLAYGROUND_SLIDE]: {
                    yIndex: 1,
                    arrangement: {
                        xFloat: 4,
                        xWidth: 2,
                        zHeight: 3
                    }
                }
            }
        },
        cubes: NOHO_SCHOOL_KEY,
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
        cubes: NOHO_BATHROOM_KEY,
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
        cubes: NOHO_BATHROOM_KEY,
        sky: {
            time: TIME_EVENING,
            season: SEASON_SPRING
        }
    }
]
