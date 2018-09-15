import {
    RECORDING_CONSOLE,
    RECORDING_MIC,
    RECORDING_BEERS
} from 'scene/fixtureKeys'

const ARRANGEMENTS_MAP = {
    [RECORDING_CONSOLE]: {
        yIndex: 2,
        arrangement: {
            xFloat: 9,
            xWidth: 2,
            zHeight: 0.5
        }
    },
    [RECORDING_MIC]: {
        yIndex: 1,
        arrangement: {
            xFloat: 10,
            xWidth: 0.5,
            zHeight: 2
        }
    },
    [RECORDING_BEERS]: {
        yIndex: 3,
        arrangement: {
            xFloat: 7,
            xWidth: 1,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
