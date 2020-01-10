import {
    BENNETT,
    STEPHANIE
} from 'constants/scene/actors'
import { COUCH_READING } from 'constants/scene/actors/bennett'
import { BENNETT_KEYBOARD } from 'constants/scene/actors/stephanie'

export default {
    [BENNETT]: {
        [COUCH_READING]: {
            yIndex: 3,
            xPosition: 2,
            zOffset: -1
        }
    },
    [STEPHANIE]: {
        [BENNETT_KEYBOARD]: {
            yIndex: 5,
            xPosition: 8
        }
    }
}
