import {
    STEPHANIE,
    AMY_STEPHANIE,
    BENNETT_STEPHANIE,
    MIRIAM_STEPHANIE,
} from '../../../../src/constants/scene/actors'
import {
    BENNETT_KEYBOARD,
    FLAPPER,
    BENNETT_DEFIANT,
    BENNETT_RECORDING,
} from '../../../../src/constants/scene/actors/stephanie'
import { SQUEEZING } from '../../../../src/constants/scene/actors/amyStephanie'
import {
    HORSING,
    DRYING_TEARS,
} from '../../../../src/constants/scene/actors/bennettStephanie'
import { MISCHIEVOUS_BANJO } from '../../../../src/constants/scene/actors/miriamStephanie'
import {
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
        type: STEPHANIE,
        instance: MINGLING,
    },
    {
        type: STEPHANIE,
        instance: EPILOGUE,
    },
    {
        type: STEPHANIE,
        instance: BENNETT_KEYBOARD,
    },
    {
        type: STEPHANIE,
        instance: BENNETT_DEFIANT,
    },
    {
        type: BENNETT_STEPHANIE,
        instance: HORSING,
    },
    {
        type: BENNETT_STEPHANIE,
        instance: DRYING_TEARS,
    },
    {
        type: MIRIAM_STEPHANIE,
        instance: MISCHIEVOUS_BANJO,
    },
    {
        type: STEPHANIE,
        instance: BENNETT_RECORDING,
    },
    {
        type: STEPHANIE,
        instance: FLAPPER,
    },
    {
        type: STEPHANIE,
        instance: PROTESTER,
    },
]
