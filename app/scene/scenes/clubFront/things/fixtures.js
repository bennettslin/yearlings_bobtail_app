import {
    GUITAR,
    BASS_CASE_OPEN,
    DRUMKIT
} from 'scene/fixtureKeys'

const ARRANGEMENTS_MAP = {
    [GUITAR]: {
        yIndex: 3,
        arrangement: {
            xFloat: 1,
            xWidth: 1,
            zHeight: 3
        }
    },
    [BASS_CASE_OPEN]: {
        yIndex: 3,
        arrangement: {
            xFloat: 8,
            xWidth: 4,
            zHeight: 1
        }
    },
    [DRUMKIT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5.5,
            xWidth: 4,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
