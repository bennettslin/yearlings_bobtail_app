import {
    ACTORS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    FURNITURES
} from 'constants/scene'

import {
    CLUB_SIDE_CROWD_KEY,
    CLUB_SIDE_STAGE_KEY,
    LIZ_BED_KEY,
    CLUB_LOADING
} from '../../scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_INDOOR,
    SEASON_SUMMER
} from '../../scene/sky'

import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    TOMER,
    LIZ,
    AMY,
    AMY_STEPHANIE,
    STEPHANIE,
    WADE,
    BENNETT_REFLECTION,
    LIZ_REFLECTION
} from '../../scene/actorKeys'

import {
    SIDELONG_HESITANCE,
    REMOVING_SHOES,
    SHOES_REFLECTION
} from '../../scene/instanceKeys/bennett'

import {
    ASLEEP_REACHING,
    REACHING_REFLECTION
} from '../../scene/instanceKeys/liz'

import { SHANE_SPILLING } from '../../scene/instanceKeys/tomer'

import { WATCHING } from '../../scene/instanceKeys/wade'

import {
    SQUEEZING
} from '../../scene/instanceKeys/amyStephanie'

import {
    PERFORMING,
    FLIRTING,
    CARRYING,
    MINGLING,
    WAITING
} from '../../scene/instanceKeys/songs'

import {
    MONITOR_SIDE_CROWD,
    MONITOR_SIDE_STAGE,
    WALL_SPEAKER_SIDE_CROWD,
    WALL_SPEAKER_SIDE_STAGE
} from '../../scene/cutoutKeys'

import {
    STAGE_MIC_SIDE,
    KICK_DRUM,
    GUITAR_CASE_OPEN,
    BASS_CASE_SIDE,
    DRUMS_STACKED_CLUB,
    LIZ_PHONE,
    LIZ_PHONE_REFLECTION,
    BENNETT_SHOE,
    BENNETT_SHOE_REFLECTION
} from '../../scene/fixtureKeys'

import {
    CROWD_SIDE_FAR,
    CROWD_SIDE_NEAR
} from '../../scene/flatKeys'

import {
    LIZ_MATTRESS,
    LIZ_PILLOWS,
    LIZ_MATTRESS_REFLECTION,
    LIZ_PILLOWS_REFLECTION
} from '../../scene/furnitureKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is onstage performing with his band, a speech bubble showing the scene of Sita rejecting him. A redheaded woman is arriving late, and making her way through the crowd.`,
        presences: {
            [ACTORS]: {
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
                [AMY_STEPHANIE]: {
                    todo: true,
                    workedHours: 3,
                    compound: 2,
                    description: 'side, squeezing through, apologetic',
                    instance: SQUEEZING
                }
            },
            [CUTOUTS]: {
                [MONITOR_SIDE_CROWD]: true,
                [WALL_SPEAKER_SIDE_CROWD]: true
            },
            [FLATS]: {
                [CROWD_SIDE_FAR]: true,
                [CROWD_SIDE_NEAR]: true
            }
        },
        cubes: CLUB_SIDE_CROWD_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_INDOOR
        }
    },
    {
        unitIndex: 5,
        description: `After the show, Bennett is breaking down the set. Another band is setting up. The redhead has introduced herself to Bennett, and is flirting with him.`,
        presences: {
            [ACTORS]: {
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
            },
            [CUTOUTS]: {
                [MONITOR_SIDE_STAGE]: true,
                [WALL_SPEAKER_SIDE_STAGE]: true
            },
            [FIXTURES]: {
                [STAGE_MIC_SIDE]: true,
                [KICK_DRUM]: true,
                [GUITAR_CASE_OPEN]: true
            }
        },
        cubes: CLUB_SIDE_STAGE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_INDOOR
        }
    },
    {
        unitIndex: 8,
        description: `At the end of the show, Bennett and his bandmates are loading their equipment into their van. The redhead and her friends are looking in his direction, but Bennett walks by them.`,
        presences: {
            [ACTORS]: {
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
            },
            [FIXTURES]: {
                [BASS_CASE_SIDE]: true,
                [DRUMS_STACKED_CLUB]: true
            }
        },
        cubes: CLUB_LOADING,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 12,
        description: `Bennett is back home, sitting on the edge of Sita's bed. Sita is half asleep, looking peaceful, and is reaching towards him. He does not respond. In his thought bubble, he is reaching for the redhead, who is in bed in place of Sita.`,
        presences: {
            [ACTORS]: {
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
            },
            [FIXTURES]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true,
                [BENNETT_SHOE]: true,
                [BENNETT_SHOE_REFLECTION]: true
            },
            [FURNITURES]: {
                [LIZ_MATTRESS]: true,
                [LIZ_MATTRESS_REFLECTION]: true,
                [LIZ_PILLOWS]: true,
                [LIZ_PILLOWS_REFLECTION]: true
            }
        },
        cubes: LIZ_BED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    }
]
