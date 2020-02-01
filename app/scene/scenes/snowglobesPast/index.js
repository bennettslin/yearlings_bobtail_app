import {
    BENNETT,
    FATHER,
    SASHA_BENNETT
} from '../../../constants/scene/actors'
import { PAST } from '../../../constants/scene/actors/songs'
import { COMFORTING_HUMILIATED } from '../../../constants/scene/actors/sashaBennett'

export default {
    [BENNETT]: {
        [PAST]: {
            yIndex: 1,
            xPosition: 1.5,
            zOffset: 2
        }
    },
    [FATHER]: {
        [PAST]: {
            yIndex: 1,
            xPosition: 3,
            zOffset: 4
        }
    },
    [SASHA_BENNETT]: {
        [COMFORTING_HUMILIATED]: {
            yIndex: 3,
            xPosition: 7
        }
    }
}
