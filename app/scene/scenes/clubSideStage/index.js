import {
    BENNETT,
    AMY,
    MARA,
    JACOB
} from '../../../constants/scene/actors'
import {
    FLIRTING,
    CARRYING
} from '../../../constants/scene/actors/songs'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [FLIRTING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [AMY]: {
        [FLIRTING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [MARA]: {
        [CARRYING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [JACOB]: {
        [CARRYING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
