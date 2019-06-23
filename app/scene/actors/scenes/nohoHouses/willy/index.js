import {
    HOWIE_WILLY,
    TOMER
} from 'constants/scene/actors'
import { GANGBANGER } from 'constants/scene/actors/instances/songs'

const ARRANGEMENTS_ACTORS = {
    [HOWIE_WILLY]: {
        [GANGBANGER]: {
            yIndex: 5,
            arrangement: {
                xPosition: 4.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [TOMER]: {
        [GANGBANGER]: {
            yIndex: 5,
            arrangement: {
                xPosition: 6.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
