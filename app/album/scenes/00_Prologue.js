import { LOGUE_KEY } from '../../constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from '../../constants/sky'

import { OLD_BENNETT } from '../../constants/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Old Bennett is standing onstage, addressing the audience.`,
        presences: {
            actors: {
                [OLD_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'standing, facing forward, welcoming',
                    instance: 'test',
                    arrangement: {
                        yIndex: 5,
                        xFloat: 4,
                        zOffset: 0,
                        xWidth: 1,
                        zHeight: 3
                    }
                }
            },
        },
        cubes: LOGUE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_INDOOR
        }
    }
]
