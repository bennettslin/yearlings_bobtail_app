import {
    BENNETT,
    STEPHANIE
} from 'constants/scene/actors'
import { COUCH_READING } from 'constants/scene/actors/bennett'
import { BENNETT_KEYBOARD } from 'constants/scene/actors/stephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [COUCH_READING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [STEPHANIE]: {
        [BENNETT_KEYBOARD]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
