import { LOGUE_KEY } from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from 'scene/sky'

import { OLD_BENNETT } from 'scene/actorKeys'

import { PROLOGUE } from 'scene/instanceKeys/songs'

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
                    instance: PROLOGUE
                }
            }
        },
        cubes: LOGUE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_INDOOR
        }
    }
]
