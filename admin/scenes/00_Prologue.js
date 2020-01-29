import { ACTOR } from 'constants/scene'
import { OLD_BENNETT } from 'constants/scene/actors'
import { PROLOGUE } from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [OLD_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: PROLOGUE
                }
            }
        }
    }
]
