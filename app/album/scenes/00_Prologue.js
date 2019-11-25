import { ACTOR } from '../../constants/scene'
import { LOGUE_KEY } from '../../constants/scene/scenes'
import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from '../../scene/sky/keys'
import { OLD_BENNETT } from '../../constants/scene/actors'
import { PROLOGUE } from '../../constants/scene/actors/songs'

export default [
    {
        unitIndex: 1,
        description: `Old Bennett is standing onstage, addressing the audience.`,
        presences: {
            [ACTOR]: {
                [OLD_BENNETT]: {
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
