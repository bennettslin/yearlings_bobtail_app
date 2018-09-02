import {
    EL_CERRITO_KEY,
    EL_CERRITO_CAR_KEY,
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'scene/sky'

import {
    BENNETT,
    MIRIAM
} from 'scene/actorKeys'

import {
    REMOVING_PANTS,
    INFIRM,
    DISPOSING_CONDOM
} from 'scene/instanceKeys/bennett'

import {
    PERFUMING,
    TENNIS,
    REVERSING
} from 'scene/instanceKeys/miriam'

import {
    COWGIRL,
    BLOWJOB
} from 'scene/instanceKeys/songs'

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
                    instance: REMOVING_PANTS
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'sitting in car, putting on perfume',
                    instance: PERFUMING
                }
            }
        },
        cubes: EL_CERRITO_CAR_KEY,
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
                    instance: COWGIRL
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'back angle, eyes closed, trying to get off',
                    instance: COWGIRL
                }
            }
        },
        cubes: EL_CERRITO_CAR_KEY,
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
                    instance: BLOWJOB
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'back angle, giving blowjob',
                    instance: BLOWJOB
                }
            }
        },
        cubes: EL_CERRITO_CAR_KEY,
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
                    instance: INFIRM
                }
            }
        },
        cubes: EL_CERRITO_DEATHBED_KEY,
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
                    instance: TENNIS
                }
            }
        },
        cubes: EL_CERRITO_TENNIS_KEY,
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
                    instance: DISPOSING_CONDOM
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, looking back, reversing car',
                    instance: REVERSING
                }
            }
        },
        cubes: EL_CERRITO_CAR_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 11,
        description: `The car is in the background.`,
        cubes: EL_CERRITO_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
