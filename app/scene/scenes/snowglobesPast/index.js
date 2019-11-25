import {
    BENNETT,
    FATHER,
    SASHA_BENNETT
} from '../../../constants/scene/actors'
import { PAST } from '../../../constants/scene/actors/songs'
import { COMFORTING_HUMILIATED } from '../../../constants/scene/actors/sashaBennett'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [PAST]: {
            yIndex: 1,
            xPosition: 1.5
        }
    },
    [FATHER]: {
        [PAST]: {
            yIndex: 1,
            xPosition: 3
        }
    },
    [SASHA_BENNETT]: {
        [COMFORTING_HUMILIATED]: {
            yIndex: 2,
            xPosition: 8
        }
    }
}

export default ARRANGEMENTS_ACTORS
