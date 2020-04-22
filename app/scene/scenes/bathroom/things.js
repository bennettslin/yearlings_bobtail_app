import {
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    PANEL
} from '../../../constants/scene/things'
import { JOHNNY_HORTON_ALBUM } from '../../../constants/scene/things/cardboards'
import {
    MIRRORED_SINK,
    TOWEL_RACK
} from '../../../constants/scene/things/cutouts'
import { RECORD_PLAYER_STOOL } from '../../../constants/scene/things/fixtures'
import { BATHTUB } from '../../../constants/scene/things/panels'

export default {
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
        [TOWEL_RACK]: {
            yIndex: 2,
            xPosition: 2.5,
            zOffset: 1.5,
            scaleFactor: 0.32
        },
        [MIRRORED_SINK]: {
            yIndex: 2,
            xPosition: 8.5,
            scaleFactor: 0.32
        }
    }
}

export const THINGS_BATHROOM_SINGING = {
    [CARDBOARD]: {
        [JOHNNY_HORTON_ALBUM]: {
            yIndex: 4,
            xPosition: 9,
            scaleFactor: 0.15,
            perspective: 50,
            rotateY: 25,
            skewX: 5
        }
    },
    [FIXTURE]: {
        [RECORD_PLAYER_STOOL]: {
            yIndex: 4,
            xPosition: 7.7,
            scaleFactor: 0.25
        }
    }
}
