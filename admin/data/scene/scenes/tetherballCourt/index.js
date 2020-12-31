import {
    BRAD_BENNETT,
    SASHA,
    ANDREW,
} from '../../../../../app/constants/scene/actors'
import { FEIGNING_FEAR } from '../../../../../app/constants/scene/actors/andrew'
import { TYING_TETHER } from '../../../../../app/constants/scene/actors/bradBennett'
import { INDIGNANT } from '../../../../../app/constants/scene/actors/sasha'

export default {
    [BRAD_BENNETT]: {
        [TYING_TETHER]: {
            yIndex: 5,
            xPosition: 8,
        },
    },
    [SASHA]: {
        [INDIGNANT]: {
            yIndex: 5,
            xPosition: 3,
        },
    },
    [ANDREW]: {
        [FEIGNING_FEAR]: {
            yIndex: 5,
            xPosition: 5,
        },
    },
}
