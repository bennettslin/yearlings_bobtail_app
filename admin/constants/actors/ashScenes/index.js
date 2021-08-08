import {
    AMY,
    BENNETT,
    CATHERINE,
    WADE,
} from '../../../../src/constants/scene/actors'
import { SMOKER } from '../../../../src/constants/scene/actors/amy'
import {
    CATHOLIC_IDEA,
    PIOUS,
} from '../../../../src/constants/scene/actors/bennett'
import { PUZZLED } from '../../../../src/constants/scene/actors/catherine'
import { CATHOLIC_GUY } from '../../../../src/constants/scene/actors/wade'

export default [
    {
        type: WADE,
        instance: CATHOLIC_GUY,
    },
    {
        type: BENNETT,
        instance: CATHOLIC_IDEA,
    },
    {
        type: AMY,
        instance: SMOKER,
    },
    {
        type: BENNETT,
        instance: PIOUS,
    },
    {
        type: CATHERINE,
        instance: PUZZLED,
    },
]
