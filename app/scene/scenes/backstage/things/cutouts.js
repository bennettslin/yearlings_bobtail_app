import {
    SANDBAGS,
    STAGE_LIGHTS
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [SANDBAGS]: {
        yIndex: 4,
        arrangement: {
            xFloat: 4.5,
            xWidth: 5,
            zHeight: 1.5
        }
    },
    [STAGE_LIGHTS]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8,
            xWidth: 2,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
