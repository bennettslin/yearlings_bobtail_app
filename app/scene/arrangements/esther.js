import {
    CURIOUS,
    SNICKERING,
    SITA_HURT,
    SITA_SOBBING
} from 'scene/actors/esther'

import {
    YOUNG_CHILD,
    EPILOGUE
} from 'scene/actors/songs'

const ARRANGEMENTS_MAP = {
    [CURIOUS]: {
        yIndex: 4,
        arrangement: {
            xFloat: 3.5,
            xWidth: 1,
            zHeight: 3.83
        }
    },
    [SNICKERING]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5.5,
            xWidth: 1,
            zHeight: 3.83
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
    [SITA_HURT]: {
        yIndex: -1,
        arrangement: {
            xFloat: 0,
            xWidth: 0,
            zHeight: 0
        }
    },
    [SITA_SOBBING]: {
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
