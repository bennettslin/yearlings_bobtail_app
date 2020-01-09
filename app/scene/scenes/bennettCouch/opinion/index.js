import {
    BENNETT,
    CATHERINE
} from 'constants/scene/actors'
import { SOLICITING_OPINION } from 'constants/scene/actors/bennett'
import { QUIPPING } from 'constants/scene/actors/catherine'

export default {
    [BENNETT]: {
        [SOLICITING_OPINION]: {
            yIndex: 4,
            xPosition: 4.5,
            zOffset: 0.5
        }
    },
    [CATHERINE]: {
        [QUIPPING]: {
            yIndex: 4,
            xPosition: 2.5,
            zOffset: 0.5
        }
    }
}
