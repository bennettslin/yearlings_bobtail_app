import {
    BACKDROPS,
    CUTOUTS,
    FLATS
} from 'constants/scene'
import { OAKLAND_FRONT_BACKDROP } from '../../keys/backdrops'
import {
    TWIN_STREETLAMP_FAR,
    TWIN_STREETLAMP_MIDDLE,
    TWIN_STREETLAMP_NEAR
} from '../../keys/cutouts'
import {
    RESIDENTIAL_FAR_LEFT,
    RESIDENTIAL_MIDDLE_LEFT,
    RESIDENTIAL_NEAR_LEFT,
    RESIDENTIAL_FAR_RIGHT,
    RESIDENTIAL_MIDDLE_RIGHT,
    RESIDENTIAL_NEAR_RIGHT
} from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [OAKLAND_FRONT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [TWIN_STREETLAMP_FAR]: {
            yIndex: 1,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        },
        [TWIN_STREETLAMP_MIDDLE]: {
            yIndex: 2,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 6
            }
        },
        [TWIN_STREETLAMP_NEAR]: {
            yIndex: 3,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 7
            }
        }
    },
    [FLATS]: {
        [RESIDENTIAL_FAR_LEFT]: {
            yIndex: 1,
            arrangement: {
                xFloat: 3,
                xWidth: 3,
                zHeight: 4
            }
        },
        [RESIDENTIAL_FAR_RIGHT]: {
            yIndex: 1,
            arrangement: {
                xFloat: 8,
                xWidth: 3,
                zHeight: 4
            }
        },
        [RESIDENTIAL_MIDDLE_LEFT]: {
            yIndex: 2,
            arrangement: {
                xFloat: 2,
                xWidth: 3,
                zHeight: 5
            }
        },
        [RESIDENTIAL_MIDDLE_RIGHT]: {
            yIndex: 2,
            arrangement: {
                xFloat: 9,
                xWidth: 3,
                zHeight: 5
            }
        },
        [RESIDENTIAL_NEAR_LEFT]: {
            yIndex: 3,
            arrangement: {
                xFloat: 1,
                xWidth: 3,
                zHeight: 6
            }
        },
        [RESIDENTIAL_NEAR_RIGHT]: {
            yIndex: 3,
            arrangement: {
                xFloat: 10,
                xWidth: 3,
                zHeight: 6
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
