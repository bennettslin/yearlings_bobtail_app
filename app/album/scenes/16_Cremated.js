import {
    CREMATED_CLIFF_KEY,
    CREMATED_CLIFF_CONVERTIBLE_KEY,
    CREMATED_DEATHBED_KEY,
    CREMATED_DEATHBED_TENNIS_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'scene/sky'

import {
    BENNETT,
    MIRIAM
} from 'scene/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett and Miriam are sitting in her car.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting in car, taking off pants',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'sitting in car, putting on perfume',
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
        cubes: CREMATED_CLIFF_CONVERTIBLE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 3,
        description: `Bennett and Miriam are having sex in a car overlooking a cliff. Miriam is on top.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, impotent, apologetic',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'back angle, eyes closed, trying to get off',
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
        cubes: CREMATED_CLIFF_CONVERTIBLE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 5,
        description: `Miriam is now giving Bennett a blowjob. Meanwhile, they are both thinking a thought bubble in which they are now married. Their child is a pinhead.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, trying to get off',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'back angle, giving blowjob',
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
        cubes: CREMATED_CLIFF_CONVERTIBLE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: `In a thought bubble, Bennett is dying in a hospital bed next to a record player. In another thought bubble, Miriam is playing tennis.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, dying, infirm',
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
        cubes: CREMATED_DEATHBED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 8,
        description: `In the same scene, Miriam now appears in Bennett's thought bubble. She is playing tennis.`,
        presences: {
            actors: {
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'serving in tennis',
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
        cubes: CREMATED_DEATHBED_TENNIS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 9,
        description: `They drive away. Bennett, with his seat back, hesitantly drops the used condom on the ground, looking at it wistfully. Miriam is looking away, backing up the car.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'pensive, laying condom on ground',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, looking back, reversing car',
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
        cubes: CREMATED_CLIFF_CONVERTIBLE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 11,
        description: `The car is in the background.`,
        cubes: CREMATED_CLIFF_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
