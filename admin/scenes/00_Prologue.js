import { ACTOR } from 'constants/scene'
import { OLD_BENNETT } from 'constants/scene/actors'
import { PROLOGUE } from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [OLD_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
                    instance: PROLOGUE
                }
            }
        }
    }
]
