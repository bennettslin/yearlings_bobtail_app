import {
    LIZ,
    KHARI
} from '../../../../constants/scene/actors'
import { CONCERNED } from '../../../../constants/scene/actors/khari'
import { NOT_HUNGRY } from '../../../../constants/scene/actors/liz'

export default {
    [LIZ]: {
        [NOT_HUNGRY]: {
            yIndex: 4,
            xPosition: 3.5
        }
    },
    [KHARI]: {
        [CONCERNED]: {
            yIndex: 1,
            xPosition: 5.5,
            zOffset: -2.5
        }
    }
}
