import {
    BENNETT,
    AMY,
    MARA,
    JACOB,
} from '../../../../../src/constants/scene/actors'
import {
    FLIRTING,
    CARRYING,
} from '../../../../../src/constants/scene/actors/songs'

export default {
    [JACOB]: {
        [CARRYING]: {
            yIndex: 3,
            xPosition: 1.7,
        },
    },
    [MARA]: {
        [CARRYING]: {
            yIndex: 4,
            xPosition: 3.5,
        },
    },
    [BENNETT]: {
        [FLIRTING]: {
            yIndex: 4,
            xPosition: 5.8,
        },
    },
    [AMY]: {
        [FLIRTING]: {
            yIndex: 4,
            xPosition: 6.9,
        },
    },
}
