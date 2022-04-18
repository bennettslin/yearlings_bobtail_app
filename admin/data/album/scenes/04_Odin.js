import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL,
} from '../../../../src/constants/scene/things'
import {
    BUOY_KEY,
    OCEAN_DEPTHS_KEY,
    OCEAN_FLOOR_KEY,
    RICKSHAW_KEY,
    SHORE_KEY,
    TAIWAN_GATE_KEY,
    TAIWAN_ROOM_KEY,
    TAIWAN_STAIRS_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    SEASON_SUMMER,
    SEASON_OCEAN_SIDE,
    SEASON_OCEAN_TOP,
    TIME_NIGHT_TAIWAN,
    TIME_TWILIGHT_TAIWAN,
} from '../../../../src/constants/scene/sky'
import {
    PRETEEN_BENNETT,
    SASHA_BENNETT,
} from '../../../../src/constants/scene/actors'
import {
    BUOY,
    GATE,
    MAT,
    OCEAN_FLOOR,
    RICKSHAW,
    SHORE,
    STAIRS,
} from '../../../../src/constants/scene/actors/preteenBennett'
import { MERMAID } from '../../../../src/constants/scene/actors/sashaBennett'
import {
    MOUNTAIN_TAIWAN_BACKDROP,
    OCEAN_BOTTOM_FAR,
    OCEAN_FLOOR_FAR,
    SHORE_BUOY_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    TAIWAN_STAIRS_BACKDROP,
} from '../../../../src/constants/scene/things/backdrops'
import {
    BENNETT_MAT,
    BENNETT_ODIN_BUOY,
    BENNETT_ODIN_DEPTHS,
    BENNETT_ODIN_OCEAN_FLOOR,
    BENNETT_ODIN_RICKSHAW,
    BENNETT_SHORE,
    BENNETT_TAIWAN_GATE,
    BENNETT_TAIWAN_STAIRS,
    ODIN_MAT,
    ODIN_SHORE,
    ODIN_TAIWAN_GATE,
    ODIN_TAIWAN_STAIRS,
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT,
} from '../../../../src/constants/scene/things/cardboards'
import {
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE,
    TAIWAN_SHRUB,
    TAIWAN_TREE,
    YELLOW_TAPED_GRILL,
} from '../../../../src/constants/scene/things/cutouts'
import {
    IRON_GATE,
    IRON_GATE_LOW,
} from '../../../../src/constants/scene/things/doors'
import { FRIDGE_DRAWINGS } from '../../../../src/constants/scene/things/fixtures'
import {
    FERRIS_WHEEL,
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR,
    RICKSHAW_TOWN,
    ROLLER_COASTER,
    TAIWAN_HOUSES_CENTRE,
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR,
} from '../../../../src/constants/scene/things/flats'
import {
    BUDDHA_STAND,
    OCEAN_CAVE_EXTERIOR,
    OCEAN_CAVE_INTERIOR,
    OCEAN_WAVES__FRONT,
    OCEAN_WAVES__MIDDLE,
    OCEAN_WAVES__MIDDLE_FRONT,
    OCEAN_WAVES__MIDDLE_REAR,
    OCEAN_WAVES__REAR,
} from '../../../../src/constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett is lying on a mat on the floor. In the distance, he sees himself creeping out of the house in pitch darkness. Papers are strewn where he walked.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side, lying on floor, propped up',
                    instance: MAT,
                },
            },
            [CARDBOARD]: {
                [BENNETT_TAIWAN_STAIRS]: true,
                [ODIN_TAIWAN_STAIRS]: true,
            },
            [CUTOUT]: {
                [BUDDHA_SHRINE]: true,
                [TAIWAN_FRIDGE]: true,
            },
            [FIXTURE]: {
                [FRIDGE_DRAWINGS]: true,
            },
            [PANEL]: {
                [BUDDHA_STAND]: true,
            },
        },
        cubes: TAIWAN_ROOM_KEY,
        sky: { time: TIME_NIGHT_TAIWAN, season: SEASON_SUMMER },
    },
    {
        unitIndex: 4,
        description: `From top of stairs, Bennett sees himself opening the gate and peering out.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side angle, looking down stairs',
                    instance: STAIRS,
                },
            },
            [BACKDROP]: {
                [TAIWAN_STAIRS_BACKDROP]: true,
            },
            [CARDBOARD]: {
                [BENNETT_TAIWAN_GATE]: true,
                [ODIN_TAIWAN_GATE]: true,
            },
            [DOOR]: {
                [IRON_GATE_LOW]: true,
            },
        },
        cubes: TAIWAN_STAIRS_KEY,
        sky: { time: TIME_NIGHT_TAIWAN, season: SEASON_SUMMER },
    },
    {
        unitIndex: 6,
        description: `Bennett is stepping through the front gate. He sees himself in a rickshaw, driving away. The rickshaw leaves a trail.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side angle, peeking out from gate',
                    instance: GATE,
                },
            },
            [BACKDROP]: {
                [MOUNTAIN_TAIWAN_BACKDROP]: true,
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_RICKSHAW]: true,
            },
            [CUTOUT]: {
                [TAIWAN_SHRUB]: true,
                [TAIWAN_TREE]: true,
            },
            [DOOR]: {
                [IRON_GATE]: true,
            },
            [FLAT]: {
                [TAIWAN_HOUSES_CENTRE]: true,
                [TAIWAN_HOUSE_FAR]: true,
                [TAIWAN_HOUSE_NEAR]: true,
            },
        },
        cubes: TAIWAN_GATE_KEY,
        sky: { time: TIME_NIGHT_TAIWAN, season: SEASON_SUMMER },
    },
    {
        unitIndex: 9,
        description: ``,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'getting off rickshaw bike',
                    instance: RICKSHAW,
                },
            },
            [BACKDROP]: {
                [SHORE_RICKSHAW_BACKDROP]: true,
            },
            [CARDBOARD]: {
                [BENNETT_SHORE]: true,
                [ODIN_SHORE]: true,
            },
            [FLAT]: {
                [RICKSHAW_TOWN]: true,
            },
        },
        cubes: RICKSHAW_KEY,
        sky: { time: TIME_TWILIGHT_TAIWAN, season: SEASON_SUMMER },
    },
    {
        unitIndex: 11,
        description: `Bennett is standing on the shore. He sees himself in the water, on a buoy. Footprints lead into the water.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side back, looking out to ocean',
                    instance: SHORE,
                },
            },
            [BACKDROP]: {
                [SHORE_BUOY_BACKDROP]: true,
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_BUOY]: true,
            },
            [CUTOUT]: {
                [YELLOW_TAPED_GRILL]: true,
            },
            [FLAT]: {
                [FERRIS_WHEEL]: true,
                [ROLLER_COASTER]: true,
            },
        },
        cubes: SHORE_KEY,
        sky: { time: TIME_TWILIGHT_TAIWAN, season: SEASON_SUMMER },
    },
    {
        unitIndex: 14,
        description: `Sea serpents are surrounding Bennett in the ocean.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'peering down from buoy',
                    instance: BUOY,
                },
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_DEPTHS]: true,
                [SEA_SERPENT_LEFT]: true,
                [SEA_SERPENT_RIGHT]: true,
            },
            [PANEL]: {
                [OCEAN_WAVES__REAR]: true,
                [OCEAN_WAVES__MIDDLE_REAR]: true,
                [OCEAN_WAVES__MIDDLE]: true,
                [OCEAN_WAVES__MIDDLE_FRONT]: true,
                [OCEAN_WAVES__FRONT]: true,
            },
        },
        cubes: BUOY_KEY,
        sky: { season: SEASON_OCEAN_TOP },
    },
    {
        unitIndex: 18,
        description: `Sasha is a mermaid, rescuing Bennett. She points down to Bennett on the ocean floor.`,
        presences: {
            [ACTOR]: {
                [SASHA_BENNETT]: {
                    description: 'mermaid',
                    instance: MERMAID,
                },
            },
            [BACKDROP]: {
                [OCEAN_BOTTOM_FAR]: true,
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_OCEAN_FLOOR]: true,
            },
            [FLAT]: {
                [OCEAN_BOTTOM_MIDDLE]: true,
                [OCEAN_BOTTOM_NEAR]: true,
            },
        },
        cubes: OCEAN_DEPTHS_KEY,
        sky: { season: SEASON_OCEAN_SIDE },
    },
    {
        unitIndex: 20,
        description: `Bennett sits on the shore gazing at the ocean. Further ahead, another Bennett is making his bed on the beach. Footprints lead up to him.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side angle, crouched in sand, looking back',
                    instance: OCEAN_FLOOR,
                },
            },
            [BACKDROP]: {
                [OCEAN_FLOOR_FAR]: true,
            },
            [CARDBOARD]: {
                [BENNETT_MAT]: true,
                [ODIN_MAT]: true,
            },
            [PANEL]: {
                [OCEAN_CAVE_INTERIOR]: true,
                [OCEAN_CAVE_EXTERIOR]: true,
            },
        },
        cubes: OCEAN_FLOOR_KEY,
        sky: { season: SEASON_OCEAN_SIDE },
    },
]
