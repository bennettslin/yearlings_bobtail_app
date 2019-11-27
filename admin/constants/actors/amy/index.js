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
        type: AMY,
        instance: SMOKER
    },
    {
        type: AMY_STEPHANIE,
        instance: SQUEEZING
    },
    {
        type: AMY,
        instance: FLIRTING
    },
    {
        type: AMY,
        instance: MINGLING
    },
    {
        type: AMY,
        instance: EPILOGUE
    },
    {
        type: AMY_NESTOR_TOMER,
        instance: OFFICER
    },
    {
        type: AMY,
        instance: PROTESTER
    },
    {
        type: AMY,
        instance: DOCTOR
    }
]

export default INSTANCES
