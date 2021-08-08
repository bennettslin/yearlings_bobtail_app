import { ACTOR } from '../../../../src/constants/scene'
import { LOGUE_KEY } from '../../../../src/constants/scene/scenes'
import { SEASON_STAGE } from '../../../../src/constants/scene/sky'
import { OLD_BENNETT } from '../../../../src/constants/scene/actors'
import { PROLOGUE } from '../../../../src/constants/scene/actors/songs'

export default [
    {
        description: `Old Bennett is standing onstage, addressing the audience.`,
        presences: {
            [ACTOR]: {
                [OLD_BENNETT]: {
                    description: 'standing, facing forward, welcoming',
                    instance: PROLOGUE,
                },
            },
        },
        cubes: LOGUE_KEY,
        sky: { season: SEASON_STAGE },
    },
]
