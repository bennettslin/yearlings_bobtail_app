import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
} from '../../../../src/constants/scene/things'
import {
    CLUB_SIDE_CROWD_KEY,
    CLUB_SIDE_STAGE_KEY,
    LIZ_BED_DARK_KEY,
    CLUB_LOADING,
    CLUB_SIDE_CROWD_DARK_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    TIME_NIGHT,
    SEASON_SUMMER,
} from '../../../../src/constants/scene/sky'
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
    LIZ_REFLECTION,
} from '../../../../src/constants/scene/actors'
import {
    SIDELONG_HESITANCE,
    REMOVING_SHOES,
    SHOES_REFLECTION,
} from '../../../../src/constants/scene/actors/bennett'
import {
    ASLEEP_REACHING,
    REACHING_REFLECTION,
} from '../../../../src/constants/scene/actors/liz'
import { SHANE_SPILLING } from '../../../../src/constants/scene/actors/tomer'
import { WATCHING } from '../../../../src/constants/scene/actors/wade'
import { SQUEEZING } from '../../../../src/constants/scene/actors/amyStephanie'
import {
    PERFORMING,
    FLIRTING,
    CARRYING,
    MINGLING,
    WAITING,
} from '../../../../src/constants/scene/actors/songs'
import { OAKLAND_SIDE__LEVEL } from '../../../../src/constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__AMY,
    BUBBLE_MEDIUM__AMY,
    BUBBLE_LARGE__AMY,
    THOUGHT_AMY,
} from '../../../../src/constants/scene/things/bubbles'
import {
    MONITOR_SIDE__CROWD,
    MONITOR_SIDE__STAGE,
    WALL_SPEAKER_SIDE,
} from '../../../../src/constants/scene/things/cutouts'
import { CLUB_DOOR_OPEN } from '../../../../src/constants/scene/things/doors'
import {
    STAGE_MIC__CROWD,
    STAGE_MIC__STAGE,
    KICK_DRUM,
    DRUM_THRONE,
    GUITAR_CASE_OPEN,
    DRUMS_STACKED__CLUB,
    LIZ_PHONE,
    LIZ_PHONE_REFLECTION,
    BENNETT_SHOE,
    BENNETT_SHOE_REFLECTION,
} from '../../../../src/constants/scene/things/fixtures'
import { NEAR_BUILDINGS } from '../../../../src/constants/scene/things/flats'
import {
    LIZ_PILLOWS,
    LIZ_PILLOWS_REFLECTION,
} from '../../../../src/constants/scene/things/furnitures'
import {
    CROWD_SIDE,
    LIZ_BED,
    LIZ_NIGHTSTAND,
} from '../../../../src/constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Empty club.`,
        presences: {
            [CUTOUT]: {
                [MONITOR_SIDE__CROWD]: true,
            },
            [FIXTURE]: {
                [STAGE_MIC__CROWD]: true,
            },
        },
        cubes: CLUB_SIDE_CROWD_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER },
    },
    {
        unitIndex: 2,
        description: `Bennett is onstage performing with his band, a speech bubble showing the scene of Sita rejecting him. A redheaded woman is arriving late, and making her way through the crowd.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side angle, playing guitar, singing',
                    instance: PERFORMING,
                },
                [ANA]: {
                    description: 'side angle, playing bass, looking cool',
                    instance: PERFORMING,
                },
                [TOMER]: {
                    shane: {
                        description: 'side angle, holding beer, turning to make room',
                        instance: SHANE_SPILLING,
                    },
                },
                [WADE]: {
                    description: 'side, drinking beer',
                    instance: WATCHING,
                },
                [AMY_STEPHANIE]: {
                    description: 'side, squeezing through, apologetic',
                    instance: SQUEEZING,
                },
            },
            [CUTOUT]: {
                [MONITOR_SIDE__CROWD]: true,
            },
            [FIXTURE]: {
                [STAGE_MIC__CROWD]: true,
            },
            [PANEL]: {
                [CROWD_SIDE]: true,
            },
        },
        cubes: CLUB_SIDE_CROWD_DARK_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER },
    },
    {
        unitIndex: 6,
        description: `After the show, Bennett is breaking down the set. Another band is setting up. The redhead has introduced herself to Bennett, and is flirting with him.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side angle, charmed',
                    instance: FLIRTING,
                },
                [AMY]: {
                    description: 'side angle, same Mara pose',
                    instance: FLIRTING,
                },
                [JACOB]: {
                    description: 'side, walking, carrying drums, smiling at Mara',
                    instance: CARRYING,
                },
                [MARA]: {
                    description: 'side, walking, carrying cymbal, talking',
                    instance: CARRYING,
                },
            },
            [CUTOUT]: {
                [MONITOR_SIDE__STAGE]: true,
                [WALL_SPEAKER_SIDE]: true,
            },
            [FIXTURE]: {
                [STAGE_MIC__STAGE]: true,
                [KICK_DRUM]: true,
                [DRUM_THRONE]: true,
                [GUITAR_CASE_OPEN]: true,
            },
        },
        cubes: CLUB_SIDE_STAGE_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER },
    },
    {
        unitIndex: 9,
        description: `At the end of the show, Bennett and his bandmates are loading their equipment into their van. The redhead and her friends are looking in his direction, but Bennett walks by them.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, carrying gear, looking back, hesitant',
                    instance: SIDELONG_HESITANCE,
                },
                [ANA]: {
                    description: 'front, leaning against wall, waiting for Jacob',
                    instance: WAITING,
                },
                [MARA]: {
                    description: 'side angle, looking at watch',
                    instance: WAITING,
                },
                [AMY]: {
                    description: 'side, looking back, uncertain',
                    instance: MINGLING,
                },
                [STEPHANIE]: {
                    description: 'side angle, talking to Wade',
                    instance: MINGLING,
                },
                [WADE]: {
                    description: 'front, talking to Stephanie',
                    instance: MINGLING,
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [DOOR]: {
                [CLUB_DOOR_OPEN]: true,
            },
            [FIXTURE]: {
                [DRUMS_STACKED__CLUB]: true,
            },
            [FLAT]: {
                [NEAR_BUILDINGS]: true,
            },
        },
        cubes: CLUB_LOADING,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER },
    },
    {
        unitIndex: 12,
        description: `Bennett is back home, sitting on the edge of Sita's bed. Sita is half asleep, looking peaceful, and is reaching towards him. He does not respond. In his thought bubble, he is reaching for the redhead, who is in bed in place of Sita.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, sitting on edge of bed, discontented',
                    instance: REMOVING_SHOES,
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        description: 'reflection',
                        instance: SHOES_REFLECTION,
                    },
                },
                [LIZ]: {
                    sita: {
                        description: 'lying, reaching forward to touch Bennett',
                        instance: ASLEEP_REACHING,
                    },
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        description: 'reflection',
                        instance: REACHING_REFLECTION,
                    },
                },
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true,
                [BENNETT_SHOE]: true,
                [BENNETT_SHOE_REFLECTION]: true,
            },
            [FURNITURE]: {
                [LIZ_PILLOWS]: true,
                [LIZ_PILLOWS_REFLECTION]: true,
            },
            [PANEL]: {
                [LIZ_NIGHTSTAND]: true,
                [LIZ_BED]: true,
            },
        },
        cubes: LIZ_BED_DARK_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER },
    },
    {
        unitIndex: 13,
        description: `Bennett is back home, sitting on the edge of Sita's bed. Sita is half asleep, looking peaceful, and is reaching towards him. He does not respond. In his thought bubble, he is reaching for the redhead, who is in bed in place of Sita.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, sitting on edge of bed, discontented',
                    instance: REMOVING_SHOES,
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        description: 'reflection',
                        instance: SHOES_REFLECTION,
                    },
                },
                [LIZ]: {
                    sita: {
                        description: 'lying, reaching forward to touch Bennett',
                        instance: ASLEEP_REACHING,
                    },
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        description: 'reflection',
                        instance: REACHING_REFLECTION,
                    },
                },
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__AMY]: true,
                [BUBBLE_MEDIUM__AMY]: true,
                [BUBBLE_LARGE__AMY]: true,
                [THOUGHT_AMY]: true,
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true,
                [BENNETT_SHOE]: true,
                [BENNETT_SHOE_REFLECTION]: true,
            },
            [FURNITURE]: {
                [LIZ_PILLOWS]: true,
                [LIZ_PILLOWS_REFLECTION]: true,
            },
            [PANEL]: {
                [LIZ_NIGHTSTAND]: true,
                [LIZ_BED]: true,
            },
        },
        cubes: LIZ_BED_DARK_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER },
    },
]
