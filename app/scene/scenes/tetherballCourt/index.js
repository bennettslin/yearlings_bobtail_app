import {
    BRAD_BENNETT,
    SASHA,
    ANDREW
} from '../../../constants/scene/actors'
import { FEIGNING_FEAR } from '../../../constants/scene/actors/andrew'
import { TYING_TETHER } from '../../../constants/scene/actors/bradBennett'
import { INDIGNANT } from '../../../constants/scene/actors/sasha'

const ARRANGEMENTS_ACTORS = {
    [BRAD_BENNETT]: {
        [TYING_TETHER]: {
            yIndex: 3,
            xPosition: 8
        }
    },
    [SASHA]: {
        [INDIGNANT]: {
            yIndex: 4,
            xPosition: 3
        }
    },
    [ANDREW]: {
        [FEIGNING_FEAR]: {
            yIndex: 4,
            xPosition: 5
        }
    }
}

export default ARRANGEMENTS_ACTORS
