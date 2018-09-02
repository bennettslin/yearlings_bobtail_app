import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING,
} from 'scene/actors/youngBennett'

import {
    YOUNG_CHILD,
    EPILOGUE
} from 'scene/actors/songs'

const ARRANGEMENTS_MAP = {
    [PANICKED]: {
        yIndex: 5,
        arrangement: {
            xFloat: 9,
            xWidth: 1,
            zHeight: 3.5
        }
    },
    [FLUSTERED]: {
        yIndex: 4,
        arrangement: {
            xFloat: 8.5,
            xWidth: 1.5,
            zHeight: 2.5,
            zOffset: -2
        }
    },
    [BATHING]: {
        yIndex: 3,
        arrangement: {
            xFloat: 5.5,
            xWidth: 1.5,
            zHeight: 2.5
        }
    },
    [SINGING]: {
        yIndex: 3,
        arrangement: {
            xFloat: 6,
            xWidth: 1,
            zHeight: 3
        }
    },
    [YOUNG_CHILD]: {
        yIndex: -1,
        arrangement: {
            xFloat: 0,
            xWidth: 0,
            zHeight: 0
        }
    },
    [EPILOGUE]: {
        yIndex: -1,
        arrangement: {
            xFloat: 0,
            xWidth: 0,
            zHeight: 0
        }
    }
}

export default ARRANGEMENTS_MAP
