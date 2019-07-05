import {
    BACKDROP,
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL
} from 'constants/scene'
import { NOHO_SCHOOL_BACKDROP } from 'constants/scene/things/backdrops'
import { PLAYGROUND_SLIDE } from 'constants/scene/things/cutouts'
import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG
} from 'constants/scene/things/fixtures'
import { NOHO_SCHOOLHOUSE } from 'constants/scene/things/flats'
import { ESTHER_SPEECH_PANEL } from 'constants/scene/things/panels'

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
            yIndex: 2,
            xPosition: 1,
            scaleFactor: 0.3
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
                xPosition: 10,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [FLAT]: {
        [NOHO_SCHOOLHOUSE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5,
                xWidth: 5,
                zHeight: 3
            }
        }
    },
    [PANEL]: {
        [ESTHER_SPEECH_PANEL]: {
            yIndex: 2,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
