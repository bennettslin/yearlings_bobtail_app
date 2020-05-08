import { ACTOR } from '../../app/constants/scene'
import { OLD_BENNETT } from '../../app/constants/scene/actors'
import { PROLOGUE } from '../../app/constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [OLD_BENNETT]: {
                    instance: PROLOGUE
                }
            }
        }
    }
]
