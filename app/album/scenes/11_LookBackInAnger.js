import {
    SHOW_STAGE_SIDE_1_KEY,
    SHOW_STAGE_SIDE_2_KEY,
    SITA_APARTMENT_BED_KEY,
    SHOW_UNLOADING_KEY
} from 'constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SUMMER
} from 'constants/sky'

import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    TOMER,
    LIZ,
    AMY,
    STEPHANIE,
    WADE,
    BENNETT_REFLECTION,
    LIZ_REFLECTION
} from 'constants/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is onstage performing with his band, a speech bubble showing the scene of Sita rejecting him. A redheaded woman is arriving late, and making her way through the crowd.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, playing guitar, singing'
            },
            [ANA]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, playing bass, looking cool'
            },
            [TOMER]: {
                shane: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, holding beer, turning to make room'
                }
            },
            [WADE]: {
                todo: true,
                workedHours: 3,
                description: 'side, drinking beer'
            },
            [AMY]: {
                todo: true,
                workedHours: 3,
                description: 'side, squeezing through, apologetic'
            },
            [STEPHANIE]: {
                todo: true,
                workedHours: 3,
                description: 'side, squeezing through, awkward'
            }
        },
        cubes: SHOW_STAGE_SIDE_1_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 5,
        description: `After the show, Bennett is breaking down the set. Another band is setting up. The redhead has introduced herself to Bennett, and is flirting with him.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, charmed'
            },
            [AMY]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, same Mara pose'
            },
            [JACOB]: {
                todo: true,
                workedHours: 3,
                description: 'side, walking, carrying drums, smiling at Mara'
            },
            [MARA]: {
                todo: true,
                workedHours: 3,
                description: 'side, walking, carrying cymbal, talking'
            }
        },
        cubes: SHOW_STAGE_SIDE_2_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 8,
        description: `At the end of the show, Bennett and his bandmates are loading their equipment into their van. The redhead and her friends are looking in his direction, but Bennett walks by them.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, carrying gear, looking back, hesitant'
            },
            [ANA]: {
                todo: true,
                workedHours: 3,
                description: 'front, leaning against wall, waiting for Jacob'
            },
            [MARA]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, looking at watch'
            },
            [AMY]: {
                todo: true,
                workedHours: 3,
                description: 'side, looking back, uncertain'
            },
            [STEPHANIE]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, talking to Wade'
            },
            [WADE]: {
                todo: true,
                workedHours: 3,
                description: 'front, talking to Stephanie'
            }
        },
        cubes: SHOW_UNLOADING_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 12,
        description: `Bennett is back home, sitting on the edge of Sita's bed. Sita is half asleep, looking peaceful, and is reaching towards him. He does not respond. In his thought bubble, he is reaching for the redhead, who is in bed in place of Sita.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, sitting on edge of bed, discontented'
            },
            [BENNETT_REFLECTION]: {
                reflection: {
                    todo: true,
                    workedHours: 3,
                    description: 'reflection'
                }
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'lying, reaching forward to touch Bennett'
                }
            },
            [LIZ_REFLECTION]: {
                reflection: {
                    todo: true,
                    workedHours: 3,
                    description: 'reflection'
                }
            }
        },
        cubes: SITA_APARTMENT_BED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    }
]
