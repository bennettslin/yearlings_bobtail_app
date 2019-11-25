import {
    NESTOR,
    AMY_NESTOR_TOMER
} from 'constants/scene/actors'
import {
    JOGGER,
    INJURED
} from 'constants/scene/actors/nestor'
import { OFFICER } from 'constants/scene/actors/amyNestorTomer'

const INSTANCES = [
    {
        actor: NESTOR,
        instance: JOGGER
    },
    {
        actor: NESTOR,
        instance: INJURED
    },
    {
        actor: AMY_NESTOR_TOMER,
        instance: OFFICER
    }
]

export default INSTANCES
