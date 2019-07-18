import { ACTOR } from 'constants/scene'
import { OLD_BENNETT } from 'constants/scene/actors'
import { PROLOGUE } from 'constants/scene/actors/instances/songs'

export default [
    {
        unitIndex: 1,
        description: `Old Bennett is standing onstage, addressing the audience.`,
        presences: {
            [ACTOR]: {
                [OLD_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'standing, facing forward, welcoming',
                    instance: PROLOGUE
                }
            }
        }
    }
]
