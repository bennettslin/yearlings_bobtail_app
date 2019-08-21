import {
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    PANEL
} from '../../../constants/scene'
import { JOHNNY_HORTON_ALBUM } from '../../../constants/scene/things/cardboards'
import {
    MIRRORED_SINK,
    TOWEL_RACK
} from '../../../constants/scene/things/cutouts'
import { RECORD_PLAYER_STOOL } from '../../../constants/scene/things/fixtures'
import { BATHTUB } from '../../../constants/scene/things/panels'
import { PEOPLE_ALL_SHARED } from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [PANEL]: {
        [BATHTUB]: {
            yIndex: 4,
            xPosition: 4.5,
            scaleFactor: 0.3
        }
    }
}

export const THINGS_BATHROOM_BATHING = {
    [CUTOUT]: {
        [MIRRORED_SINK]: {
            yIndex: 1,
            xPosition: 8,
            scaleFactor: 0.4,
            sharedStyle: PEOPLE_ALL_SHARED
        },
        [TOWEL_RACK]: {
            yIndex: 1,
            xPosition: 3,
            zOffset: 1.5,
            scaleFactor: 0.32
        }
    }
}

export const THINGS_BATHROOM_SINGING = {
    [CARDBOARD]: {
        [JOHNNY_HORTON_ALBUM]: {
            yIndex: 5,
            xPosition: 8.25,
            scaleFactor: 0.15,
            perspective: 50,
            rotateY: 25,
            skewX: 5,
            sharedStyle: PEOPLE_ALL_SHARED
        }
    },
    [FIXTURE]: {
        [RECORD_PLAYER_STOOL]: {
            yIndex: 5,
            xPosition: 7,
            scaleFactor: 0.25
        }
    }
}

export default ARRANGEMENTS_THINGS
