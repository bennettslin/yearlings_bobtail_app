import {
    BACKDROP,
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL
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
    [BACKDROP]: {
        [NOHO_SCHOOL_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUT]: {
        [PLAYGROUND_SLIDE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 4,
                xWidth: 2,
                zHeight: 3
            }
        }
    },
    [FIXTURE]: {
        [PLAYGROUND_BALL]: {
            yIndex: 4,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 1,
                zOffset: 1
            }
        },
        [SAFEWAY_BAG]: {
            yIndex: 4,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 1,
                zOffset: 1
            }
        }
    },
    [FLAT]: {
        [NOHO_SCHOOLHOUSE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 2,
                xWidth: 5,
                zHeight: 3
            }
        }
    },
    [PANEL]: {
        [ESTHER_SPEECH_PANEL]: {
            yIndex: 2,
            arrangement: {
                xPosition: 8,
                xWidth: 5,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
