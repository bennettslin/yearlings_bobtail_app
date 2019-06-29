import {
    ACTOR,
    CUTOUT,
    FIXTURE,
    PANEL
} from 'constants/scene'

import {
    CLUB_SIDE_CROWD_KEY,
    CLUB_SIDE_STAGE_KEY,
    LIZ_BED_KEY,
    CLUB_LOADING
} from '../../constants/scene/scenes'

import {
    TIME_ANYTIME,
    SEASON_INDOOR,
    SEASON_SUMMER
} from '../../scene/sky/keys'

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
} from '../../constants/scene/actors'

import {
    SIDELONG_HESITANCE,
    REMOVING_SHOES,
    SHOES_REFLECTION
} from '../../constants/scene/actors/instances/bennett'

import {
    ASLEEP_REACHING,
    REACHING_REFLECTION
} from '../../constants/scene/actors/instances/liz'

import { SHANE_SPILLING } from '../../constants/scene/actors/instances/tomer'

import { WATCHING } from '../../constants/scene/actors/instances/wade'

import {
    SQUEEZING
} from '../../constants/scene/actors/instances/amyStephanie'

import {
    PERFORMING,
    FLIRTING,
    CARRYING,
    MINGLING,
    WAITING
} from '../../constants/scene/actors/instances/songs'

import {
    MONITOR_SIDE_CROWD,
    MONITOR_SIDE_STAGE,
    WALL_SPEAKER_SIDE_CROWD,
    WALL_SPEAKER_SIDE_STAGE
} from '../../constants/scene/things/cutouts'

import {
    STAGE_MIC_SIDE_CROWD,
    STAGE_MIC_SIDE_STAGE,
    KICK_DRUM,
    DRUM_THRONE,
    GUITAR_CASE_OPEN,
    DRUMS_STACKED_CLUB,
    LIZ_PHONE,
    LIZ_PHONE_REFLECTION,
    BENNETT_SHOE,
    BENNETT_SHOE_REFLECTION
} from '../../constants/scene/things/fixtures'

import {
    CROWD_FAR_SIDE,
    CROWD_NEAR_SIDE,
    LIZ_BED
} from '../../constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett is onstage performing with his band, a speech bubble showing the scene of Sita rejecting him. A redheaded woman is arriving late, and making her way through the crowd.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, playing guitar, singing',
                    instance: PERFORMING
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'side angle, playing bass, looking cool',
                    instance: PERFORMING
                },
                [TOMER]: {
                    shane: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'side angle, holding beer, turning to make room',
                        instance: SHANE_SPILLING
                    }
                },
                [WADE]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, drinking beer',
                    instance: WATCHING
                },
                [AMY_STEPHANIE]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    description: 'side, squeezing through, apologetic',
                    instance: SQUEEZING
                }
            },
            [CUTOUT]: {
                [MONITOR_SIDE_CROWD]: true,
                [WALL_SPEAKER_SIDE_CROWD]: true
            },
            [FIXTURE]: {
                [STAGE_MIC_SIDE_CROWD]: true
            },
            [PANEL]: {
                [CROWD_FAR_SIDE]: true,
                [CROWD_NEAR_SIDE]: true
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
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, charmed',
                    instance: FLIRTING
                },
                [AMY]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, same Mara pose',
                    instance: FLIRTING
                },
                [JACOB]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, walking, carrying drums, smiling at Mara',
                    instance: CARRYING
                },
                [MARA]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'side, walking, carrying cymbal, talking',
                    instance: CARRYING
                }
            },
            [CUTOUT]: {
                [MONITOR_SIDE_STAGE]: true,
                [WALL_SPEAKER_SIDE_STAGE]: true
            },
            [FIXTURE]: {
                [STAGE_MIC_SIDE_STAGE]: true,
                [KICK_DRUM]: true,
                [DRUM_THRONE]: true,
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
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, carrying gear, looking back, hesitant',
                    instance: SIDELONG_HESITANCE
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'front, leaning against wall, waiting for Jacob',
                    instance: WAITING
                },
                [MARA]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'side angle, looking at watch',
                    instance: WAITING
                },
                [AMY]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, looking back, uncertain',
                    instance: MINGLING
                },
                [STEPHANIE]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, talking to Wade',
                    instance: MINGLING
                },
                [WADE]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'front, talking to Stephanie',
                    instance: MINGLING
                }
            },
            [FIXTURE]: {
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
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, sitting on edge of bed, discontented',
                    instance: REMOVING_SHOES
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'reflection',
                        instance: SHOES_REFLECTION
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'lying, reaching forward to touch Bennett',
                        instance: ASLEEP_REACHING
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'reflection',
                        instance: REACHING_REFLECTION
                    }
                }
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true,
                [BENNETT_SHOE]: true,
                [BENNETT_SHOE_REFLECTION]: true
            },
            [PANEL]: {
                [LIZ_BED]: true
            }
        },
        cubes: LIZ_BED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    }
]
