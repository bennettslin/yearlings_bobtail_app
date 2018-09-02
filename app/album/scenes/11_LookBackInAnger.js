import {
    SHOW_STAGE_SIDE_1_KEY,
    SHOW_STAGE_SIDE_2_KEY,
    SITA_APARTMENT_BED_KEY,
    SHOW_UNLOADING_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SUMMER
} from 'scene/sky'

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
} from 'scene/actorKeys'

import {
    SIDELONG_HESITANCE,
    REMOVING_SHOES,
    SHOES_REFLECTION
} from 'scene/instanceKeys/bennett'

import {
    ASLEEP_REACHING,
    REACHING_REFLECTION
} from 'scene/instanceKeys/liz'

import { SHANE_SPILLING } from 'scene/instanceKeys/tomer'

import { WATCHING } from 'scene/instanceKeys/wade'

import {
    PERFORMING,
    SQUEEZING,
    FLIRTING,
    CARRYING,
    MINGLING,
    WAITING,
} from 'scene/instanceKeys/songs'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is onstage performing with his band, a speech bubble showing the scene of Sita rejecting him. A redheaded woman is arriving late, and making her way through the crowd.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, playing guitar, singing',
                    instance: PERFORMING
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, playing bass, looking cool',
                    instance: PERFORMING
                },
                [TOMER]: {
                    shane: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, holding beer, turning to make room',
                        instance: SHANE_SPILLING
                    }
                },
                [WADE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, drinking beer',
                    instance: WATCHING
                },
                [AMY]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, squeezing through, apologetic',
                    instance: SQUEEZING
                },
                [STEPHANIE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, squeezing through, awkward',
                    instance: SQUEEZING
                }
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
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, charmed',
                    instance: FLIRTING
                },
                [AMY]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, same Mara pose',
                    instance: FLIRTING
                },
                [JACOB]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking, carrying drums, smiling at Mara',
                    instance: CARRYING
                },
                [MARA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking, carrying cymbal, talking',
                    instance: CARRYING
                }
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
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, carrying gear, looking back, hesitant',
                    instance: SIDELONG_HESITANCE
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, leaning against wall, waiting for Jacob',
                    instance: WAITING
                },
                [MARA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, looking at watch',
                    instance: WAITING
                },
                [AMY]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, looking back, uncertain',
                    instance: MINGLING
                },
                [STEPHANIE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, talking to Wade',
                    instance: MINGLING
                },
                [WADE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, talking to Stephanie',
                    instance: MINGLING
                }
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
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, sitting on edge of bed, discontented',
                    instance: REMOVING_SHOES
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: SHOES_REFLECTION
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'lying, reaching forward to touch Bennett',
                        instance: ASLEEP_REACHING
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: REACHING_REFLECTION
                    }
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
