import {
    TOMER,
    AMY_NESTOR_TOMER
} from 'constants/scene/actors'
import {
    SHANE_BUYING,
    SHANE_SPILLING
} from 'constants/scene/actors/tomer'
import { OFFICER } from 'constants/scene/actors/amyNestorTomer'

const INSTANCES = [
    {
        actor: TOMER,
        instance: SHANE_BUYING
    },
    {
        actor: TOMER,
        instance: SHANE_SPILLING
    },
    {
        actor: AMY_NESTOR_TOMER,
        instance: OFFICER
    }
]

export default INSTANCES
