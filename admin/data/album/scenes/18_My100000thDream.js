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
    PUPPET,
} from '../../../../src/constants/scene/things'
import {
    EL_TORITO_KEY,
    PAMPAS_KEY,
    WEDDING_KEY,
    CLIFF_KEY,
    CLIFF_DEATHBED_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    SEASON_AUTUMN,
    SEASON_SPRING,
    SEASON_SUMMER,
    SEASON_THOUGHT,
    SEASON_WINTER,
    TIME_AFTERNOON,
    TIME_EVENING,
    TIME_MORNING,
    TIME_NOON,
} from '../../../../src/constants/scene/sky'
import {
    BENNETT,
    BENNETT_LIZ,
    CATHERINE,
    MARA,
    LIZ,
    MIRIAM,
    AMY,
} from '../../../../src/constants/scene/actors'
import { DOCTOR } from '../../../../src/constants/scene/actors/amy'
import {
    EL_TORITO,
    GOPI,
} from '../../../../src/constants/scene/actors/songs'
import {
    PAMPAS,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM,
} from '../../../../src/constants/scene/actors/bennettLiz'
import {
    OAKLAND_SIDE__LEVEL,
    MOUNTAIN_PAMPAS_BACKDROP,
    WEDDING_BACKDROP,
    GOLDEN_GATE_BACKDROP,
    THOUGHT_MEDIUM__DEATHBED,
} from '../../../../src/constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__INVERSE,
    BUBBLE_MEDIUM__INVERSE,
    BUBBLE_LARGE__INVERSE,
} from '../../../../src/constants/scene/things/bubbles'
import {
    TREE_DEAD__EL_CERRITO,
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    HOSTESS_STAND,
    IV_DRIP,
    WEDDING_CHAIR,
    WEDDING_CROWD,
} from '../../../../src/constants/scene/things/cutouts'
import { EL_TORITO_DOORS } from '../../../../src/constants/scene/things/doors'
import { HOSPITAL_RECORD_PLAYER } from '../../../../src/constants/scene/things/fixtures'
import {
    NEAR_BUILDINGS,
    CLIFF_GRAVES_FAR,
    CLIFF_GRAVES_NEAR,
    PAMPAS_FAR,
    FOREBODING_TREES__NEAR,
    FOREBODING_TREES__MIDDLE,
    FOREBODING_TREES__FAR,
} from '../../../../src/constants/scene/things/flats'
import {
    DEATHBED_BLANKET,
    DEATHBED_PILLOW,
} from '../../../../src/constants/scene/things/furnitures'
import {
    WEDDING_PLATFORM_FRONT,
    WEDDING_PLATFORM_REAR,
    HOSPITAL_BED,
    HOSPITAL_RECORD_STAND,
} from '../../../../src/constants/scene/things/panels'
import { PUPPET_KHARI_LIZ } from '../../../../src/constants/scene/things/puppets'

export default [
    {
        unitIndex: 1,
        description: `Bennett runs into Sita, who happens to be walking out of an El Torito restaurant, having finished her shift.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking, pleasantly confused',
                    instance: EL_TORITO,
                },
                [LIZ]: {
                    sita: {
                        description: 'side angle, opening a door, pleasantly surprised',
                        instance: EL_TORITO,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [CUTOUT]: {
                [DISPENSER_LEFT]: true,
                [DISPENSER_RIGHT]: true,
                [HOSTESS_STAND]: true,
            },
            [DOOR]: {
                [EL_TORITO_DOORS]: true,
            },
            [FLAT]: {
                [NEAR_BUILDINGS]: true,
            },
        },
        cubes: EL_TORITO_KEY,
        sky: { time: TIME_MORNING, season: SEASON_SPRING },
    },
    {
        unitIndex: 3,
        description: `Bennett and Sita are dancing on the pampas with some gopis.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'sitting cross-legged, playing recorder, content',
                    instance: PAMPAS,
                },
                [CATHERINE]: {
                    gopi: {
                        description: 'dancing',
                        instance: GOPI,
                    },
                },
                [MARA]: {
                    gopi: {
                        description: 'dancing',
                        instance: GOPI,
                    },
                },
                [MIRIAM]: {
                    gopi: {
                        description: 'dancing',
                        instance: GOPI,
                    },
                },
            },
            [BACKDROP]: {
                [MOUNTAIN_PAMPAS_BACKDROP]: true,
            },
            [FLAT]: {
                [PAMPAS_FAR]: true,
            },
        },
        cubes: PAMPAS_KEY,
        sky: { time: TIME_NOON, season: SEASON_SUMMER },
    },
    {
        unitIndex: 5,
        description: `In the background is an Indian wedding. Bennett is confused, because the bride appears to be Sita. But his Sita keeps dragging him forward, insistently.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'back angle, confusedly being rushed',
                    instance: GETTING_DARK,
                },
            },
            [CUTOUT]: {
                [WEDDING_CHAIR]: true,
                [WEDDING_CROWD]: true,
            },
            [BACKDROP]: {
                [WEDDING_BACKDROP]: true,
            },
            [FLAT]: {
                [FOREBODING_TREES__NEAR]: true,
                [FOREBODING_TREES__MIDDLE]: true,
                [FOREBODING_TREES__FAR]: true,
            },
            [PANEL]: {
                [WEDDING_PLATFORM_FRONT]: true,
                [WEDDING_PLATFORM_REAR]: true,
            },
            [PUPPET]: {
                [PUPPET_KHARI_LIZ]: true,
            },
        },
        cubes: WEDDING_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 7,
        description: `Sita and Bennett are at the edge of a cliff. Bennett is frightened. Sita is gesturing towards the edge.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'front angle, reacting to threat',
                    instance: CLIFF,
                },
            },
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true,
            },
            [CUTOUT]: {
                [TREE_DEAD__EL_CERRITO]: true,
            },
            [FLAT]: {
                [CLIFF_GRAVES_FAR]: true,
                [CLIFF_GRAVES_NEAR]: true,
            },
        },
        cubes: CLIFF_KEY,
        sky: { time: TIME_EVENING, season: SEASON_WINTER },
    },
    {
        unitIndex: 9,
        description: `The whole thing turns out to have been a dream. Bennett is in bed, old and dying. A doctor is pulling the sheet over him. A thought bubble shows the previous scene, with Bennett now accepting his fate, and Sita comforting him.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'calm, accepting of impending doom',
                    instance: FINAL_DREAM,
                },
                [AMY]: {
                    doctor: {
                        description: 'pulling sheet over Bennett',
                        instance: DOCTOR,
                    },
                },
            },
            [BACKDROP]: {
                [THOUGHT_MEDIUM__DEATHBED]: true,
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__INVERSE]: true,
                [BUBBLE_MEDIUM__INVERSE]: true,
                [BUBBLE_LARGE__INVERSE]: true,
            },
            [CUTOUT]: {
                [IV_DRIP]: true,
            },
            [FIXTURE]: {
                [HOSPITAL_RECORD_PLAYER]: true,
            },
            [FLAT]: {
                [CLIFF_GRAVES_FAR]: true,
            },
            [FURNITURE]: {
                [DEATHBED_BLANKET]: true,
                [DEATHBED_PILLOW]: true,
            },
            [PANEL]: {
                [HOSPITAL_BED]: true,
                [HOSPITAL_RECORD_STAND]: true,
            },
        },
        cubes: CLIFF_DEATHBED_KEY,
        sky: { season: SEASON_THOUGHT },
    },
]
