/**
 * TODO: References, decide on where to put quotations marks. Balance between
 * not being clear and being too obvious.
 */
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
    SEASON_SPRING
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

module.exports = [
    {
        unitIndex: 1,
        description: `Abbey Road`,
        presences: {
            actors: {
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
            actors: {
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
            }
        },
        cubes: WALGREENS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 6,
        description: `The gang is wandering through the steam tunnels. Bennett is blathering, Howie is half paying attention. Tomer and Ana are play fighting.`,
        presences: {
            actors: {
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
            actors: {
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
            actors: {
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
            actors: {
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
            }
        },
        cubes: ATTIC_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    }
]
