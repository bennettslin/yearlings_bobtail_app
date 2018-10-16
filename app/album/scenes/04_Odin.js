import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    DOORS,
    FURNITURES
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
} from '../../scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from '../../scene/sky'

import {
    PRETEEN_BENNETT,
    SASHA
} from '../../scene/actorKeys'

import {
    MAT,
    STAIRS,
    GATE,
    RICKSHAW,
    SHORE,
    BUOY,
    SINKING,
    OCEAN_FLOOR
} from '../../scene/instanceKeys/preteenBennett'

import { MERMAID } from '../../scene/instanceKeys/sasha'

import {
    TAIWAN_STREETS_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    SHORE_BUOY_BACKDROP,
    OCEAN_BUOY_BACKDROP,
    OCEAN_DEPTHS_BACKDROP,
    OCEAN_FLOOR_BACKDROP
} from '../../scene/backdropKeys'

import {
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE_FRONT,
    BENNETT_TAIWAN_STAIRS,
    ODIN_TAIWAN_STAIRS,
    TAIWAN_FRIDGE_SIDE,
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE,
    BENNETT_ODIN_RICKSHAW,
    BENNETT_SHORE,
    ODIN_SHORE,
    BENNETT_ODIN_BUOY,
    YELLOW_TAPED_GRILL,
    BENNETT_ODIN_DEPTHS,
    SEA_SERPENTS,
    BENNETT_OCEAN_FLOOR,
    ODIN_OCEAN_FLOOR,
    BENNETT_MAT,
    ODIN_MAT,
    BUDDHA_CAVE
} from '../../scene/cutoutKeys'

import {
    FRIDGE_DRAWINGS
} from '../../scene/fixtureKeys'

import {
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR,
    RICKSHAW_TOWN,
    SHORE_CARNIVAL,
    OCEAN_DEPTHS_BACK,
    OCEAN_BOTTOM_FAR
} from '../../scene/flatKeys'

import {
    IRON_GATE_LOW,
    IRON_GATE
} from '../../scene/doorKeys'

import {
    STAIRWELL_RAILING,
    BUOY_FLOAT
} from '../../scene/furnitureKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is lying on a mat on the floor. In the distance, he sees himself creeping out of the house in pitch darkness. Papers are strewn where he walked.`,
        presences: {
            [ACTORS]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, lying on floor, propped up',
                    instance: MAT
                }
            },
            [CUTOUTS]: {
                [BUDDHA_SHRINE]: true,
                [TAIWAN_FRIDGE_FRONT]: true,
                [BENNETT_TAIWAN_STAIRS]: true,
                [ODIN_TAIWAN_STAIRS]: true
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
            [ACTORS]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, looking down stairs',
                    instance: STAIRS
                }
            },
            [CUTOUTS]: {
                [TAIWAN_FRIDGE_SIDE]: true,
                [BENNETT_TAIWAN_GATE]: true,
                [ODIN_TAIWAN_GATE]: true
            },
            [FIXTURES]: {
                [FRIDGE_DRAWINGS]: true
            },
            [DOORS]: {
                [IRON_GATE_LOW]: true
            },
            [FURNITURES]: {
                [STAIRWELL_RAILING]: true
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
            [ACTORS]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, peeking out from gate',
                    instance: GATE
                }
            },
            [BACKDROPS]: {
                [TAIWAN_STREETS_BACKDROP]: true
            },
            [CUTOUTS]: {
                [BENNETT_ODIN_RICKSHAW]: true
            },
            [DOORS]: {
                [IRON_GATE]: true
            },
            [FLATS]: {
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
            [ACTORS]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'getting off rickshaw bike',
                    instance: RICKSHAW
                }
            },
            [BACKDROPS]: {
                [SHORE_RICKSHAW_BACKDROP]: true
            },
            [CUTOUTS]: {
                [BENNETT_SHORE]: true,
                [ODIN_SHORE]: true
            },
            [FLATS]: {
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
            [ACTORS]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side back, looking out to ocean',
                    instance: SHORE
                }
            },
            [BACKDROPS]: {
                [SHORE_BUOY_BACKDROP]: true
            },
            [CUTOUTS]: {
                [BENNETT_ODIN_BUOY]: true,
                [YELLOW_TAPED_GRILL]: true
            },
            [FLATS]: {
                [SHORE_CARNIVAL]: true
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
            [ACTORS]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'peering down from buoy',
                    instance: BUOY
                }
            },
            [BACKDROPS]: {
                [OCEAN_BUOY_BACKDROP]: true
            },
            [CUTOUTS]: {
                [BENNETT_ODIN_DEPTHS]: true,
                [SEA_SERPENTS]: true
            },
            [FLATS]: {
                [OCEAN_DEPTHS_BACK]: true
            },
            [FURNITURES]: {
                [BUOY_FLOAT]: true
            }
        },
        cubes: BUOY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 18,
        description: `Sasha is a mermaid, rescuing Bennett. She points down to Bennett on the ocean floor.`,
        presences: {
            [ACTORS]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'hugging self',
                    instance: SINKING
                },
                [SASHA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'mermaid',
                    instance: MERMAID
                }
            },
            [BACKDROPS]: {
                [OCEAN_DEPTHS_BACKDROP]: true
            },
            [CUTOUTS]: {
                [BENNETT_OCEAN_FLOOR]: true,
                [ODIN_OCEAN_FLOOR]: true
            },
            [FLATS]: {
                [OCEAN_BOTTOM_FAR]: true
            }
        },
        cubes: OCEAN_DEPTHS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 20,
        description: `Bennett sits on the shore gazing at the ocean. Further ahead, another Bennett is making his bed on the beach. Footprints lead up to him.`,
        presences: {
            [ACTORS]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, crouched in sand, looking back',
                    instance: OCEAN_FLOOR
                }
            },
            [BACKDROPS]: {
                [OCEAN_FLOOR_BACKDROP]: true
            },
            [CUTOUTS]: {
                [BENNETT_MAT]: true,
                [ODIN_MAT]: true,
                [BUDDHA_CAVE]: true
            }
        },
        cubes: OCEAN_FLOOR_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
