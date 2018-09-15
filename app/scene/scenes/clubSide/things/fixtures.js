import {
    STAGE_MIC_SIDE,
    KICK_DRUM,
    GUITAR_CASE_OPEN
} from 'scene/fixtureKeys'


const ARRANGEMENTS_MAP = {
    [STAGE_MIC_SIDE]: {
        yIndex: 3,
        arrangement: {
            xFloat: 8.5,
            xWidth: 0.5,
            zHeight: 4
        }
    },
    [KICK_DRUM]: {
        yIndex: 1,
        arrangement: {
            xFloat: 3.5,
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
