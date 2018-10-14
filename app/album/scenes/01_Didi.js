import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    PANELS
} from 'constants/scene'

import {
    NOHO_HOUSES_KEY,
    NOHO_SCHOOL_KEY,
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY
} from '../../scene/cubesKeys'

import {
    TIME_ANYTIME,
    TIME_DAWN,
    TIME_MORNING,
    TIME_NOON,
    TIME_AFTERNOON,
    SEASON_SPRING
} from '../../scene/sky'

import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from '../../scene/actorKeys'

import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING
} from '../../scene/instanceKeys/youngBennett'

import {
    EXASPERATED,
    CONCERNED,
    CHEERING
} from '../../scene/instanceKeys/anita'

import {
    CURIOUS,
    SNICKERING
} from '../../scene/instanceKeys/esther'

import {
    NOHO_HOUSES_BACKDROP,
    NOHO_SCHOOL_BACKDROP
} from '../../scene/backdropKeys'

import {
    FIRE_HYDRANT,
    PLAYGROUND_SLIDE,
    MIRRORED_SINK,
    TOWEL_RACK
} from '../../scene/cutoutKeys'

import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG,
    RECORD_PLAYER_STOOL
} from '../../scene/fixtureKeys'

import {
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOLHOUSE
} from '../../scene/flatKeys'

import {
    ESTHER_SPEECH_PANEL,
    BATHTUB
} from '../../scene/panelKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `North Hollywood houses.`,
        presences: {
            [BACKDROPS]: {
                [NOHO_HOUSES_BACKDROP]: true
            },
            [CUTOUTS]: {
                [FIRE_HYDRANT]: true
            },
            [FLATS]: {
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
            [ACTORS]: {
                [ESTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, looking at Anita',
                    instance: CURIOUS
                },
                [ANITA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, rushing, exasperated',
                    instance: EXASPERATED
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, running, panicked',
                    instance: PANICKED
                }
            },
            [BACKDROPS]: {
                [NOHO_HOUSES_BACKDROP]: true
            },
            [CUTOUTS]: {
                [FIRE_HYDRANT]: true
            },
            [FLATS]: {
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
            [ACTORS]: {
                [ANITA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, playing ball, offended',
                    instance: CONCERNED
                },
                [ESTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, skipping, pointing back and laughing',
                    instance: SNICKERING
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, flustered',
                    instance: FLUSTERED
                }
            },
            [BACKDROPS]: {
                [NOHO_SCHOOL_BACKDROP]: true
            },
            [CUTOUTS]: {
                [PLAYGROUND_SLIDE]: true
            },
            [FIXTURES]: {
                [PLAYGROUND_BALL]: true,
                [SAFEWAY_BAG]: true
            },
            [FLATS]: {
                [NOHO_SCHOOLHOUSE]: true,
            },
            [PANELS]: {
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
            [ACTORS]: {
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, in bathtub, downcast',
                    instance: BATHING
                }
            },
            [CUTOUTS]: {
                [MIRRORED_SINK]: true,
                [TOWEL_RACK]: true
            },
            [PANELS]: {
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
            [ACTORS]: {
                [ANITA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, squatting, smiling',
                    instance: CHEERING
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, facing front, singing, smiling',
                    instance: SINGING
                }
            },
            [BACKDROPS]: {
                [NOHO_HOUSES_BACKDROP]: true
            },
            [CUTOUTS]: {
                [MIRRORED_SINK]: true
            },
            [FIXTURES]: {
                [RECORD_PLAYER_STOOL]: true
            },
            [PANELS]: {
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
