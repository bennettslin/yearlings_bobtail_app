import {
    LIZ,
    KHARI
} from 'constants/scene/actors'
import { ARRIVED } from 'constants/scene/actors/khari'
import { OPENING_DOOR } from 'constants/scene/actors/liz'

export default {
    [LIZ]: {
        [OPENING_DOOR]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [KHARI]: {
        [ARRIVED]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}
