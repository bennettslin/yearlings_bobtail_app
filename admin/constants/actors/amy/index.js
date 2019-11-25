import {
    AMY,
    AMY_NESTOR_TOMER,
    AMY_STEPHANIE
} from 'constants/scene/actors'
import {
    SMOKER,
    DOCTOR
} from 'constants/scene/actors/amy'
import { OFFICER } from 'constants/scene/actors/amyNestorTomer'
import { SQUEEZING } from 'constants/scene/actors/amyStephanie'

const INSTANCES = [
    {
        actor: AMY,
        instance: SMOKER
    },
    {
        actor: AMY_STEPHANIE,
        instance: SQUEEZING
    },
    {
        actor: AMY_NESTOR_TOMER,
        instance: OFFICER
    },
    {
        actor: AMY,
        instance: DOCTOR
    }
]

export default INSTANCES
