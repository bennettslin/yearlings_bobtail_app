/**
 * TODO: References, decide on where to put quotations marks. Balance between
 * not being clear and being too obvious.
 */
import {
    ACTORS,
    BACKDROPS,
    BUBBLES,
    CUTOUTS,
    FIXTURES,
    FLATS,
    FURNITURES,
    PANELS
} from 'constants/scene'

import {
    WALGREENS_KEY,
    STEAM_TUNNEL_KEY,
    ATTIC_KEY,
    ROYCE_HALL_KEY,
    CEMETERY_KEY,
    STATION_WAGON_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SPRING,
    SEASON_PAST
} from 'scene/sky'

import {
    BENNETT,
    ANA,
    HOWIE,
    TOMER
} from 'scene/actorKeys'

import {
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    ATTIC
} from 'scene/instanceKeys/songs'

import {
    UCLA_BACKDROP,
    PHARMACY_THOUGHT_BACKDROP,
    CEMETERY_BACKDROP,
    LOS_ANGELES_BACKDROP
} from 'scene/backdropKeys'

import {
    TARPIT_THOUGHT,
    SIBLING_THOUGHT
} from 'scene/bubbleKeys'

import {
    STORAGE_BOXES,
    STORAGE_CHEST,
    HOWIE_FRIDGE,
    TELEVISION
} from 'scene/cutoutKeys'

import {
    PUSH_BROOM,
    ARRANGEMENT_PUSH_BROOM_TUNNEL,
    GRAVESTONE,
    EVIAN_BOTTLES
} from 'scene/fixtureKeys'

import {
    ROYCE_HALL,
    PHARMACY_AISLE,
    STEAM_PIPES,
    CEMETERY_HILLS_NEAR
} from 'scene/flatKeys'

import {
    SATURN_SEAT_FRONT,
    SATURN_SEAT_REAR,
    SATURN_DASHBOARD,
    ATTIC_CUSHIONS
} from 'scene/furnitureKeys'

import {
    SATURN_EXTERIOR,
    SATURN_INTERIOR
} from 'scene/panelKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Abbey Road`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking',
                    instance: ABBEY_ROAD
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking',
                    instance: ABBEY_ROAD
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking',
                    instance: ABBEY_ROAD
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking',
                    instance: ABBEY_ROAD
                }
            },
            [BACKDROPS]: {
                [UCLA_BACKDROP]: true
            },
            [FLATS]: {
                [ROYCE_HALL]: true
            }
        },
        cubes: ROYCE_HALL_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 3,
        description: `The gang is at Walgreens, picking out cough syrup.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, holding body and gesturing its smallness',
                    instance: WALGREENS
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, reading bottle intently',
                    instance: WALGREENS
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, holding large bottle',
                    instance: WALGREENS
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, feigning superiority',
                    instance: WALGREENS
                }
            },
            [BACKDROPS]: {
                [PHARMACY_THOUGHT_BACKDROP]: true
            },
            [FLATS]: {
                [PHARMACY_AISLE]: true
            }
        },
        cubes: WALGREENS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_PAST
        }
    },
    {
        unitIndex: 6,
        description: `The gang is wandering through the steam tunnels. Bennett is blathering, Howie is half paying attention. Tomer and Ana are play fighting.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, blathering',
                    instance: STEAM_TUNNEL
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, play fighting',
                    instance: STEAM_TUNNEL
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, bored by conversation',
                    instance: STEAM_TUNNEL
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, play fighting',
                    instance: STEAM_TUNNEL
                }
            },
            [FIXTURES]: {
                [PUSH_BROOM]: ARRANGEMENT_PUSH_BROOM_TUNNEL
            },
            [FLATS]: {
                [STEAM_PIPES]: true
            }
        },
        cubes: STEAM_TUNNEL_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 9,
        description: `The gang is at the cemetery, standing over Adam's grave. Tomer is kneeling and pouring a bottle of water over the gravestone. Bennett is looking up. Howie and Ana are tentatively cuddling.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, looking upwards, inspired',
                    instance: CEMETERY
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, shivering, feeling comforted',
                    instance: CEMETERY
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, arm around Ana',
                    instance: CEMETERY
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, squatting, pouring water on grave',
                    instance: CEMETERY
                }
            },
            [BACKDROPS]: {
                [CEMETERY_BACKDROP]: true
            },
            [FIXTURES]: {
                [GRAVESTONE]: true
            },
            [FLATS]: {
                [CEMETERY_HILLS_NEAR]: true
            }
        },
        cubes: CEMETERY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 11,
        description: `The gang is driving in a car. Bennett is sitting in the back with his eyes closed. He pictures himself and Sita as a mastodon and a sabre-tooth tiger, and his brother and sister as Loki and Freyja.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, sleeping in car',
                    instance: STATION_WAGON
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, sleeping in car',
                    instance: STATION_WAGON
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'driving car, alert, wigging out',
                    instance: STATION_WAGON
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back angle, sleeping in car',
                    instance: STATION_WAGON
                }
            },
            [BACKDROPS]: {
                [LOS_ANGELES_BACKDROP]: true
            },
            [BUBBLES]: {
                [TARPIT_THOUGHT]: true,
                [SIBLING_THOUGHT]: true
            },
            [FIXTURES]: {
                [EVIAN_BOTTLES]: true
            },
            [FURNITURES]: {
                [SATURN_SEAT_REAR]: true,
                [SATURN_SEAT_FRONT]: true,
                [SATURN_DASHBOARD]: true
            },
            [PANELS]: {
                [SATURN_EXTERIOR]: true,
                [SATURN_INTERIOR]: true
            }
        },
        cubes: STATION_WAGON_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 15,
        description: `Bennett is in the attic, huddled under a blanket on a couch, lit up by an old television facing away from the audience. Howie is downstairs, in anguish, clutching at his head.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'lying on couch, watching TV, alert',
                    instance: ATTIC
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'downstairs, in agony',
                    instance: ATTIC
                }
            },
            [CUTOUTS]: {
                [STORAGE_BOXES]: true,
                [STORAGE_CHEST]: true,
                [HOWIE_FRIDGE]: true,
                [TELEVISION]: true
            },
            [FURNITURES]: {
                [ATTIC_CUSHIONS]: true
            }
        },
        cubes: ATTIC_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    }
]
