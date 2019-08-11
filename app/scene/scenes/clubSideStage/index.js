import {
    BENNETT,
    AMY,
    MARA,
    JACOB
} from '../../../constants/scene/actors'
import {
    FLIRTING,
    CARRYING
} from '../../../constants/scene/actors/instances/songs'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [FLIRTING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [AMY]: {
        [FLIRTING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MARA]: {
        [CARRYING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [JACOB]: {
        [CARRYING]: {
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
