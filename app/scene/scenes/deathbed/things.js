import {
    CUTOUT,
    FIXTURE,
    PANEL
} from 'constants/scene'
import { IV_DRIP } from 'constants/scene/things/cutouts'
import { HOSPITAL_RECORD_PLAYER } from 'constants/scene/things/fixtures'
import {
    DEATHBED_THOUGHT_PANEL,
    TENNIS_THOUGHT_PANEL,
    INVERSE_THOUGHT_PANEL,
    HOSPITAL_BED
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [IV_DRIP]: {
            yIndex: 1,
            xPosition: 2,
            scaleFactor: 0.35
        }
    },
    [FIXTURE]: {
        [HOSPITAL_RECORD_PLAYER]: {
            yIndex: 3,
            arrangement: {
                xPosition: 1,
                xWidth: 1.5,
                zHeight: 0.5
            }
        }
    },
    [PANEL]: {
        [HOSPITAL_BED]: {
            yIndex: 5,
            xPosition: 3,
            scaleFactor: 0.27
        }
    }
}

export const THINGS_DEATHBED_CREMATED = {
    [PANEL]: {
        [DEATHBED_THOUGHT_PANEL]: {
            yIndex: 0,
            arrangement: {
                xPosition: 4,
                xWidth: 8,
                zHeight: 6
            }
        },
        [TENNIS_THOUGHT_PANEL]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 4
            }
        }
    }
}

export const THINGS_DEATHBED_DREAM = {
    [PANEL]: {
        [INVERSE_THOUGHT_PANEL]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
