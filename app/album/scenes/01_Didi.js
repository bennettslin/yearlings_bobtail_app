import {
    ACTOR,
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL
} from 'constants/scene'
import {
    NOHO_HOUSES_KEY,
    NOHO_SCHOOL_KEY,
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY
} from '../../constants/scene/scenes'
import {
    TIME_ANYTIME,
    TIME_DAWN,
    TIME_MORNING,
    TIME_NOON,
    TIME_AFTERNOON,
    SEASON_SPRING
} from '../../scene/sky/keys'
import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from '../../constants/scene/actors'
import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING
} from '../../constants/scene/actors/instances/youngBennett'
import {
    EXASPERATED,
    CONCERNED,
    CHEERING
} from '../../constants/scene/actors/instances/anita'
import {
    CURIOUS,
    SNICKERING
} from '../../constants/scene/actors/instances/esther'
import {
    NOHO_HOUSES_BACKDROP,
    SCHOOL_BACKDROP
} from '../../constants/scene/things/backdrops'
import { JOHNNY_HORTON_ALBUM } from '../../constants/scene/things/cardboards'
import {
    FIRE_HYDRANT,
    PLAYGROUND_SLIDE,
    MIRRORED_SINK,
    TOWEL_RACK
} from '../../constants/scene/things/cutouts'
import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG,
    RECORD_PLAYER_STOOL
} from '../../constants/scene/things/fixtures'
import {
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOLHOUSE
} from '../../constants/scene/things/flats'
import {
    ESTHER_SPEECH_PANEL,
    BATHTUB
} from '../../constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `North Hollywood houses.`,
        presences: {
            [BACKDROP]: {
                [NOHO_HOUSES_BACKDROP]: true
            },
            [CUTOUT]: {
                [FIRE_HYDRANT]: true
            },
            [FLAT]: {
                [NOHO_HOUSE_LEFT]: true,
                [NOHO_HOUSE_RIGHT]: true
            }
        },
        cubes: NOHO_HOUSES_KEY,
        sky: {
            time: TIME_DAWN,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 3,
        description: `It's a schoolday morning. Young Anita walks with hurried determination out of the house. Young Bennett rushes after her in panic, his jacket half on and clutching a knapsack.`,
        presences: {
            [ACTOR]: {
                [ESTHER]: {
                    description: 'side, looking at Anita',
                    instance: CURIOUS
                },
                [ANITA]: {
                    description: 'side, rushing, exasperated',
                    instance: EXASPERATED
                },
                [YOUNG_BENNETT]: {
                    description: 'side, running, panicked',
                    instance: PANICKED
                }
            },
            [BACKDROP]: {
                [NOHO_HOUSES_BACKDROP]: true
            },
            [CUTOUT]: {
                [FIRE_HYDRANT]: true
            },
            [FLAT]: {
                [NOHO_HOUSE_LEFT]: true,
                [NOHO_HOUSE_RIGHT]: true
            }
        },
        cubes: NOHO_HOUSES_KEY,
        sky: {
            time: TIME_MORNING,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 6,
        description: `Bennett looks sheepish, seated on a bench in the hallway outside the nurse's office, wearing oversized overalls. Beside him is a sealed grocery bag. Outside, a young girl tells the playground about this. Anita overhears and looks upset.`,
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    description: 'front, playing ball, offended',
                    instance: CONCERNED
                },
                [ESTHER]: {
                    description: 'side, running, pointing back',
                    instance: SNICKERING
                },
                [YOUNG_BENNETT]: {
                    description: 'sitting, flustered',
                    instance: FLUSTERED
                }
            },
            [BACKDROP]: {
                [SCHOOL_BACKDROP]: true
            },
            [CUTOUT]: {
                [PLAYGROUND_SLIDE]: true
            },
            [FIXTURE]: {
                [PLAYGROUND_BALL]: true,
                [SAFEWAY_BAG]: true
            },
            [FLAT]: {
                [NOHO_SCHOOLHOUSE]: true
            },
            [PANEL]: {
                [ESTHER_SPEECH_PANEL]: true
            }
        },
        cubes: NOHO_SCHOOL_KEY,
        sky: {
            time: TIME_NOON,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 8,
        description: `Bennett is soaking in a bathtub at home, looking downcast. A window shows that it is midday outside.`,
        presences: {
            [ACTOR]: {
                [YOUNG_BENNETT]: {
                    description: 'side, in bathtub, downcast',
                    instance: BATHING
                }
            },
            [CUTOUT]: {
                [MIRRORED_SINK]: true,
                [TOWEL_RACK]: true
            },
            [PANEL]: {
                [BATHTUB]: true
            }
        },
        cubes: BATHROOM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 12,
        description: `The same scene. Anita is now crouched beside the bathtub. She has brought a phonograph and placed it on a chair. Bennett is still in the bathtub, now happily singing along, wearing a cowboy hat.`,
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    description: 'back, squatting, smiling',
                    instance: CHEERING
                },
                [YOUNG_BENNETT]: {
                    description: 'side, facing front, singing, smiling',
                    instance: SINGING
                }
            },
            [BACKDROP]: {
                [NOHO_HOUSES_BACKDROP]: true
            },
            [CARDBOARD]: {
                [JOHNNY_HORTON_ALBUM]: true
            },
            [FIXTURE]: {
                [RECORD_PLAYER_STOOL]: true
            },
            [PANEL]: {
                [BATHTUB]: true
            }
        },
        cubes: BATHROOM_OPEN_KEY,
        sky: {
            time: TIME_AFTERNOON,
            season: SEASON_SPRING
        }
    }
]
