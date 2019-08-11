import {
    BENNETT,
    ANA,
    HOWIE,
    TOMER
} from '../../../constants/scene/actors'
import { ABBEY_ROAD } from '../../../constants/scene/actors/instances/songs'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [ABBEY_ROAD]: {
            yIndex: 5,
            arrangement: {
                xPosition: 6,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [ANA]: {
        [ABBEY_ROAD]: {
            yIndex: 5,
            arrangement: {
                xPosition: 4,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [HOWIE]: {
        [ABBEY_ROAD]: {
            yIndex: 5,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [TOMER]: {
        [ABBEY_ROAD]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
