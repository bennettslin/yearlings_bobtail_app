import { ACTOR } from '../../../app/constants/scene'
import { LOGUE_KEY } from '../../../app/constants/scene/scenes'
import { SEASON_STAGE } from '../../../app/scene/sky/keys'
import { OLD_BENNETT } from '../../../app/constants/scene/actors'
import { PROLOGUE } from '../../../app/constants/scene/actors/songs'

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
