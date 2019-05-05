import {
    OPAL_COUCH,
    OPAL_GAZING,
    PEAHEN,
    PEACOCK
} from '../../../keys/puppets'

const ARRANGEMENTS_MAP = {
    [OPAL_COUCH]: {
        yIndex: 4,
        arrangement: {
            xFloat: 1,
            xWidth: 1,
            zHeight: 0.5
        }
    },
    [OPAL_GAZING]: {
        yIndex: 1,
        arrangement: {
            xFloat: 6,
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
