import { LOGUE_KEY } from '../constants/cubesKeys'
import { TIME_ANYTIME,
         SEASON_INDOOR } from '../constants/sky'

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
} from '../constants/actorKeys'

module.exports = {
    logue: true,
    title: 'epilogue',
    scenes: [
        {
            verseIndex: 0,
            description: 'Everyone is standing at the end of the play. We are all really just actors.',
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
                    description: 'standing',
                    subtasks: [
                        {
                            taskName: `food tray`,
                            workedHours: 0,
                            neededHours: 1
                        },
                        {
                            taskName: `lancet pen`,
                            workedHours: 0,
                            neededHours: 1
                        }
                    ]
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
                    description: 'standing',
                    subtasks: [
                        {
                            // INSTRUMENT
                            taskName: `recording microphone`,
                            workedHours: 0,
                            neededHours: 1
                        }
                    ]
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
            },
            cubes: LOGUE_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_INDOOR
            }
        }
    ],
    overview: `Thanks for listening! It really means a lot. So what do I hope to gain by putting up this website, thirteen years after the album's original release? In short, I'm looking for help. The truth is, I never stopped wanting it, whether in the form of a straightforward record deal, or through some modern arrangement devised by forward-thinking Millennials. In 2006, so many indie labels rejected me, fearing that, while I seemed fully determined to create this century's best rock albums, I wouldn't lift a finger to promote myself if left on my own. Their fears were correct, and now in 2019, I'm doubling down on my convictions. Interdependence was the reason for rock music's great past. Why wouldn't it hold the key to a better future?`,
    tasks: [
        {
            taskName: `overview`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `rough illustration synopsis`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `review rough illustrations, including consolidating characters`,
            workedHours: 2,
            neededHours: 2
        },
    ]
}
