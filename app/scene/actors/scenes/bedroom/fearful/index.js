import {
    PRETEEN_BENNETT,
    MOTHER
} from '../../../keys'
import { COMFORTING } from '../../../keys/instances/mother'
import { FEARFUL } from '../../../keys/instances/preteenBennett'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [FEARFUL]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MOTHER]: {
        [COMFORTING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
