import { ACTORS } from 'constants/scene'

import { LOGUE_KEY } from '../../scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from '../../scene/sky'

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
} from '../../scene/actorKeys'

import { EPILOGUE } from '../../scene/instanceKeys/songs'

module.exports = [
    {
        verseIndex: 0,
        description: `Everyone is standing at the end of the play. We are all really just actors.`,
        presences: {
            [ACTORS]: {
                [OLD_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'4"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ANITA]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `3'9"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `3'6"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ESTHER]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `3'10"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [WILLY]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'3"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'0"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `3'5"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'2"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'4"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `6'0"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'6"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [SASHA]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'1"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [BRAD]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'6"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'7"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'8"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'4"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'11"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [WADE]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'10"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [AMY]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'6"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [STEPHANIE]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'4"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [JACOB]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'11"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [MARA]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'0"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'8"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `5'1"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [LIZ]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `4'9"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'9"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3,
                    realHeight: `5'7"`,
                    description: 'standing',
                    instance: EPILOGUE
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
