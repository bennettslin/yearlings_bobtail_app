import {
    REATTA_SEAT,
    REATTA_SEAT_LOWERED,
    REATTA_DASHBOARD
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [REATTA_SEAT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 2,
            xWidth: 2,
            zHeight: 2
        }
    },
    [REATTA_SEAT_LOWERED]: {
        yIndex: 3,
        arrangement: {
            xFloat: 2,
            xWidth: 2,
            zHeight: 2
        }
    },
    [REATTA_DASHBOARD]: {
        yIndex: 4,
        arrangement: {
            xFloat: 3.5,
            xWidth: 2,
            zHeight: 2
        }
    }
}

export default ARRANGEMENTS_MAP
