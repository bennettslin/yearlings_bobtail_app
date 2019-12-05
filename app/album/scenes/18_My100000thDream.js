import { ACTOR } from '../../constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL,
    PUPPET
} from '../../constants/scene/things'
import {
    EL_TORITO_KEY,
    PAMPAS_KEY,
    WEDDING_KEY,
    CLIFF_KEY,
    CLIFF_DEATHBED_KEY
} from '../../constants/scene/scenes'
import {
    TIME_MORNING,
    TIME_NOON,
    TIME_AFTERNOON,
    TIME_EVENING,
    SEASON_SPRING,
    SEASON_THOUGHT
} from '../../scene/sky/keys'
import {
    BENNETT,
    BENNETT_LIZ,
    CATHERINE,
    MARA,
    LIZ,
    MIRIAM,
    AMY
} from '../../constants/scene/actors'
import { DOCTOR } from '../../constants/scene/actors/amy'
import {
    EL_TORITO,
    GOPI
} from '../../constants/scene/actors/songs'
import {
    PAMPAS,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM
} from '../../constants/scene/actors/bennettLiz'
import {
    OAKLAND_SIDE,
    BRICK_WALL,
    MOUNTAIN_BACKDROP,
    WEDDING_BACKDROP,
    GOLDEN_GATE_BACKDROP
} from '../../constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__INVERSE,
    BUBBLE_MEDIUM__INVERSE,
    BUBBLE_LARGE__INVERSE,
    THOUGHT_MEDIUM
} from '../../constants/scene/things/bubbles'
import {
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    WEDDING_CROWD,
    IV_DRIP,
    CLIFF_TREE
} from '../../constants/scene/things/cutouts'
import { EL_TORITO_DOORS } from '../../constants/scene/things/doors'
import { HOSPITAL_RECORD_PLAYER } from '../../constants/scene/things/fixtures'
import {
    CLIFF_GRAVES_FAR,
    CLIFF_GRAVES_NEAR,
    PAMPAS_FAR,
    FOREBODING_TREES__NEAR,
    FOREBODING_TREES__MIDDLE,
    FOREBODING_TREES__FAR
} from '../../constants/scene/things/flats'
import {
    WEDDING_PLATFORM,
    HOSPITAL_BED
} from '../../constants/scene/things/panels'
import { PUPPET_KHARI_LIZ } from '../../constants/scene/things/puppets'

export default [
    {
        unitIndex: 1,
        description: `Bennett runs into Sita, who happens to be walking out of an El Torito restaurant, having finished her shift.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking, pleasantly confused',
                    instance: EL_TORITO
                },
                [LIZ]: {
                    sita: {
                        description: 'side angle, opening a door, pleasantly surprised',
                        instance: EL_TORITO
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE]: true,
                [BRICK_WALL]: true
            },
            [CUTOUT]: {
                [DISPENSER_LEFT]: true,
                [DISPENSER_RIGHT]: true
            },
            [DOOR]: {
                [EL_TORITO_DOORS]: true
            }
        },
        cubes: EL_TORITO_KEY,
        sky: { time: TIME_MORNING, season: SEASON_SPRING }
    },
    {
        unitIndex: 3,
        description: `Bennett and Sita are dancing on the pampas with some gopis.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'sitting cross-legged, playing recorder, content',
                    instance: PAMPAS
                },
                [CATHERINE]: {
                    gopi: {
                        description: 'dancing',
                        instance: GOPI
                    }
                },
                [MARA]: {
                    gopi: {
                        description: 'dancing',
                        instance: GOPI
                    }
                },
                [MIRIAM]: {
                    gopi: {
                        description: 'dancing',
                        instance: GOPI
                    }
                }
            },
            [BACKDROP]: {
                [MOUNTAIN_BACKDROP]: true
            },
            [FLAT]: {
                [PAMPAS_FAR]: true
            }
        },
        cubes: PAMPAS_KEY,
        sky: { time: TIME_NOON, season: SEASON_SPRING }
    },
    {
        unitIndex: 5,
        description: `In the background is an Indian wedding. Bennett is confused, because the bride appears to be Sita. But his Sita keeps dragging him forward, insistently.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'back angle, confusedly being rushed',
                    instance: GETTING_DARK
                }
            },
            [CUTOUT]: {
                [WEDDING_CROWD]: true
            },
            [BACKDROP]: {
                [WEDDING_BACKDROP]: true
            },
            [FLAT]: {
                [FOREBODING_TREES__NEAR]: true,
                [FOREBODING_TREES__MIDDLE]: true,
                [FOREBODING_TREES__FAR]: true
            },
            [PANEL]: {
                [WEDDING_PLATFORM]: true
            },
            [PUPPET]: {
                [PUPPET_KHARI_LIZ]: true
            }
        },
        cubes: WEDDING_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_SPRING }
    },
    {
        unitIndex: 7,
        description: `Sita and Bennett are at the edge of a cliff. Bennett is frightened. Sita is gesturing towards the edge.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'front angle, reacting to threat',
                    instance: CLIFF
                }
            },
            [BACKDROP]: {
                [GOLDEN_GATE_BACKDROP]: true
            },
            [CUTOUT]: {
                [CLIFF_TREE]: true
            },
            [FLAT]: {
                [CLIFF_GRAVES_FAR]: true,
                [CLIFF_GRAVES_NEAR]: true
            }
        },
        cubes: CLIFF_KEY,
        sky: { time: TIME_EVENING, season: SEASON_SPRING }
    },
    {
        unitIndex: 9,
        description: `The whole thing turns out to have been a dream. Bennett is in bed, old and dying. A doctor is pulling the sheet over him. A thought bubble shows the previous scene, with Bennett now accepting his fate, and Sita comforting him.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'calm, accepting of impending doom',
                    instance: FINAL_DREAM
                },
                [AMY]: {
                    doctor: {
                        description: 'pulling sheet over Bennett',
                        instance: DOCTOR
                    }
                }
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__INVERSE]: true,
                [BUBBLE_MEDIUM__INVERSE]: true,
                [BUBBLE_LARGE__INVERSE]: true,
                [THOUGHT_MEDIUM]: true
            },
            [CUTOUT]: {
                [IV_DRIP]: true
            },
            [FIXTURE]: {
                [HOSPITAL_RECORD_PLAYER]: true
            },
            [FLAT]: {
                [CLIFF_GRAVES_FAR]: true
            },
            [PANEL]: {
                [HOSPITAL_BED]: true
            }
        },
        cubes: CLIFF_DEATHBED_KEY,
        sky: { season: SEASON_THOUGHT }
    }
]
