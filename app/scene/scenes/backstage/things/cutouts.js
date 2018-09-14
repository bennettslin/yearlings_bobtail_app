import {
    SANDBAGS,
    STAGE_LIGHTS
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [SANDBAGS]: {
        yIndex: 4,
        arrangement: {
            xFloat: 3,
            xWidth: 3,
            zHeight: 2,
            zOffset: 4
        }
    },
    [STAGE_LIGHTS]: {
        yIndex: 4,
        arrangement: {
            xFloat: 3,
            xWidth: 4,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
