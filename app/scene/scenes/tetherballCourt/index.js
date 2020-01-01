import {
    BRAD_BENNETT,
    SASHA,
    ANDREW
} from '../../../constants/scene/actors'
import { FEIGNING_FEAR } from '../../../constants/scene/actors/andrew'
import { TYING_TETHER } from '../../../constants/scene/actors/bradBennett'
import { INDIGNANT } from '../../../constants/scene/actors/sasha'

export default {
    [BRAD_BENNETT]: {
        [TYING_TETHER]: {
            yIndex: 4,
            xPosition: 8
        }
    },
    [SASHA]: {
        [INDIGNANT]: {
            yIndex: 5,
            xPosition: 3
        }
    },
    [ANDREW]: {
        [FEIGNING_FEAR]: {
            yIndex: 5,
            xPosition: 5
        }
    }
}
