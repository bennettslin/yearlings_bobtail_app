import {
    AMY,
    AMY_NESTOR_TOMER,
    AMY_STEPHANIE,
} from '../../../../src/constants/scene/actors'
import {
    SMOKER,
    DOCTOR,
} from '../../../../src/constants/scene/actors/amy'
import { OFFICER } from '../../../../src/constants/scene/actors/amyNestorTomer'
import { SQUEEZING } from '../../../../src/constants/scene/actors/amyStephanie'
import {
    FLIRTING,
    MINGLING,
    EPILOGUE,
    PROTESTER,
} from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: AMY_STEPHANIE,
        instance: SQUEEZING,
    },
    {
        type: AMY,
        instance: FLIRTING,
    },
    {
        type: AMY,
        instance: MINGLING,
    },
    {
        type: AMY,
        instance: EPILOGUE,
    },
    {
        type: AMY,
        instance: SMOKER,
    },
    {
        type: AMY_NESTOR_TOMER,
        instance: OFFICER,
    },
    {
        type: AMY,
        instance: PROTESTER,
    },
    {
        type: AMY,
        instance: DOCTOR,
    },
]
