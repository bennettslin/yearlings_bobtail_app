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
    TAIWAN_ROOM_KEY,
    TAIWAN_STAIRS_KEY,
    TAIWAN_GATE_KEY,
    RICKSHAW_KEY,
    SHORE_KEY,
    BUOY_KEY,
    OCEAN_DEPTHS_KEY,
    OCEAN_FLOOR_KEY
} from '../../constants/scene/scenes'
import {
    TIME_ANYTIME,
    SEASON_AUTUMN,
    SEASON_OCEAN
} from '../../scene/sky/keys'
import {
    PRETEEN_BENNETT,
    SASHA_BENNETT
} from '../../constants/scene/actors'
import {
    MAT,
    STAIRS,
    GATE,
    RICKSHAW,
    SHORE,
    BUOY,
    OCEAN_FLOOR
} from '../../constants/scene/actors/instances/preteenBennett'
import { MERMAID } from '../../constants/scene/actors/instances/sashaBennett'
import {
    TAIWAN_STAIRS_BACKDROP,
    TAIWAN_STREETS_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    SHORE_BUOY_BACKDROP,
    OCEAN_BOTTOM_FAR,
    OCEAN_FLOOR_FAR
} from '../../constants/scene/things/backdrops'
import {
    BENNETT_TAIWAN_STAIRS,
    ODIN_TAIWAN_STAIRS,
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE,
    BENNETT_ODIN_RICKSHAW,
    BENNETT_SHORE,
    ODIN_SHORE,
    BENNETT_ODIN_BUOY,
    BENNETT_ODIN_DEPTHS,
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT,
    BENNETT_ODIN_OCEAN_FLOOR,
    BENNETT_MAT,
    ODIN_MAT
} from '../../constants/scene/things/cardboards'
import {
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE,
    YELLOW_TAPED_GRILL
} from '../../constants/scene/things/cutouts'
import { FRIDGE_DRAWINGS } from '../../constants/scene/things/fixtures'
import {
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR,
    RICKSHAW_TOWN,
    FERRIS_WHEEL,
    ROLLER_COASTER,
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR
} from '../../constants/scene/things/flats'
import {
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR
} from '../../constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett is lying on a mat on the floor. In the distance, he sees himself creeping out of the house in pitch darkness. Papers are strewn where he walked.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side, lying on floor, propped up',
                    instance: MAT
                }
            },
            [CARDBOARD]: {
                [BENNETT_TAIWAN_STAIRS]: true,
                [ODIN_TAIWAN_STAIRS]: true
            },
            [CUTOUT]: {
                [BUDDHA_SHRINE]: true,
                [TAIWAN_FRIDGE]: true
            },
            [FIXTURE]: {
                [FRIDGE_DRAWINGS]: true
            }
        },
        cubes: TAIWAN_ROOM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 4,
        description: `From top of stairs, Bennett sees himself opening the gate and peering out.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side angle, looking down stairs',
                    instance: STAIRS
                }
            },
            [BACKDROP]: {
                [TAIWAN_STAIRS_BACKDROP]: true
            },
            [CARDBOARD]: {
                [BENNETT_TAIWAN_GATE]: true,
                [ODIN_TAIWAN_GATE]: true
            }
        },
        cubes: TAIWAN_STAIRS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 6,
        description: `Bennett is stepping through the front gate. He sees himself in a rickshaw, driving away. The rickshaw leaves a trail.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side angle, peeking out from gate',
                    instance: GATE
                }
            },
            [BACKDROP]: {
                [TAIWAN_STREETS_BACKDROP]: true
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_RICKSHAW]: true
            },
            [FLAT]: {
                [TAIWAN_HOUSE_FAR]: true,
                [TAIWAN_HOUSE_NEAR]: true
            }
        },
        cubes: TAIWAN_GATE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 9,
        description: ``,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'getting off rickshaw bike',
                    instance: RICKSHAW
                }
            },
            [BACKDROP]: {
                [SHORE_RICKSHAW_BACKDROP]: true
            },
            [CARDBOARD]: {
                [BENNETT_SHORE]: true,
                [ODIN_SHORE]: true
            },
            [FLAT]: {
                [RICKSHAW_TOWN]: true
            }
        },
        cubes: RICKSHAW_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 11,
        description: `Bennett is standing on the shore. He sees himself in the water, on a buoy. Footprints lead into the water.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side back, looking out to ocean',
                    instance: SHORE
                }
            },
            [BACKDROP]: {
                [SHORE_BUOY_BACKDROP]: true
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_BUOY]: true
            },
            [CUTOUT]: {
                [YELLOW_TAPED_GRILL]: true
            },
            [FLAT]: {
                [FERRIS_WHEEL]: true,
                [ROLLER_COASTER]: true
            }
        },
        cubes: SHORE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 14,
        description: `Sea serpents are surrounding Bennett in the ocean.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'peering down from buoy',
                    instance: BUOY
                }
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_DEPTHS]: true,
                [SEA_SERPENT_LEFT]: true,
                [SEA_SERPENT_RIGHT]: true
            }
        },
        cubes: BUOY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_OCEAN
        }
    },
    {
        unitIndex: 18,
        description: `Sasha is a mermaid, rescuing Bennett. She points down to Bennett on the ocean floor.`,
        presences: {
            [ACTOR]: {
                [SASHA_BENNETT]: {
                    description: 'mermaid',
                    instance: MERMAID
                }
            },
            [BACKDROP]: {
                [OCEAN_BOTTOM_FAR]: true
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_OCEAN_FLOOR]: true
            },
            [FLAT]: {
                [OCEAN_BOTTOM_MIDDLE]: true,
                [OCEAN_BOTTOM_NEAR]: true
            }
        },
        cubes: OCEAN_DEPTHS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_OCEAN
        }
    },
    {
        unitIndex: 20,
        description: `Bennett sits on the shore gazing at the ocean. Further ahead, another Bennett is making his bed on the beach. Footprints lead up to him.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side angle, crouched in sand, looking back',
                    instance: OCEAN_FLOOR
                }
            },
            [BACKDROP]: {
                [OCEAN_FLOOR_FAR]: true
            },
            [CARDBOARD]: {
                [BENNETT_MAT]: true,
                [ODIN_MAT]: true
            },
            [PANEL]: {
                [OCEAN_CAVE_INTERIOR]: true,
                [OCEAN_CAVE_EXTERIOR]: true
            }
        },
        cubes: OCEAN_FLOOR_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_OCEAN
        }
    }
]
