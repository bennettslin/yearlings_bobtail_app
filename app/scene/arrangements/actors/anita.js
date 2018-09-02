import {
    EXASPERATED,
    CONCERNED,
    CHEERING
} from 'scene/instanceKeys/anita'

import {
    YOUNG_CHILD,
    EPILOGUE
} from 'scene/instanceKeys/songs'

const ARRANGEMENTS_MAP = {
    [EXASPERATED]: {
        yIndex: 5,
        arrangement: {
            xFloat: 5,
            xWidth: 1,
            zHeight: 3.75
        }
    },
    [CONCERNED]: {
        yIndex: 3,
        arrangement: {
            xFloat: 2,
            xWidth: 1,
            zHeight: 3.75
        }
    },
    [CHEERING]: {
        yIndex: 5,
        arrangement: {
            xFloat: 4.5,
            xWidth: 1.5,
            zHeight: 2.75
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
