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

export default {
    [JACOB]: {
        [CARRYING]: {
            yIndex: 3,
            xPosition: 2.1
        }
    },
    [MARA]: {
        [CARRYING]: {
            yIndex: 4,
            xPosition: 4
        }
    },
    [BENNETT]: {
        [FLIRTING]: {
            yIndex: 4,
            xPosition: 6.3
        }
    },
    [AMY]: {
        [FLIRTING]: {
            yIndex: 4,
            xPosition: 7.9
        }
    }
}
