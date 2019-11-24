import {
    BENNETT,
    STEPHANIE
} from 'constants/scene/actors'
import { COUCH_READING } from 'constants/scene/actors/instances/bennett'
import { BENNETT_KEYBOARD } from 'constants/scene/actors/instances/stephanie'

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
