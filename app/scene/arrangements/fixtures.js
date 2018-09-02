import {
    PLAYGROUND_BALL,
    RECORD_PLAYER_STOOL
} from 'scene/fixtureKeys'

const ARRANGEMENTS_MAP = {
    [PLAYGROUND_BALL]: {
        yIndex: 4,
        arrangement: {
            xFloat: 2,
            xWidth: 1,
            zHeight: 1,
            zOffset: 2
        }
    },
    [RECORD_PLAYER_STOOL]: {
        yIndex: 5,
        arrangement: {
            xFloat: 6.5,
            xWidth: 1,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
