/**
 * TODO: References, decide on where to put quotations marks. Balance between
 * not being clear and being too obvious.
 */
import {
    WALGREENS_KEY,
    STEAM_TUNNEL_KEY,
    HOWIE_ATTIC_KEY,
    UCLA_CAMPUS_KEY,
    CEMETERY_KEY,
    STATION_WAGON_KEY
} from 'constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SPRING
} from 'constants/sky'

import {
    BENNETT,
    ANA,
    HOWIE,
    TOMER
} from 'constants/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Abbey Road`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, walking'
            },
            [ANA]: {
                todo: true,
                workedHours: 3,
                description: 'side, walking'
            },
            [HOWIE]: {
                todo: true,
                workedHours: 3,
                description: 'side, walking'
            },
            [TOMER]: {
                todo: true,
                workedHours: 3,
                description: 'side, walking'
            }
        },
        cubes: UCLA_CAMPUS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 3,
        description: `The gang is at Walgreens, picking out cough syrup.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, holding body and gesturing its smallness'
            },
            [ANA]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, reading bottle intently'
            },
            [HOWIE]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, holding large bottle'
            },
            [TOMER]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, feigning superiority'
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, blathering'
            },
            [ANA]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, play fighting'
            },
            [HOWIE]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, bored by conversation'
            },
            [TOMER]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, play fighting'
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'front, looking upwards, inspired'
            },
            [ANA]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, shivering, feeling comforted'
            },
            [HOWIE]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, arm around Ana'
            },
            [TOMER]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, squatting, pouring water on grave'
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, sleeping in car'
            },
            [ANA]: {
                todo: true,
                workedHours: 3,
                description: 'side, sleeping in car'
            },
            [HOWIE]: {
                todo: true,
                workedHours: 3,
                description: 'driving car, alert, wigging out'
            },
            [TOMER]: {
                todo: true,
                workedHours: 3,
                description: 'back angle, sleeping in car'
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'lying on couch, watching TV, alert'
            },
            [HOWIE]: {
                todo: true,
                workedHours: 3,
                description: 'downstairs, in agony'
            }
        },
        cubes: HOWIE_ATTIC_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    }
]
