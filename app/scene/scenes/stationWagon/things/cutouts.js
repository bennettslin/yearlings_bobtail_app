import {
    STATION_WAGON_FRONT,
    STATION_WAGON_BACK
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [STATION_WAGON_FRONT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 4.5,
            xWidth: 5,
            zHeight: 1.5
        }
    },
    [STATION_WAGON_BACK]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8,
            xWidth: 2,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
