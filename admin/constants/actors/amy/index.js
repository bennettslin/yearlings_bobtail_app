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
import {
    FLIRTING,
    MINGLING,
    EPILOGUE,
    PROTESTER
} from 'constants/scene/actors/songs'

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
        actor: AMY,
        instance: FLIRTING
    },
    {
        actor: AMY,
        instance: MINGLING
    },
    {
        actor: AMY,
        instance: EPILOGUE
    },
    {
        actor: AMY_NESTOR_TOMER,
        instance: OFFICER
    },
    {
        actor: AMY,
        instance: PROTESTER
    },
    {
        actor: AMY,
        instance: DOCTOR
    }
]

export default INSTANCES
