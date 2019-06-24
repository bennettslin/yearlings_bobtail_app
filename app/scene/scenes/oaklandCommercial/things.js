import {
    FLAT
} from 'constants/scene'
import {
    COMMERCIAL_CENTRE,
    COMMERCIAL_FAR_LEFT,
    COMMERCIAL_MIDDLE_LEFT,
    COMMERCIAL_NEAR_LEFT,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_RIGHT
} from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [FLAT]: {
        [COMMERCIAL_CENTRE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 6,
                zHeight: 3
            }
        },
        [COMMERCIAL_FAR_LEFT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2.5,
                xWidth: 2,
                zHeight: 4
            }
        },
        [COMMERCIAL_FAR_RIGHT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 8.5,
                xWidth: 2,
                zHeight: 4
            }
        },
        [COMMERCIAL_MIDDLE_LEFT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 1.5,
                xWidth: 2,
                zHeight: 5
            }
        },
        [COMMERCIAL_MIDDLE_RIGHT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 9.5,
                xWidth: 2,
                zHeight: 5
            }
        },
        [COMMERCIAL_NEAR_LEFT]: {
            yIndex: 4,
            arrangement: {
                xPosition: 0.5,
                xWidth: 2,
                zHeight: 6
            }
        },
        [COMMERCIAL_NEAR_RIGHT]: {
            yIndex: 4,
            arrangement: {
                xPosition: 10.5,
                xWidth: 2,
                zHeight: 6
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
