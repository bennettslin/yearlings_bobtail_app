import {
    ANDREW,
    BRAD_BENNETT,
    SASHA,
} from '../../../../src/constants/scene/actors'
import { FEIGNING_FEAR } from '../../../../src/constants/scene/actors/andrew'
import { TYING_TETHER } from '../../../../src/constants/scene/actors/bradBennett'
import { INDIGNANT } from '../../../../src/constants/scene/actors/sasha'

export default [
    {
        type: SASHA,
        instance: INDIGNANT,
    },
    {
        type: ANDREW,
        instance: FEIGNING_FEAR,
    },
    {
        type: BRAD_BENNETT,
        instance: TYING_TETHER,
    },
]
