import {
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    PANEL
} from 'constants/scene'
import { JOHNNY_HORTON_ALBUM } from '../../keys/cardboards'
import {
    MIRRORED_SINK,
    TOWEL_RACK
} from '../../keys/cutouts'
import { RECORD_PLAYER_STOOL } from '../../keys/fixtures'
import { BATHTUB } from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [PANEL]: {
        [BATHTUB]: {
            yIndex: 4,
            arrangement: {
                xPosition: 4.5,
                xWidth: 5,
                zHeight: 1.5
            }
        }
    }
}

export const THINGS_BATHROOM_BATHING = {
    [CUTOUT]: {
        [MIRRORED_SINK]: {
            yIndex: 1,
            arrangement: {
                xPosition: 8,
                xWidth: 2,
                zHeight: 3
            }
        },
        [TOWEL_RACK]: {
            yIndex: 1,
            arrangement: {
                xPosition: 4,
                xWidth: 2,
                zHeight: 2,
                zOffset: 3
            }
        }
    }
}

export const THINGS_BATHROOM_SINGING = {
    [CARDBOARD]: {
        [JOHNNY_HORTON_ALBUM]: {
            yIndex: 5,
            arrangement: {
                xPosition: 6.5,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [FIXTURE]: {
        [RECORD_PLAYER_STOOL]: {
            yIndex: 5,
            arrangement: {
                xPosition: 6.5,
                xWidth: 1,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
