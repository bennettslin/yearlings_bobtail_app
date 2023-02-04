/**
 * TODO: References, decide on where to put quotations marks. Balance between
 * not being clear and being too obvious.
 */
import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
} from '../../../../src/constants/scene/things'
import {
    ATTIC_KEY,
    CEMETERY_KEY,
    ROYCE_HALL_KEY,
    STATION_WAGON_KEY,
    STEAM_TUNNEL_KEY,
    WALGREENS_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    SEASON_SUMMER,
    SEASON_THOUGHT,
    TIME_NIGHT,
    TIME_TWILIGHT,
} from '../../../../src/constants/scene/sky'
import {
    BENNETT,
    ANA,
    ANA_HOWIE,
    HOWIE,
    TOMER,
} from '../../../../src/constants/scene/actors'
import {
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    ATTIC,
} from '../../../../src/constants/scene/actors/songs'
import {
    LOS_ANGELES_BACKDROP,
    PHARMACY_CEL,
} from '../../../../src/constants/scene/things/backdrops'
import {
    CONSTELLATION_TARPIT,
    CONSTELLATION_SIBLING,
} from '../../../../src/constants/scene/things/bubbles'
import {
    UCLA_TREE__LEFT,
    UCLA_TREE__RIGHT,
    PHARMACY_AISLE,
    STEAM_PIPES,
    GRAVESTONE,
    STORAGE_BOXES,
    STORAGE_CHEST,
    HOWIE_FRIDGE,
    TELEVISION,
} from '../../../../src/constants/scene/things/cutouts'
import {
    STEPLADDER,
    PUSH_BROOM,
    EVIAN_BOTTLES,
} from '../../../../src/constants/scene/things/fixtures'
import {
    ROYCE_HALL,
    CEMETERY_HILLS_LEFT,
    CEMETERY_HILLS_RIGHT,
    DRIVING_HOUSE__SINGLE,
    DISTANT_BUILDINGS,
} from '../../../../src/constants/scene/things/flats'
import {
    SHADOW_MONGOL,
    SHADOW_VIKING_FAR,
    SHADOW_VIKING_NEAR,
    SATURN_EXTERIOR,
    SATURN_INTERIOR,
    SATURN_SEAT,
    SATURN_SEAT_DOWN,
    ATTIC_COUCH,
    ATTIC_ARMREST__LEFT,
    ATTIC_ARMREST__RIGHT,
} from '../../../../src/constants/scene/things/panels'
import { ATTIC_PILLOW } from '../../../../src/constants/scene/things/furnitures'

export default [
    {
        unitIndex: 1,
        description: `Abbey Road`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking',
                    instance: ABBEY_ROAD,
                },
                [ANA]: {
                    description: 'side, walking',
                    instance: ABBEY_ROAD,
                },
                [HOWIE]: {
                    description: 'side, walking',
                    instance: ABBEY_ROAD,
                },
                [TOMER]: {
                    description: 'side, walking',
                    instance: ABBEY_ROAD,
                },
            },
            [BACKDROP]: {
                [LOS_ANGELES_BACKDROP]: true,
            },
            [CUTOUT]: {
                [UCLA_TREE__LEFT]: true,
                [UCLA_TREE__RIGHT]: true,
            },
            [FLAT]: {
                [DISTANT_BUILDINGS]: true,
                [ROYCE_HALL]: true,
            },
        },
        cubes: ROYCE_HALL_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER },
    },
    {
        unitIndex: 3,
        description: `The gang is at Walgreens, picking out cough syrup.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, holding body and gesturing its smallness',
                    instance: WALGREENS,
                },
                [ANA]: {
                    description: 'side angle, reading bottle intently',
                    instance: WALGREENS,
                },
                [HOWIE]: {
                    description: 'side angle, holding large bottle',
                    instance: WALGREENS,
                },
                [TOMER]: {
                    description: 'side angle, feigning superiority',
                    instance: WALGREENS,
                },
            },
            [BACKDROP]: {
                [PHARMACY_CEL]: true,
            },
            [CUTOUT]: {
                [PHARMACY_AISLE]: true,
            },
        },
        cubes: WALGREENS_KEY,
        sky: { season: SEASON_THOUGHT },
    },
    {
        unitIndex: 6,
        description: `The gang is wandering through the steam tunnels. Bennett is blathering, Howie is half paying attention. Tomer and Ana are play fighting.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, blathering',
                    instance: STEAM_TUNNEL,
                },
                [ANA]: {
                    description: 'side angle, play fighting',
                    instance: STEAM_TUNNEL,
                },
                [HOWIE]: {
                    description: 'side angle, bored by conversation',
                    instance: STEAM_TUNNEL,
                },
                [TOMER]: {
                    description: 'side angle, play fighting',
                    instance: STEAM_TUNNEL,
                },
            },
            [CUTOUT]: {
                [STEAM_PIPES]: true,
            },
            [FIXTURE]: {
                [STEPLADDER]: true,
                [PUSH_BROOM]: true,
            },
            [PANEL]: {
                [SHADOW_MONGOL]: true,
                [SHADOW_VIKING_FAR]: true,
                [SHADOW_VIKING_NEAR]: true,
            },
        },
        cubes: STEAM_TUNNEL_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER },
    },
    {
        unitIndex: 9,
        description: `The gang is at the cemetery, standing over Adam's grave. Tomer is kneeling and pouring a bottle of water over the gravestone. Bennett is looking up. Howie and Ana are tentatively cuddling.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front, looking upwards, inspired',
                    instance: CEMETERY,
                },
                [ANA_HOWIE]: {
                    description: 'side angle, shivering, feeling comforted',
                    instance: CEMETERY,
                },
                [TOMER]: {
                    description: 'side angle, squatting, pouring water on grave',
                    instance: CEMETERY,
                },
            },
            [BACKDROP]: {
                [LOS_ANGELES_BACKDROP]: true,
            },
            [CUTOUT]: {
                [GRAVESTONE]: true,
            },
            [FLAT]: {
                [CEMETERY_HILLS_LEFT]: true,
                [CEMETERY_HILLS_RIGHT]: true,
            },
        },
        cubes: CEMETERY_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER },
    },
    {
        unitIndex: 11,
        description: `The gang is driving in a car. Bennett is sitting in the back with his eyes closed. He pictures himself and Sita as a mastodon and a sabre-tooth tiger, and his brother and sister as Loki and Freyja.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side angle, sleeping in car',
                    instance: STATION_WAGON,
                },
                [ANA]: {
                    description: 'side, sleeping in car',
                    instance: STATION_WAGON,
                },
                [HOWIE]: {
                    description: 'driving car, alert, wigging out',
                    instance: STATION_WAGON,
                },
                [TOMER]: {
                    description: 'back angle, sleeping in car',
                    instance: STATION_WAGON,
                },
            },
            [BACKDROP]: {
                [LOS_ANGELES_BACKDROP]: true,
            },
            [BUBBLE]: {
                [CONSTELLATION_TARPIT]: true,
                [CONSTELLATION_SIBLING]: true,
            },
            [FIXTURE]: {
                [EVIAN_BOTTLES]: true,
            },
            [FLAT]: {
                [DISTANT_BUILDINGS]: true,
                [DRIVING_HOUSE__SINGLE]: true,
            },
            [PANEL]: {
                [SATURN_INTERIOR]: true,
                [SATURN_SEAT]: true,
                [SATURN_SEAT_DOWN]: true,
                [SATURN_EXTERIOR]: true,
            },
        },
        cubes: STATION_WAGON_KEY,
        sky: { time: TIME_TWILIGHT, season: SEASON_SUMMER },
    },
    {
        unitIndex: 15,
        description: `Bennett is in the attic, huddled under a blanket on a couch, lit up by an old television facing away from the audience. Howie is downstairs, in anguish, clutching at his head.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'lying on couch, watching TV, alert',
                    instance: ATTIC,
                },
                [HOWIE]: {
                    description: 'downstairs, in agony',
                    instance: ATTIC,
                },
            },
            [CUTOUT]: {
                [STORAGE_BOXES]: true,
                [STORAGE_CHEST]: true,
                [HOWIE_FRIDGE]: true,
                [TELEVISION]: true,
            },
            [FURNITURE]: {
                [ATTIC_PILLOW]: true,
            },
            [PANEL]: {
                [ATTIC_COUCH]: true,
                [ATTIC_ARMREST__LEFT]: true,
                [ATTIC_ARMREST__RIGHT]: true,
            },
        },
        cubes: ATTIC_KEY,
        sky: { time: TIME_TWILIGHT, season: SEASON_SUMMER },
    },
]
