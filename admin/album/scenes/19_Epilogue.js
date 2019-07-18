import { ACTOR } from 'constants/scene'
import { LOGUE_KEY } from 'constants/scene/scenes'
import {
    BENNETTS_CHRISTOPHER_LIZ,
    ANITA_BENNETT,
    ESTHER,
    WILLY,
    MOTHER,
    FATHER,
    SASHA_BENNETT,
    BRAD,
    ANDREW,
    CATHERINE,
    MARA,
    JACOB,
    ANA,
    HOWIE,
    TOMER,
    KHARI,
    MIRIAM,
    TRISTAN,
    NESTOR,
    AMY,
    STEPHANIE,
    WADE
} from 'constants/scene/actors'
import { EPILOGUE } from 'constants/scene/actors/instances/songs'

export default [
    {
        verseIndex: 0,
        description: `Everyone is standing at the end of the play. We are all really just actors.`,
        presences: {
            [ACTOR]: {
                [BENNETTS_CHRISTOPHER_LIZ]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 4,
                    realHeight: `5'4", 3'5", 4'9"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ANITA_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    realHeight: `3'9", 3'6"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ESTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `3'10"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [WILLY]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'3"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'0"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'4"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `6'0"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'6"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [SASHA_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    realHeight: `4'1"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [BRAD]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `4'6"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `4'7"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'8"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `4'11"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [WADE]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'10"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [AMY]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'6"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [STEPHANIE]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'4"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [JACOB]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'11"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [MARA]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'0"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ANA]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'8"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.25,
                    realHeight: `5'1"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 4.25,
                    realHeight: `5'9"`,
                    description: 'standing',
                    instance: EPILOGUE
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3.75,
                    realHeight: `5'7"`,
                    description: 'standing',
                    instance: EPILOGUE
                }
            }
        },
        cubes: LOGUE_KEY
    }
]
