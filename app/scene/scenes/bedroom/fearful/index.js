import {
    PRETEEN_BENNETT,
    MOTHER
} from 'constants/scene/actors'
import { COMFORTING } from 'constants/scene/actors/mother'
import { FEARFUL } from 'constants/scene/actors/preteenBennett'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [FEARFUL]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [MOTHER]: {
        [COMFORTING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
