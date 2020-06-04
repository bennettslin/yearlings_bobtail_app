import {
    BENNETT,
    STEPHANIE
} from '../../../../../../app/constants/scene/actors'
import { COUCH_READING } from '../../../../../../app/constants/scene/actors/bennett'
import { BENNETT_KEYBOARD } from '../../../../../../app/constants/scene/actors/stephanie'

export default {
    [BENNETT]: {
        [COUCH_READING]: {
            yIndex: 3,
            xPosition: 2,
            zOffset: -1.01
        }
    },
    [STEPHANIE]: {
        [BENNETT_KEYBOARD]: {
            yIndex: 5,
            xPosition: 6.5
        }
    }
}
