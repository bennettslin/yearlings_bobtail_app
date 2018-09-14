import {
    MICROPHONE_STAND,
    ALBUMS_MILK_CRATE,
    BASS_CASE_OPEN,
    DRUMKIT
} from 'scene/fixtureKeys'

const ARRANGEMENTS_MAP = {
    [MICROPHONE_STAND]: {
        yIndex: 3,
        arrangement: {
            xFloat: 4,
            xWidth: 0.5,
            zHeight: 4
        }
    },
    [ALBUMS_MILK_CRATE]: {
        yIndex: 3,
        arrangement: {
            xFloat: 4.5,
            xWidth: 1.5,
            zHeight: 1.5
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
