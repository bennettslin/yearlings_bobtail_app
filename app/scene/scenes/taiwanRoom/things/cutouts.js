import {
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE_FRONT,
    BENNETT_TAIWAN_STAIRS,
    ODIN_TAIWAN_STAIRS
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [BUDDHA_SHRINE]: {
        yIndex: 4,
        arrangement: {
            xFloat: 2,
            xWidth: 2,
            zHeight: 2
        }
    },
    [TAIWAN_FRIDGE_FRONT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5,
            xWidth: 2.5,
            zHeight: 4
        }
    },
    [BENNETT_TAIWAN_STAIRS]: {
        yIndex: 2,
        arrangement: {
            xFloat: 7,
            xWidth: 1,
            zHeight: 4
        }
    },
    [ODIN_TAIWAN_STAIRS]: {
        yIndex: 2,
        arrangement: {
            xFloat: 9.5,
            xWidth: 2,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
