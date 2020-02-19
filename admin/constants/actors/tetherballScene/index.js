import {
    ANDREW,
    BRAD_BENNETT,
    SASHA
} from '../../../../app/constants/scene/actors'
import { FEIGNING_FEAR } from '../../../../app/constants/scene/actors/andrew'
import { TYING_TETHER } from '../../../../app/constants/scene/actors/bradBennett'
import { INDIGNANT } from '../../../../app/constants/scene/actors/sasha'

const INSTANCES = [
    {
        type: SASHA,
        instance: INDIGNANT
    },
    {
        type: ANDREW,
        instance: FEIGNING_FEAR
    },
    {
        type: BRAD_BENNETT,
        instance: TYING_TETHER
    }
]

export default INSTANCES
