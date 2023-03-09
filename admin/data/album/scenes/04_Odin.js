import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL,
    PUPPET,
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
    DREAM_BUOY,
    DREAM_DEPTHS,
    DREAM_GATE,
    DREAM_MAT_BENNETT,
    DREAM_MAT_ODIN,
    DREAM_OCEAN_FLOOR,
    DREAM_RICKSHAW,
    DREAM_SHORE,
    DREAM_STAIRS,
    MOUNTAIN_TAIWAN_BACKDROP,
    OCEAN_DEPTHS_ROCKS,
    OCEAN_DEPTHS_VOLCANOES,
    OCEAN_FLOOR_ROCKS,
    OCEAN_FLOOR_VOLCANOES,
    SHORE_BUOY_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    TAIWAN_STAIRS_BACKDROP,
} from '../../../../src/constants/scene/things/backdrops'
import {
    BENNETT_OCEAN_FLOOR,
    BENNETT_ODIN_SHORE,
    BENNETT_ODIN_BUOY,
    BENNETT_ODIN_DEPTHS,
    BENNETT_ODIN_GATE,
    BENNETT_RICKSHAW,
    BENNETT_STAIRS,
    BENNETT_MAT,
    ODIN_OCEAN_FLOOR,
    ODIN_RICKSHAW,
    ODIN_STAIRS,
    ODIN_MAT,
    PAINTING_EMPRESS__MAT,
    PAINTING_EMPRESS__STAIRS,
    PAINTING_GODDESS__MAT,
    PAINTING_GODDESS__STAIRS,
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT,
    BUDDHA_CAVE_SHRINE,
} from '../../../../src/constants/scene/things/cardboards'
import {
    BUDDHA_SHRINE,
    BUDDHA_STATUE,
    OCEAN_FLOOR_PLANTS_CENTRE,
    OCEAN_FLOOR_PLANTS_LEFT,
    OCEAN_FLOOR_PLANTS_RIGHT,
    TAIWAN_FRIDGE,
    TAIWAN_SHRUB,
    TAIWAN_TREE,
    YELLOW_TAPED_GRILL,
} from '../../../../src/constants/scene/things/cutouts'
import {
    IRON_GATE,
    IRON_GATE_LOW,
    TAIWAN_CIRCLE_WINDOW,
    TAIWAN_DOOR,
    TAIWAN_GRATE_WINDOW,
    TAIWAN_WINDOW__ROOM,
    TAIWAN_WINDOW__STAIRS,
} from '../../../../src/constants/scene/things/doors'
import { FRIDGE_DRAWINGS } from '../../../../src/constants/scene/things/fixtures'
import {
    FERRIS_WHEEL,
    OCEAN_DEPTHS_CAVES_LEFT,
    OCEAN_DEPTHS_CAVES_RIGHT,
    RICKSHAW_TOWN,
    ROLLER_COASTER,
    TAIWAN_HOUSES_CENTRE,
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR,
} from '../../../../src/constants/scene/things/flats'
import {
    BUDDHA_STAND,
    OCEAN_CAVE_EXTERIOR_LEFT,
    OCEAN_CAVE_EXTERIOR_RIGHT,
    OCEAN_CAVE_INTERIOR_LEFT,
    OCEAN_CAVE_INTERIOR_RIGHT,
    OCEAN_WAVES__FRONT,
    OCEAN_WAVES__MIDDLE,
    OCEAN_WAVES__MIDDLE_FRONT,
    OCEAN_WAVES__MIDDLE_REAR,
    OCEAN_WAVES__REAR,
} from '../../../../src/constants/scene/things/panels'
import { OCEAN_FLOOR_FISH } from '../../../../src/constants/scene/things/puppets'

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
            [BACKDROP]: {
                [DREAM_MAT_BENNETT]: true,
                [DREAM_MAT_ODIN]: true,
            },
            [CARDBOARD]: {
                [BENNETT_MAT]: true,
                [ODIN_MAT]: true,
                [PAINTING_EMPRESS__MAT]: true,
                [PAINTING_GODDESS__MAT]: true,
            },
            [CUTOUT]: {
                [BUDDHA_SHRINE]: true,
                [TAIWAN_FRIDGE]: true,
            },
            [DOOR]: {
                [TAIWAN_WINDOW__ROOM]: true,
                [TAIWAN_DOOR]: true,
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
                [DREAM_STAIRS]: true,
            },
            [CARDBOARD]: {
                [BENNETT_STAIRS]: true,
                [ODIN_STAIRS]: true,
                [PAINTING_EMPRESS__STAIRS]: true,
                [PAINTING_GODDESS__STAIRS]: true,
            },
            [CUTOUT]: {
                [BUDDHA_STATUE]: true,
            },
            [DOOR]: {
                [IRON_GATE_LOW]: true,
                [TAIWAN_GRATE_WINDOW]: true,
                [TAIWAN_WINDOW__STAIRS]: true,
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
                [DREAM_GATE]: true,
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_GATE]: true,
            },
            [CUTOUT]: {
                [TAIWAN_SHRUB]: true,
                [TAIWAN_TREE]: true,
            },
            [DOOR]: {
                [IRON_GATE]: true,
                [TAIWAN_CIRCLE_WINDOW]: true,
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
                [DREAM_RICKSHAW]: true,
            },
            [CARDBOARD]: {
                [BENNETT_RICKSHAW]: true,
                [ODIN_RICKSHAW]: true,
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
                [DREAM_SHORE]: true,
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_SHORE]: true,
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
            [BACKDROP]: {
                [DREAM_BUOY]: true,
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_BUOY]: true,
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
                [OCEAN_DEPTHS_VOLCANOES]: true,
                [OCEAN_DEPTHS_ROCKS]: true,
                [DREAM_DEPTHS]: true,
            },
            [CARDBOARD]: {
                [BENNETT_ODIN_DEPTHS]: true,
            },
            [FLAT]: {
                [OCEAN_DEPTHS_CAVES_LEFT]: true,
                [OCEAN_DEPTHS_CAVES_RIGHT]: true,
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
                [OCEAN_FLOOR_VOLCANOES]: true,
                [OCEAN_FLOOR_ROCKS]: true,
                [DREAM_OCEAN_FLOOR]: true,
            },
            [CARDBOARD]: {
                [BUDDHA_CAVE_SHRINE]: true,
                [BENNETT_OCEAN_FLOOR]: true,
                [ODIN_OCEAN_FLOOR]: true,
            },
            [CUTOUT]: {
                [OCEAN_FLOOR_PLANTS_CENTRE]: true,
                [OCEAN_FLOOR_PLANTS_LEFT]: true,
                [OCEAN_FLOOR_PLANTS_RIGHT]: true,
            },
            [PANEL]: {
                [OCEAN_CAVE_INTERIOR_LEFT]: true,
                [OCEAN_CAVE_INTERIOR_RIGHT]: true,
                [OCEAN_CAVE_EXTERIOR_LEFT]: true,
                [OCEAN_CAVE_EXTERIOR_RIGHT]: true,
            },
            [PUPPET]: {
                [OCEAN_FLOOR_FISH]: true,
            },
        },
        cubes: OCEAN_FLOOR_KEY,
        sky: { season: SEASON_OCEAN_SIDE },
    },
]
