import { ACTOR } from 'constants/scene'
import { OLD_BENNETT } from 'constants/scene/actors'
import { PROLOGUE } from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [OLD_BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: PROLOGUE
                }
            }
        }
    }
]
