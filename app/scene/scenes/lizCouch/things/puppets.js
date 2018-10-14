import {
    OPAL_LAP,
    OPAL_WINDOW,
    OPAL_COUCH,
    PEAHEN,
    PEACOCK
} from '../../../puppetKeys'

const ARRANGEMENTS_MAP = {
    [OPAL_LAP]: {
        yIndex: 4,
        arrangement: {
            xFloat: 2.5,
            xWidth: 1,
            zHeight: 0.5
        }
    },
    [OPAL_WINDOW]: {
        yIndex: 1,
        arrangement: {
            xFloat: 6,
            xWidth: 1,
            zHeight: 0.5
        }
    },
    [OPAL_COUCH]: {
        yIndex: 4,
        arrangement: {
            xFloat: 1,
            xWidth: 1,
            zHeight: 0.5
        }
    },
    [PEAHEN]: {
        yIndex: 4,
        arrangement: {
            xFloat: 6,
            xWidth: 1,
            zHeight: 2
        }
    },
    [PEACOCK]: {
        yIndex: 4,
        arrangement: {
            xFloat: 7,
            xWidth: 1,
            zHeight: 2
        }
    }
}

export default ARRANGEMENTS_MAP
