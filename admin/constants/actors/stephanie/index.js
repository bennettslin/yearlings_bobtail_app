import {
    STEPHANIE,
    AMY_STEPHANIE,
    BENNETT_STEPHANIE,
    MIRIAM_STEPHANIE
} from 'constants/scene/actors'
import {
    BENNETT_KEYBOARD,
    FLAPPER,
    BENNETT_DEFIANT,
    BENNETT_RECORDING
} from 'constants/scene/actors/stephanie'
import { SQUEEZING } from 'constants/scene/actors/amyStephanie'
import {
    HORSING,
    DRYING_TEARS
} from 'constants/scene/actors/bennettStephanie'
import { MISCHIEVOUS_BANJO } from 'constants/scene/actors/miriamStephanie'

const INSTANCES = [
    {
        actor: STEPHANIE,
        instance: BENNETT_KEYBOARD
    },
    {
        actor: STEPHANIE,
        instance: FLAPPER
    },
    {
        actor: AMY_STEPHANIE,
        instance: SQUEEZING
    },
    {
        actor: STEPHANIE,
        instance: BENNETT_DEFIANT
    },
    {
        actor: BENNETT_STEPHANIE,
        instance: HORSING
    },
    {
        actor: BENNETT_STEPHANIE,
        instance: DRYING_TEARS
    },
    {
        actor: MIRIAM_STEPHANIE,
        instance: MISCHIEVOUS_BANJO
    },
    {
        actor: STEPHANIE,
        instance: BENNETT_RECORDING
    }
]

export default INSTANCES
