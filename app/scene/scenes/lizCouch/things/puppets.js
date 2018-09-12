import {
    OPAL_LAP,
    OPAL_WINDOW,
    OPAL_COUCH
} from 'scene/puppetKeys'

const ARRANGEMENTS_MAP = {
    [OPAL_LAP]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5,
            xWidth: 5,
            zHeight: 3
        }
    },
    [OPAL_WINDOW]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5,
            xWidth: 5,
            zHeight: 3
        }
    },
    [OPAL_COUCH]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5,
            xWidth: 4,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
