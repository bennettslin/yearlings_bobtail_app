import {
    BASS_CASE_SIDE,
    DRUMS_STACKED,
    ARRANGEMENT_DRUMS_STACKED_BASEMENT,
    ARRANGEMENT_DRUMS_STACKED_CLUB
} from '../../../fixtureKeys'


const ARRANGEMENTS_MAP = {
    [BASS_CASE_SIDE]: {
        yIndex: 3,
        arrangement: {
            xFloat: 1,
            xWidth: 3,
            zHeight: 2
        }
    },
    [DRUMS_STACKED]: {
        [ARRANGEMENT_DRUMS_STACKED_BASEMENT]: {
            yIndex: 3,
            arrangement: {
                xFloat: 3.5,
                xWidth: 1.5,
                zHeight: 5
            }
        },
        [ARRANGEMENT_DRUMS_STACKED_CLUB]: {
            yIndex: 3,
            arrangement: {
                xFloat: 2.5,
                xWidth: 1.5,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_MAP
