import {
    GUITAR_STAND,
    GUITAR_AMP,
    BASS_AMP,
    KICK_DRUM,
    GUITAR_CASE_OPEN
} from 'scene/fixtureKeys'


const ARRANGEMENTS_MAP = {
    [GUITAR_STAND]: {
        yIndex: 5,
        arrangement: {
            xFloat: 5,
            xWidth: 1,
            zHeight: 1
        }
    },
    [GUITAR_AMP]: {
        yIndex: 5,
        arrangement: {
            xFloat: 5,
            xWidth: 1,
            zHeight: 1
        }
    },
    [BASS_AMP]: {
        yIndex: 5,
        arrangement: {
            xFloat: 5,
            xWidth: 1,
            zHeight: 1
        }
    },
    [KICK_DRUM]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5,
            xWidth: 1.5,
            zHeight: 1.5
        }
    },
    [GUITAR_CASE_OPEN]: {
        yIndex: 3,
        arrangement: {
            xFloat: 6.5,
            xWidth: 3,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
