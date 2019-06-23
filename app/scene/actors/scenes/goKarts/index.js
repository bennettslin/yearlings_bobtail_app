import {
    BENNETT,
    LIZ
} from 'constants/scene/actors'
import { GO_KARTS } from 'constants/scene/actors/instances/songs'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [GO_KARTS]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2,
                xWidth: 3,
                zHeight: 3
            }
        }
    },
    [LIZ]: {
        [GO_KARTS]: {
            yIndex: 2,
            arrangement: {
                xPosition: 8,
                xWidth: 3,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
