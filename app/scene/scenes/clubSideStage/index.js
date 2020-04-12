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
    [BENNETT]: {
        [FLIRTING]: {
            yIndex: 3,
            xPosition: 6.5
        }
    },
    [AMY]: {
        [FLIRTING]: {
            yIndex: 3,
            xPosition: 8
        }
    },
    [MARA]: {
        [CARRYING]: {
            yIndex: 3,
            xPosition: 4
        }
    },
    [JACOB]: {
        [CARRYING]: {
            yIndex: 2,
            xPosition: 2
        }
    }
}
