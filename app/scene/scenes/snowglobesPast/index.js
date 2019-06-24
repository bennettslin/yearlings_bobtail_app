import {
    BENNETT,
    FATHER,
    SASHA_BENNETT
} from 'constants/scene/actors'
import { PAST } from 'constants/scene/actors/instances/songs'
import { COMFORTING_HUMILIATED } from 'constants/scene/actors/instances/sashaBennett'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [PAST]: {
            yIndex: 1,
            arrangement: {
                xPosition: 1.5,
                xWidth: 1,
                zHeight: 5,
                zOffset: 2
            }
        }
    },
    [FATHER]: {
        [PAST]: {
            yIndex: 1,
            arrangement: {
                xPosition: 3,
                xWidth: 1,
                zHeight: 5,
                zOffset: 2
            }
        }
    },
    [SASHA_BENNETT]: {
        [COMFORTING_HUMILIATED]: {
            yIndex: 2,
            arrangement: {
                xPosition: 8,
                xWidth: 1,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
