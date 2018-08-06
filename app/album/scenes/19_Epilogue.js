import { LOGUE_KEY } from 'constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from 'constants/sky'

import {
    YOUNG_BENNETT,
    PRETEEN_BENNETT,
    BENNETT,
    OLD_BENNETT,
    ANITA,
    ESTHER,
    WILLY,
    MOTHER,
    FATHER,
    CHRISTOPHER,
    SASHA,
    BRAD,
    ANDREW,
    CATHERINE,
    MARA,
    JACOB,
    ANA,
    HOWIE,
    TOMER,
    LIZ,
    KHARI,
    MIRIAM,
    TRISTAN,
    NESTOR,
    AMY,
    STEPHANIE,
    WADE
} from 'constants/actorKeys'

module.exports = [
    {
        verseIndex: 0,
        description: 'Everyone is standing at the end of the play. We are all really just actors.',
        presences: {
            actors: {
                [OLD_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'4"`,
                    description: 'standing'
                },
                [ANITA]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `3'9"`,
                    description: 'standing'
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `3'6"`,
                    description: 'standing'
                },
                [ESTHER]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `3'10"`,
                    description: 'standing'
                },
                [WILLY]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'3"`,
                    description: 'standing'
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'0"`,
                    description: 'standing'
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `3'5"`,
                    description: 'standing'
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'2"`,
                    description: 'standing'
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'4"`,
                    description: 'standing'
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `6'0"`,
                    description: 'standing'
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'6"`,
                    description: 'standing'
                },
                [SASHA]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'1"`,
                    description: 'standing'
                },
                [BRAD]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'6"`,
                    description: 'standing'
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'7"`,
                    description: 'standing'
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'8"`,
                    description: 'standing'
                },
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'4"`,
                    description: 'standing'
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'11"`,
                    description: 'standing'
                },
                [WADE]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'10"`,
                    description: 'standing'
                },
                [AMY]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'6"`,
                    description: 'standing'
                },
                [STEPHANIE]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'4"`,
                    description: 'standing'
                },
                [JACOB]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'11"`,
                    description: 'standing'
                },
                [MARA]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'0"`,
                    description: 'standing'
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'8"`,
                    description: 'standing'
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `5'1"`,
                    description: 'standing'
                },
                [LIZ]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'9"`,
                    description: 'standing'
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'9"`,
                    description: 'standing'
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'7"`,
                    description: 'standing'
                }
            }
        },
        cubes: LOGUE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_INDOOR
        }
    }
]
