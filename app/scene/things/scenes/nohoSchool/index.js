import {
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    PANELS
} from 'constants/scene'
import { NOHO_SCHOOL_BACKDROP } from '../../keys/backdrops'
import { PLAYGROUND_SLIDE } from '../../keys/cutouts'
import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG
} from '../../keys/fixtures'
import { NOHO_SCHOOLHOUSE } from '../../keys/flats'
import { ESTHER_SPEECH_PANEL } from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [NOHO_SCHOOL_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [PLAYGROUND_SLIDE]: {
            yIndex: 1,
            arrangement: {
                xFloat: 4,
                xWidth: 2,
                zHeight: 3
            }
        }
    },
    [FIXTURES]: {
        [PLAYGROUND_BALL]: {
            yIndex: 4,
            arrangement: {
                xFloat: 2,
                xWidth: 1,
                zHeight: 1,
                zOffset: 1
            }
        },
        [SAFEWAY_BAG]: {
            yIndex: 4,
            arrangement: {
                xFloat: 2,
                xWidth: 1,
                zHeight: 1,
                zOffset: 1
            }
        }
    },
    [FLATS]: {
        [NOHO_SCHOOLHOUSE]: {
            yIndex: 1,
            arrangement: {
                xFloat: 2,
                xWidth: 5,
                zHeight: 3
            }
        }
    },
    [PANELS]: {
        [ESTHER_SPEECH_PANEL]: {
            yIndex: 2,
            arrangement: {
                xFloat: 8,
                xWidth: 5,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
