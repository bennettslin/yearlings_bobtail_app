import { ACTOR } from '../../../../../../../src/constants/scene'
import { OLD_BENNETT } from '../../../../../../../src/constants/scene/actors'
import { PROLOGUE } from '../../../../../../../src/constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [OLD_BENNETT]: {
                    instance: PROLOGUE,
                },
            },
        },
    },
]
