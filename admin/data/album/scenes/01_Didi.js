import { ACTOR } from '../../../../app/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL
} from '../../../../app/constants/scene/things'
import {
    NOHO_HOUSES_KEY,
    NOHO_SCHOOL_KEY,
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY
} from '../../../../app/constants/scene/scenes'
import {
    TIME_DAWN,
    TIME_MORNING,
    TIME_NOON,
    TIME_AFTERNOON,
    SEASON_SPRING,
    SEASON_PAST
} from '../../../../app/constants/scene/sky'
import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from '../../../../app/constants/scene/actors'
import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING
} from '../../../../app/constants/scene/actors/youngBennett'
import {
    EXASPERATED,
    CONCERNED,
    CHEERING
} from '../../../../app/constants/scene/actors/anita'
import {
    CURIOUS,
    SNICKERING
} from '../../../../app/constants/scene/actors/esther'
import {
    VALLEY_CLOSER_BACKDROP,
    VALLEY_FURTHER_BACKDROP
} from '../../../../app/constants/scene/things/backdrops'
import { ESTHER_SPEECH } from '../../../../app/constants/scene/things/bubbles'
import { JOHNNY_HORTON_ALBUM } from '../../../../app/constants/scene/things/cardboards'
import {
    FIRE_HYDRANT,
    PLAYGROUND_SLIDE,
    MIRRORED_SINK,
    TOWEL_RACK,
    LEMON_TREE__BATHROOM,
    ROSEBUSH_DOUBLE_BATHROOM,
    ROSEBUSH_SINGLE_BATHROOM
} from '../../../../app/constants/scene/things/cutouts'
import {
    DEFAULT_FENCE_BATHROOM,
    NURSE_DOOR
} from '../../../../app/constants/scene/things/doors'
import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG,
    RECORD_PLAYER_STOOL
} from '../../../../app/constants/scene/things/fixtures'
import {
    NEAR_BUILDINGS,
    NEAR_HOUSES,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT
} from '../../../../app/constants/scene/things/flats'
import { BATHTUB } from '../../../../app/constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `North Hollywood houses.`,
        presences: {
            [BACKDROP]: {
                [VALLEY_CLOSER_BACKDROP]: true
            },
            [CUTOUT]: {
                [FIRE_HYDRANT]: true
            },
            [FLAT]: {
                [NEAR_HOUSES]: true,
                [NOHO_HOUSE_LEFT]: true,
                [NOHO_HOUSE_RIGHT]: true
            }
        },
        cubes: NOHO_HOUSES_KEY,
        sky: { time: TIME_DAWN, season: SEASON_SPRING }
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
                [VALLEY_CLOSER_BACKDROP]: true
            },
            [CUTOUT]: {
                [FIRE_HYDRANT]: true
            },
            [FLAT]: {
                [NEAR_HOUSES]: true,
                [NOHO_HOUSE_LEFT]: true,
                [NOHO_HOUSE_RIGHT]: true
            }
        },
        cubes: NOHO_HOUSES_KEY,
        sky: { time: TIME_MORNING, season: SEASON_SPRING }
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
                [VALLEY_FURTHER_BACKDROP]: true
            },
            [BUBBLE]: {
                [ESTHER_SPEECH]: true
            },
            [CUTOUT]: {
                [PLAYGROUND_SLIDE]: true
            },
            [DOOR]: {
                [NURSE_DOOR]: true
            },
            [FIXTURE]: {
                [PLAYGROUND_BALL]: true,
                [SAFEWAY_BAG]: true
            },
            [FLAT]: {
                [NEAR_BUILDINGS]: true
            }
        },
        cubes: NOHO_SCHOOL_KEY,
        sky: { time: TIME_NOON, season: SEASON_SPRING }
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
            [BACKDROP]: {
                [VALLEY_FURTHER_BACKDROP]: true
            },
            [CUTOUT]: {
                [MIRRORED_SINK]: true,
                [TOWEL_RACK]: true
            },
            [DOOR]: {
                [DEFAULT_FENCE_BATHROOM]: true
            },
            [PANEL]: {
                [BATHTUB]: true
            }
        },
        cubes: BATHROOM_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_SPRING }
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
                [VALLEY_FURTHER_BACKDROP]: true
            },
            [CARDBOARD]: {
                [JOHNNY_HORTON_ALBUM]: true
            },
            [CUTOUT]: {
                [LEMON_TREE__BATHROOM]: true,
                [ROSEBUSH_DOUBLE_BATHROOM]: true,
                [ROSEBUSH_SINGLE_BATHROOM]: true
            },
            [DOOR]: {
                [DEFAULT_FENCE_BATHROOM]: true
            },
            [FIXTURE]: {
                [RECORD_PLAYER_STOOL]: true
            },
            [PANEL]: {
                [BATHTUB]: true
            }
        },
        cubes: BATHROOM_OPEN_KEY,
        sky: { season: SEASON_PAST }
    }
]
