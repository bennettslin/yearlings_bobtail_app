import { ACTOR } from '../../../constants/scene'
import { LOGUE_KEY } from '../../../constants/scene/scenes'
import { SEASON_STAGE } from '../../../scene/sky/keys'
import { OLD_BENNETT } from '../../../constants/scene/actors'
import { PROLOGUE } from '../../../constants/scene/actors/songs'

export default [
    {
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
        sky: { season: SEASON_STAGE }
    }
]
