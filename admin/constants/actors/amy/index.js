import {
    AMY,
    AMY_NESTOR_TOMER,
    AMY_STEPHANIE
} from '../../../../app/constants/scene/actors'
import {
    SMOKER,
    DOCTOR
} from '../../../../app/constants/scene/actors/amy'
import { OFFICER } from '../../../../app/constants/scene/actors/amyNestorTomer'
import { SQUEEZING } from '../../../../app/constants/scene/actors/amyStephanie'
import {
    FLIRTING,
    MINGLING,
    EPILOGUE,
    PROTESTER
} from '../../../../app/constants/scene/actors/songs'

const INSTANCES = [
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
        type: AMY,
        instance: SMOKER
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
