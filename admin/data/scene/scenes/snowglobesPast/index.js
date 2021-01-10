import {
    BENNETT,
    FATHER,
    SASHA_BENNETT,
} from '../../../../../app/constants/scene/actors'
import { PAST } from '../../../../../app/constants/scene/actors/songs'
import { COMFORTING_HUMILIATED } from '../../../../../app/constants/scene/actors/sashaBennett'

export default {
    [BENNETT]: {
        [PAST]: {
            yIndex: 0,
            xPosition: 0.6,
            zOffset: 2.9,
        },
    },
    [FATHER]: {
        [PAST]: {
            yIndex: 0,
            xPosition: 2.8,
            zOffset: 4,
        },
    },
    [SASHA_BENNETT]: {
        [COMFORTING_HUMILIATED]: {
            yIndex: 3,
            xPosition: 7.5,
            zOffset: -0.1,
        },
    },
}
