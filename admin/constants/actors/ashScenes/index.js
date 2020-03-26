import {
    AMY,
    BENNETT,
    CATHERINE,
    WADE
} from '../../../../app/constants/scene/actors'
import { SMOKER } from '../../../../app/constants/scene/actors/amy'
import {
    CATHOLIC_IDEA,
    PIOUS
} from '../../../../app/constants/scene/actors/bennett'
import { PUZZLED } from '../../../../app/constants/scene/actors/catherine'
import { CATHOLIC_GUY } from '../../../../app/constants/scene/actors/wade'

const INSTANCES = [
    {
        type: WADE,
        instance: CATHOLIC_GUY
    },
    {
        type: BENNETT,
        instance: CATHOLIC_IDEA
    },
    {
        type: AMY,
        instance: SMOKER
    },
    {
        type: BENNETT,
        instance: PIOUS
    },
    {
        type: CATHERINE,
        instance: PUZZLED
    }
]

export default INSTANCES
