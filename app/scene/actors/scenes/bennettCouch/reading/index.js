import {
    BENNETT,
    STEPHANIE
} from '../../../keys'
import { COUCH_READING } from '../../../keys/instances/bennett'
import { BENNETT_KEYBOARD } from '../../../keys/instances/stephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [COUCH_READING]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [STEPHANIE]: {
        [BENNETT_KEYBOARD]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
