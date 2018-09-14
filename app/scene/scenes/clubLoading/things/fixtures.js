import {
    BASS_CASE_UPRIGHT,
    DRUMS_STACKED,
    ARRANGEMENT_DRUMS_STACKED_BASEMENT,
    ARRANGEMENT_DRUMS_STACKED_CLUB
} from 'scene/fixtureKeys'


const ARRANGEMENTS_MAP = {
    [BASS_CASE_UPRIGHT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 2.5,
            xWidth: 1.5,
            zHeight: 4
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
                xFloat: 0.5,
                xWidth: 1.5,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_MAP
