import {
    BENNETT,
    CATHERINE
} from 'constants/scene/actors'
import { SOLICITING_OPINION } from 'constants/scene/actors/instances/bennett'
import { QUIPPING } from 'constants/scene/actors/instances/catherine'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [SOLICITING_OPINION]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [CATHERINE]: {
        [QUIPPING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
