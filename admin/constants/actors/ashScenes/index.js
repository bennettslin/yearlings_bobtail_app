import {
    AMY,
    BENNETT,
    CATHERINE,
    WADE
} from 'constants/scene/actors'
import { SMOKER } from 'constants/scene/actors/amy'
import {
    CATHOLIC_IDEA,
    PIOUS
} from 'constants/scene/actors/bennett'
import { PUZZLED } from 'constants/scene/actors/catherine'
import { CATHOLIC_GUY } from 'constants/scene/actors/wade'

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
